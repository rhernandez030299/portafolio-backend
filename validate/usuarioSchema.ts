import * as yup from 'yup';

export const usuarioSchema = yup.object().shape({
    nombre: yup.string().required(),
    email: yup.string().email().required(),
    descripcion: yup.string().required('Required'),
    contrasenia: yup.string()
      .min(8, "La contraseña debe tener minimo 8 caracteres")
      .required('Required'),
    edad: yup.number().required('Required'),
    idrol: yup.string().required(),
})