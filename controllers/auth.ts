import { Request, Response, NextFunction } from 'express';
import Usuario from '../models/usuario';
import bcryptjs from 'bcryptjs';
import generarJWT from '../utils/generarJWT';

export const login = async (req: Request, res: Response) => {
  
  const { email, contrasenia } = req.body;
  
  try {

    //Verificar el email
    const usuario = await Usuario.findOne({
      where: {
        email,
      }
    })

    if( ! usuario ){
      return res.status(400).json({
        msg: 'Usuario o contraseña no son correctos'
      })
    }

    //verificar si el estado es activo
    if( usuario.dataValues.estado == 0 ){
      return res.status(400).json({
        msg: 'Usuario inactivo'
      })
    }

    //verficar la contraseña
    const validPassword = bcryptjs.compareSync( contrasenia, usuario.dataValues.contrasenia );

    if( ! validPassword ){
      return res.status(400).json({
        msg: 'Usuario o contraseña no son correctos'
      })
    }

    //generar el token 
    const token = await generarJWT(usuario.dataValues.idusuario);
    res.json({
      token,
      usuario: usuario.dataValues,
      msg: 'ingreso al login',
    })

  } catch (error) {

    console.log('error', error);
    
    res.status(500).json({
      error,
      msg: 'error en el login',
    })
  }
};