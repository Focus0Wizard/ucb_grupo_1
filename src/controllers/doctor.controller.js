import { getConnection, sql, querys } from '../database'
import { querysDoctor } from '../database/querys';

export const GetAllDoctors = async (req, res) => {
    try{
        const pool = await getConnection();
        const result = await pool.request().query(querysDoctor.GetAllDoctors)
        res.json(result.recordset)

    }catch(error){
        res.status(500);
        res.send(error.message)
    }
};

export const addNewDoctor = async (req, res) => {
    const {  Nombre, Apellido, Especialidad, Telefono, Correo_Electronico } = req.body
    const { ID_Medico } = req.params

    if ( ID_Medico == null || Nombre == null) {
        return res.status(400).json({ msg: 'Bad Request. Porfavor llena todos los campos' })
    }

    try{
        const pool = await getConnection();
        await pool.request().input('ID_Medico',sql.Int,ID_Medico)
        .input('Nombre',sql.VarChar,Nombre)
        .input('Apellido',sql.VarChar,Apellido)
        .input('Especialidad', sql.VarChar, Especialidad)
        .input('Telefono', sql.Int, Telefono)
        .input('Correo_Electronico', sql.VarChar, Correo_Electronico)
        .query(querysDoctor.AddDoctor)

    }catch(error){
        res.status(500);
        res.send(error.message)
    }
};