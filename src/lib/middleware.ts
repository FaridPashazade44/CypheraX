import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from './auth';

/**
 * Authentication middleware
 */
export async function authenticate(req: NextRequest): Promise<NextResponse | null> {
  const token = req.cookies.get('token')?.value || req.headers.get('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const payload = verifyToken(token);
  if (!payload) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  }

  return null; // Continue processing
}

/**
 * Rate limiting middleware (basic in-memory implementation)
 * NOTE: This implementation uses in-memory storage and will not work correctly
 * in production with multiple server instances or serverless deployments.
 * For production, consider using a distributed store like Redis or a service
 * like Upstash Rate Limit.
 */
const requestCounts = new Map<string, { count: number; resetTime: number }>();

export function rateLimit(maxRequests: number, windowMs: number) {
  return (req: NextRequest): NextResponse | null => {
    const identifier = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
    const now = Date.now();
    
    const record = requestCounts.get(identifier);
    
    if (!record || now > record.resetTime) {
      requestCounts.set(identifier, { count: 1, resetTime: now + windowMs });
      return null;
    }
    
    if (record.count >= maxRequests) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }
    
    record.count++;
    return null;
  };
}

// Preset rate limiters
export const authRateLimit = rateLimit(5, 60 * 1000); // 5 requests per minute
export const generalRateLimit = rateLimit(100, 60 * 1000); // 100 requests per minute
