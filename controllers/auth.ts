import { Request, Response, NextFunction } from 'express';

export const login = async (req: Request, res: Response) => {

  //Verificar el email

  //verificar si el estado es activo

  //verficar la contraseña

  //generar el token 

  res.json({
    msg: 'ingreso al login',
  })
};