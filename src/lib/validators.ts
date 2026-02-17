import { z } from 'zod';

// Email validation schema
export const emailSchema = z.string().email('Invalid email address');

// Username validation schema
export const usernameSchema = z
  .string()
  .min(3, 'Username must be at least 3 characters')
  .max(16, 'Username must be at most 16 characters')
  .regex(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores');

// Password validation schema
export const passwordSchema = z
  .string()
  .min(8, 'Password must be at least 8 characters')
  .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(/[0-9]/, 'Password must contain at least one number');

// Post content validation schema
export const postContentSchema = z
  .string()
  .min(1, 'Post content cannot be empty')
  .max(500, 'Post content must be at most 500 characters');

// Comment validation schema
export const commentSchema = z
  .string()
  .min(1, 'Comment cannot be empty')
  .max(250, 'Comment must be at most 250 characters');

// Signup validation schema
export const signupSchema = z.object({
  email: emailSchema,
  username: usernameSchema,
  password: passwordSchema,
});

// Login validation schema
export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, 'Password is required'),
});

// Post creation validation schema (userId comes from auth token)
export const createPostSchema = z.object({
  content: postContentSchema,
});

// Comment creation validation schema
export const createCommentSchema = z.object({
  content: commentSchema,
  postId: z.string().uuid('Invalid post ID'),
});

export type SignupInput = z.infer<typeof signupSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type CreatePostInput = z.infer<typeof createPostSchema>;
export type CreateCommentInput = z.infer<typeof createCommentSchema>;
