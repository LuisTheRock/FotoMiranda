import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();

export const db = new Sequelize(
  'photo_miranda_db',
  process.env.DB_USER!,
  process.env.DB_PASS,
  {
    host: process.env.HOST,
    dialect: 'mysql',
  }
);
