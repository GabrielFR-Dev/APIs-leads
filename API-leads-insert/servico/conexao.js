import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
    host: process.env.LD_HOST,
    user: process.env.LD_USER,
    password: process.env.LD_PASSWORD,
    database: process.env.LD_DATABASE
})

export default pool;
