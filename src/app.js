import express from 'express'
import config from './config'

import patientRoutes from './routes/patient.routes'
import doctorRoutes from './routes/doctor.routes'
import aseguradoraRoutes from './routes/aseguradora.routes'

const app = express()


//setings 
app.set('port',config.port)
//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended : false}))

app.use(patientRoutes) , 
app.use(doctorRoutes) , 
app.use(aseguradoraRoutes)

export default app