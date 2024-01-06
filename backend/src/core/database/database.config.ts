import * as dotenv from 'dotenv';

dotenv.config();

export const databaseConfig = {
    devlopment: {
        dialect: process.env.DB_Dialect,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME_DEVELOPMENT,
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT)
    }
}
