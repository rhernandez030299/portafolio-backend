import { DataTypes } from "sequelize";
import db from "../db/connection";

const Usuario = db.define('usuario', {
  id_usuario : {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  contrasenia: {
    type: DataTypes.STRING
  },
  foto: {
    type: DataTypes.STRING
  },
  estado: {
    type: DataTypes.TINYINT
  },
  edad: {
    type: DataTypes.INTEGER
  },
  description: {
    type: DataTypes.STRING
  },
  idrol: {
    type: DataTypes.BIGINT
  }
})

export default Usuario;