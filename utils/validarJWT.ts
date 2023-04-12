import { request, response } from "express";
import jwt from 'jsonwebtoken';

const validarJWT = (req = request, res = response, next: () => void) => {

  const token = req.header('x-token');

  if(!token){
    return res.status(401).json({
      msg: 'No hay token'
    })
  }

  try {
    jwt.verify( token, process.env.SECRETKEY || '' );
    next();
  } catch (error) {
    return res.status(401).json({
      msg: 'Token no válido'
    })
  }
};

export default validarJWT;