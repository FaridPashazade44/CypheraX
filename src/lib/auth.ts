import jwt from 'jsonwebtoken';
import cookie from 'cookie';

const JWT_SECRET = 'your_jwt_secret_here'; // Replace with your actual JWT secret
const JWT_EXPIRATION = '1h'; // Token expiration time

/**
 * Generate JWT token
 * @param {Object} payload - Data to encode in the token
 * @returns {String} - JWT token
 */
export function generateToken(payload) {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
}

/**
 * Verify JWT token
 * @param {String} token - JWT token
 * @returns {Object} - Decoded token payload or null if verification fails
 */
export function verifyToken(token) {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (err) {
        console.error('Token verification failed:', err);
        return null;
    }
}

/**
 * Set cookie with JWT token
 * @param {String} token - JWT token
 * @param {Object} res - Response object
 */
export function setTokenCookie(token, res) {
    const serializedCookie = cookie.serialize('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 // 1 hour
    });
    res.setHeader('Set-Cookie', serializedCookie);
}

/**
 * Clear the token cookie
 * @param {Object} res - Response object
 */
export function clearTokenCookie(res) {
    const serializedCookie = cookie.serialize('token', '', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: -1
    });
    res.setHeader('Set-Cookie', serializedCookie);
}