import { Request, Response, NextFunction } from 'express';
import Rol from '../models/rol';
import Usuario from '../models/usuario';
import { usuarioSchema } from '../validate/usuarioSchema';

export const getUsuarios = async (req: Request, res: Response) => {

  const users = await Usuario.findAll({
    attributes: ['idusuario', 'nombre', 'email', 'foto', 'idrol'],
    include: [{
      model: Rol
    }]
  });

  res.json({
      msg: 'getusuarios',
      users
  })
}

export const getUsuario = async (req: Request, res: Response) => {

  const { id } = req.params;

  const user = await Usuario.findByPk(id);

  if(user){
    res.json({
      msg: 'getusuarios',
      id,
      user
    })
  }else{
    res.status(404).json({
      msg: 'el usuario no existe',
    })
  }
}

export const postUsuario = async (req: Request, res: Response, next: NextFunction) => {  

  try {
    const { body } = req;

    const filename = req.file?.filename;
    
    await usuarioSchema.validate(body);
  
    body.idrol = 1;
    body.foto = filename;
    
    const response = await Usuario.create(body);
  
    res.json({
        msg: 'post usarios',
        body
    }) 
  } catch (error: any) {
    next(error);
    // return res.status(500).json({type: error.name, message: error.message})
  }
  
}

export const putUsuario = (req: Request, res: Response) => {

  const { id } = req.params;
  const { body } = req;

  res.json({
      msg: 'put usuarios',
      body,
      id
  })
}

export const deleteUsuario = async(req: Request, res: Response) => {

  const { id } = req.params;

  await Usuario.destroy({
    where: {
      idusuario: id
    }
  });

  res.json({
      msg: 'delete usuarios',
      id
  })
}