import sql from "mssql";

const dbSettings = {
    user: "Jhonn",
    password : "qwerty",
    server : "Local",
    database: "hospital",
    options:{
        encrytp: true,
    trustServerCertificate : true
    }
}

//aca ponemos en donde esta la base de datos
async function getConnection(){
    //se conecta a traves de los parametros al SQL
    const pool = await sql.connect(dbSettings)
    //que ejecute esto dentro la base de datos
    const resutl = await pool.request().query("SELECT 1");
    console.log(result);  
}

getConnection();