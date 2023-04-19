import express, { Application } from 'express';
import cors from 'cors';
import db from '../db/connection';
import userRoutes from '../routes/usuarios';
import authRoutes from '../routes/auth';
import { errorHandler } from '../middlewares/errorHandler';

class Server {
  private app: Application;
  private port: string | undefined;
  private apiPaths = {
    usuarios: '/api/usuarios',
    auth: '/api/auth',
  }

  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.dbConnection();
    this.middlewares();
    this.routes();
    this.app.use( errorHandler );
  }

  async dbConnection() {
    try {
      await db.authenticate();
      console.log('database online');
    } catch (error) {
      console.log(error);
    }
  }

  middlewares(){   
    this.app.use( express.json() );
    this.app.use( cors() );
    this.app.use( '/uploads', express.static('uploads') )
  }

  routes(){
    this.app.use(this.apiPaths.usuarios, userRoutes);
    this.app.use(this.apiPaths.auth, authRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
        console.log('SERVIDOR CORRIENDO EN EL PUERTO', this.port)
    })
  }
}

export default Server;