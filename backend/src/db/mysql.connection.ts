import { createPool, Pool } from 'mysql2/promise';
import logger from '../logger/logger';
import dotenv from 'dotenv';
dotenv.config();

class MySQLDatabase {
  private static instance: Pool;

  public static getInstance(): Pool {
    if (!MySQLDatabase.instance) {
      MySQLDatabase.instance = createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
      });

      logger.info('MySQL Pool initialized');
    }

    return MySQLDatabase.instance;
  }
}

export default MySQLDatabase;
