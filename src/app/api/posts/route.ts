import { NextRequest, NextResponse } from 'next/server';
import { authenticate, generalRateLimit } from '@/lib/middleware';
import { getCurrentUser } from '@/lib/auth';
import pool from '@/lib/db';
import { z } from 'zod';

const createPostSchema = z.object({
  content: z.string().min(1).max(500),
});

export async function GET(request: NextRequest) {
  // Apply rate limiting
  const rateLimitResponse = generalRateLimit(request);
  if (rateLimitResponse) return rateLimitResponse;

  try {
    // Get current user (optional for viewing posts)
    const user = await getCurrentUser();

    // Get posts with user information
    const result = await pool.query(
      `SELECT p.id, p.content, p.created_at, u.username, u.email,
              (SELECT COUNT(*) FROM post_likes WHERE post_id = p.id) as likes,
              (SELECT COUNT(*) FROM comments WHERE post_id = p.id) as comments
       FROM posts p
       JOIN users u ON p.user_id = u.id
       ORDER BY p.created_at DESC
       LIMIT 50`
    );

    return NextResponse.json(
      {
        message: 'Posts retrieved successfully',
        posts: result.rows,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Get posts error:', error);
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
    const validatedData = createPostSchema.parse(body);

    // Create post
    const result = await pool.query(
      'INSERT INTO posts (user_id, content, created_at) VALUES ($1, $2, NOW()) RETURNING id, content, created_at',
      [user.userId, validatedData.content]
    );

    const post = result.rows[0];

    return NextResponse.json(
      {
        message: 'Post created successfully',
        post: {
          ...post,
          username: user.username,
          likes: 0,
          comments: 0,
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

    console.error('Create post error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
