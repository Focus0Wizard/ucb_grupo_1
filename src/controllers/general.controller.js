import {getConnection, sql,querys} from '../database'



export const getGeneral = async (req,res) => {

    try{
        const pool = await getConnection()
        const result  = await pool.request().query(querys.GetAllPatients)
    
        res.json(result.recordset)
    }catch(error){
        res.status(500);
        res.send(error.message)
    }
};

export const addNewPatient = async (req,res) => {

    const {ID_Paciente, Nombre, Apellido, Genero, Fecha_Nacimiento, Direccion, Telefono, Correo_Electronico, ID_Aseguradora} = req.body
    
    if(Nombre == null || ID_Paciente == null){
        return res.status(400).json({ msg : 'Bad Request. Porfavor llena todos los campos'})
    }
    
    try{
        const pool = await getConnection();

        pool.request().input("ID_Paciente", sql.Int,ID_Paciente)
        .input("Nombre",sql.VarChar,Nombre)
        .input("Apellido", sql.VarChar, Apellido)
        .input("Genero", sql.Char, Genero)
        .input("Fecha_Nacimiento", sql.Date,Fecha_Nacimiento)
        .input("Direccion", sql.VarChar,Direccion)
        .input("Telefono", sql.Int, Telefono)
        .input("Correo_Electronico", sql.VarChar,Correo_Electronico)
        .input("ID_Aseguradora", sql.Int,ID_Aseguradora)
        .query(querys.AddPatient)
        
        res.json({ID_Paciente, Nombre, Apellido, Genero, Fecha_Nacimiento, Direccion, Telefono, Correo_Electronico, ID_Aseguradora});
    
    }catch(error){
        res.status(500);
        res.send(error.message)
    }
}

export const getPatientById = async (req, res) => {

    const {ID_Paciente} = req.params;

    const pool = await getConnection();
    const result = await pool.request()
    .input("ID_Paciente",ID_Paciente)
    .query(querys.getPatientById)
    
    res.send(result.recordset[0])
}

export const deletePatientById = async (req, res) => {

    const {ID_Paciente} = req.params;

    const pool = await getConnection();
    const result = await pool.request()
    .input("ID_Paciente",ID_Paciente)
    .query(querys.deletePatient)
    
    res.sendStatus(204)
}

export const getTotalPatient = async (req, res) => {

    const pool = await getConnection();
    const result = await pool.request()
    .query(querys.getTotalPatient)
    
    res.json(result.recordset[0][''])
}

export const updatePatientById = async (req, res) =>{
    const {Nombre, Apellido, Genero, Fecha_Nacimiento, Direccion, Telefono, Correo_Electronico, ID_Aseguradora} = req.body
    const {ID_Paciente} = req.params
    if(Nombre == null || ID_Paciente == null){
        return res.status(400).json({ msg : 'Bad Request. Porfavor llena todos los campos'})
    }

    const pool = await getConnection()
         pool.request()
        .input('ID_Paciente', sql.Int,ID_Paciente)
        .input('Nombre',sql.VarChar,Nombre)
        .input("Apellido", sql.VarChar, Apellido)
        .input("Genero", sql.Char, Genero)
        .input("Fecha_Nacimiento", sql.Date,Fecha_Nacimiento)
        .input("Direccion", sql.VarChar,Direccion)
        .input("Telefono", sql.Int, Telefono)
        .input("Correo_Electronico", sql.VarChar,Correo_Electronico)
        .input("ID_Aseguradora", sql.Int,ID_Aseguradora)
        .query(querys.updatePatientById)

    res.json({Nombre, Apellido, ID_Paciente})
}