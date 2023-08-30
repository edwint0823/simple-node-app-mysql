import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();
const config = {
    host: process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT),
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DATABASE,
    waitForConnections: true,
    connectionLimit: 10, // Adjust the limit as needed
    queueLimit: 0,
}

class mySqlClient {
    private pool: mysql.Pool;
    constructor() {
        this.pool = mysql.createPool(config);
    }
    async execute(query: string, values?: any): Promise<[any, any]> {
        const connection = await this.pool.getConnection();
        try {
            const result = await connection.execute(query, values);
            return result;
        } finally {
            connection.release();
        }
    }

    end() {
        this.pool.end();
    }
}

export default new mySqlClient();
