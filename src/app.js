import express from 'express'
import config from './config'

import generalRoutes from './routes/general.routes'

const app = express()


//setings 
app.set('port',config.port)
//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended : false}))

app.use(generalRoutes)

export default app