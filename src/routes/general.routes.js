import {Router} from 'express'

import {addNewPatient, deletePatientById, getGeneral, getPatientById, getTotalPatient, updatePatientById} from '../controllers/general.controller'


const router = Router()

router.get('/Paciente',getGeneral)

router.post('/Paciente',addNewPatient)

router.get('/Paciente/count',getTotalPatient)

router.get('/Paciente/:ID_Paciente',getPatientById )

router.delete('/Paciente/:ID_Paciente',deletePatientById)

router.put('/Paciente/:ID_Paciente',updatePatientById)


export default router