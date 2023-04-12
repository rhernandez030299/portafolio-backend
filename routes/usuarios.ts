import { Router } from 'express';
import { deleteUsuario, getUsuario, getUsuarios, postUsuario, putUsuario } from '../controllers/usuarios';
import upload from '../utils/multer';
import validarJWT from '../utils/validarJWT';

const router = Router();

router.get('/', validarJWT, getUsuarios);
router.get('/:id', getUsuario);
router.post('/', upload.single('file'), postUsuario);
router.put('/:id', upload.single('file'), putUsuario);
router.delete('/:id', deleteUsuario);

export default router;