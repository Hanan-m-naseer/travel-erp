import pkg from 'pg';
const { Pool } = pkg;

export const pool = new Pool({
  user: 'postgres',       
  host: 'localhost',
  database: 'travel_erp',
  password: 'Hanan@123',
  port: 5432,
});