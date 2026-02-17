import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_change_in_production';
const JWT_EXPIRATION = process.env.JWT_EXPIRATION || '7d';

export interface JWTPayload {
  userId: string;
  email: string;
  username: string;
}

/**
 * Generate JWT token
 */
export function generateToken(payload: JWTPayload): string {
  return jwt.sign(
    payload,
    JWT_SECRET,
    { expiresIn: JWT_EXPIRATION } as jwt.SignOptions
  );
}

/**
 * Verify JWT token
 */
export function verifyToken(token: string): JWTPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as JWTPayload;
  } catch (err) {
    console.error('Token verification failed:', err);
    return null;
  }
}

/**
 * Hash password using bcrypt
 */
export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

/**
 * Compare password with hash
 */
export async function comparePassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

/**
 * Get token from cookies
 */
export async function getTokenFromCookies(): Promise<string | null> {
  const cookieStore = await cookies();
  return cookieStore.get('token')?.value || null;
}

/**
 * Get current user from request
 */
export async function getCurrentUser(): Promise<JWTPayload | null> {
  const token = await getTokenFromCookies();
  if (!token) return null;
  return verifyToken(token);
}
