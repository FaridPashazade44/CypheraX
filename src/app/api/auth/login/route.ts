import { NextRequest, NextResponse } from 'next/server';
import { loginSchema } from '@/lib/validators';
import { comparePassword, generateToken } from '@/lib/auth';
import { authRateLimit } from '@/lib/middleware';
import pool from '@/lib/db';
import { z } from 'zod';

export async function POST(request: NextRequest) {
  // Apply rate limiting
  const rateLimitResponse = authRateLimit(request);
  if (rateLimitResponse) return rateLimitResponse;

  try {
    const body = await request.json();

    // Validate input
    const validatedData = loginSchema.parse(body);

    // Find user
    const result = await pool.query(
      'SELECT id, username, email, password FROM users WHERE email = $1',
      [validatedData.email]
    );

    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    const user = result.rows[0];

    // Verify password
    const isValidPassword = await comparePassword(validatedData.password, user.password);
    
    if (!isValidPassword) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Generate token
    const token = generateToken({
      userId: user.id,
      email: user.email,
      username: user.username,
    });

    // Create response with cookie
    const response = NextResponse.json(
      {
        message: 'Login successful',
        user: { id: user.id, username: user.username, email: user.email },
      },
      { status: 200 }
    );

    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    });

    return response;
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation error', details: error.errors },
        { status: 400 }
      );
    }

    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
