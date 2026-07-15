import pkg from 'pg';
const { Pool } = pkg;

// console.log("DB USER:", process.env.DB_USER);
// console.log("DB PASSWORD:", process.env.DB_PASSWORD);
export const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});