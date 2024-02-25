import dotenv from 'dotenv';

// Load .env
dotenv.config();

// Environment
export const NODE_ENV = process.env.NODE_ENV;

// Mysql database credentials
export const MYSQL_PORT = process.env.MYSQL_PORT;
export const MYSQL_DBNAME = process.env.MYSQL_DBNAME;
export const MYSQL_DBHOST = process.env.MYSQL_DBHOST;
export const MYSQL_DBPASSWORD = process.env.MYSQL_DBPASSWORD;
export const MYSQL_DBUSERNAME = process.env.MYSQL_DBUSERNAME;