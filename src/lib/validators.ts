// Input validation functions

/**
 * Validates an email address.
 * @param {string} email - The email address to validate.
 * @returns {boolean} - True if valid, otherwise false.
 */
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

/**
 * Validates a username.
 * @param {string} username - The username to validate.
 * @returns {boolean} - True if valid, otherwise false.
 */
function validateUsername(username) {
    const regex = /^[a-zA-Z0-9_]{3,16}$/;
    return regex.test(username);
}

/**
 * Validates a password.
 * @param {string} password - The password to validate.
 * @returns {boolean} - True if valid, otherwise false.
 */
function validatePassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return regex.test(password);
}

/**
 * Validates post content.
 * @param {string} content - The post content to validate.
 * @returns {boolean} - True if valid, otherwise false.
 */
function validatePostContent(content) {
    return content.length > 0 && content.length <= 500;
}

/**
 * Validates comment content.
 * @param {string} comment - The comment content to validate.
 * @returns {boolean} - True if valid, otherwise false.
 */
function validateComment(comment) {
    return comment.length > 0 && comment.length <= 250;
}