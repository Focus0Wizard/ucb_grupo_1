import {Router} from 'express'

import { GetAllDoctors, addNewDoctor } from '../controllers/doctor.controller';

const router = Router()

router.get('/Medico',GetAllDoctors);

router.get('/Medico');

router.get('/Medico');

router.post("/Medico",addNewDoctor);

router.put('/Medico');

router.delete('/Medico');

export default router