import { Pool } from 'pg';

// Create a PostgreSQL connection pool with environment variables
// Note: DB_PASSWORD should be set in production. If not set, the connection will fail at runtime.
const pool = new Pool({
  user: process.env.DB_USER || 'cypherax_user',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'cypherax_db',
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || '5432'),
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// Test connection on startup
pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
});

export default pool;
