import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const db = mysql.createConnection({
    host:  process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

// check connection
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});

export default db;