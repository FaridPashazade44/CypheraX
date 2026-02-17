import { NextRequest, NextResponse } from 'next/server';
import { authenticate, generalRateLimit } from '@/lib/middleware';
import { getCurrentUser } from '@/lib/auth';
import pool from '@/lib/db';
import { z } from 'zod';

const updateProfileSchema = z.object({
  username: z.string().min(3).max(16).optional(),
  bio: z.string().max(500).optional(),
  location: z.string().max(100).optional(),
  website: z.string().url().optional(),
});

export async function GET(request: NextRequest) {
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

    // Get user profile with stats
    const result = await pool.query(
      `SELECT u.id, u.username, u.email, u.bio, u.location, u.website, u.created_at,
              (SELECT COUNT(*) FROM posts WHERE user_id = u.id) as posts_count,
              (SELECT COUNT(*) FROM friendships WHERE user_id_1 = u.id OR user_id_2 = u.id) as friends_count
       FROM users u
       WHERE u.id = $1`,
      [user.userId]
    );

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const profile = result.rows[0];

    return NextResponse.json(
      {
        message: 'Profile retrieved successfully',
        profile: {
          id: profile.id,
          username: profile.username,
          email: profile.email,
          bio: profile.bio,
          location: profile.location,
          website: profile.website,
          joinedDate: profile.created_at,
          stats: {
            posts: parseInt(profile.posts_count),
            friends: parseInt(profile.friends_count),
          },
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Get profile error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
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
    const validatedData = updateProfileSchema.parse(body);

    // Build update query dynamically
    const updates: string[] = [];
    const values: any[] = [];
    let paramCount = 1;

    if (validatedData.username) {
      updates.push(`username = $${paramCount}`);
      values.push(validatedData.username);
      paramCount++;
    }
    if (validatedData.bio !== undefined) {
      updates.push(`bio = $${paramCount}`);
      values.push(validatedData.bio);
      paramCount++;
    }
    if (validatedData.location !== undefined) {
      updates.push(`location = $${paramCount}`);
      values.push(validatedData.location);
      paramCount++;
    }
    if (validatedData.website !== undefined) {
      updates.push(`website = $${paramCount}`);
      values.push(validatedData.website);
      paramCount++;
    }

    if (updates.length === 0) {
      return NextResponse.json(
        { error: 'No fields to update' },
        { status: 400 }
      );
    }

    values.push(user.userId);
    const query = `UPDATE users SET ${updates.join(', ')} WHERE id = $${paramCount} RETURNING id, username, email, bio, location, website`;

    const result = await pool.query(query, values);
    const updatedUser = result.rows[0];

    return NextResponse.json(
      {
        message: 'Profile updated successfully',
        profile: updatedUser,
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

    console.error('Update profile error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
