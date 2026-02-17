import { NextRequest, NextResponse } from 'next/server';
import { authenticate, generalRateLimit } from '@/lib/middleware';
import { getCurrentUser } from '@/lib/auth';
import pool from '@/lib/db';
import { z } from 'zod';

const createCommentSchema = z.object({
  postId: z.string().uuid(),
  content: z.string().min(1).max(250),
});

const getCommentsSchema = z.object({
  postId: z.string().uuid(),
});

export async function GET(request: NextRequest) {
  // Apply rate limiting
  const rateLimitResponse = generalRateLimit(request);
  if (rateLimitResponse) return rateLimitResponse;

  try {
    const { searchParams } = new URL(request.url);
    const postId = searchParams.get('postId');

    if (!postId) {
      return NextResponse.json(
        { error: 'Post ID is required' },
        { status: 400 }
      );
    }

    const validatedData = getCommentsSchema.parse({ postId });

    // Get comments for post
    const result = await pool.query(
      `SELECT c.id, c.content, c.created_at, u.username, u.email
       FROM comments c
       JOIN users u ON c.user_id = u.id
       WHERE c.post_id = $1
       ORDER BY c.created_at DESC`,
      [validatedData.postId]
    );

    return NextResponse.json(
      {
        message: 'Comments retrieved successfully',
        comments: result.rows,
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation error', details: error.errors },
        { status: 400 }
      );
    }

    console.error('Get comments error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  // Apply rate limiting
  const rateLimitResponse = generalRateLimit(request);
  if (rateLimitResponse) return rateLimitResponse;

  // Check authentication
  const authResponse = await authenticate(request);
  if (authResponse) return authResponse;

  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const validatedData = createCommentSchema.parse(body);

    // Create comment
    const result = await pool.query(
      'INSERT INTO comments (user_id, post_id, content, created_at) VALUES ($1, $2, $3, NOW()) RETURNING id, content, created_at',
      [user.userId, validatedData.postId, validatedData.content]
    );

    const comment = result.rows[0];

    return NextResponse.json(
      {
        message: 'Comment created successfully',
        comment: {
          ...comment,
          username: user.username,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation error', details: error.errors },
        { status: 400 }
      );
    }

    console.error('Create comment error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
