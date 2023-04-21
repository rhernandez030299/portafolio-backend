import { Sequelize } from 'sequelize';
const port: number = Number(process.env.DB_PORT) || 3306
const db = new Sequelize( process.env.DB_NAME || 'bd_portafolio', process.env.DB_USER || 'root', process.env.DB_PASSWORD || '', {
  host: process.env.DB_HOST || 'localhost',
  dialect: 'mysql',
  port
});

export default db;
