import { db } from '../data/dataBase';
import { DataTypes } from 'sequelize';

export const Album = db.define('albums', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  albumName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  albumPassword: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});
