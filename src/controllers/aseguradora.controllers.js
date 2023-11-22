import { getConnection, sql, querys } from '../database'
import { querysAseguradora } from '../database/querys';


export const getAllAseguradoras = async (req,res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(querysAseguradora.GetAllSeguros)

        res.json(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};