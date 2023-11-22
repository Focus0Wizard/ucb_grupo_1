
export const querysPatient = {
    GetAllPatients: 'SELECT * FROM Paciente',
    AddPatient : 'INSERT INTO Paciente (ID_Paciente,Nombre, Apellido, Genero, Fecha_Nacimiento, Direccion, Telefono, Correo_ELectronico, ID_Aseguradora) VALUES (@ID_Paciente, @Nombre, @Apellido, @Genero, @Fecha_Nacimiento, @Direccion, @Telefono, @Correo_ELectronico, @ID_Aseguradora)',
    getPatientById : 'SELECT * FROM Paciente WHERE ID_Paciente = @ID_Paciente',
    deletePatient : 'DELETE FROM [hospital].[dbo].[Paciente] WHERE ID_Paciente = @ID_Paciente' ,
    getTotalPatient : 'SELECT COUNT(*) FROM Paciente',
    updatePatientById : 'UPDATE Paciente SET ID_Paciente = @ID_Paciente, Nombre = @Nombre, Apellido = @Apellido, Genero = @Genero, Fecha_Nacimiento = @Fecha_Nacimiento, Direccion = @Direccion, Telefono = @Telefono, Correo_Electronico = @Correo_Electronico, ID_Aseguradora = @ID_Aseguradora WHERE ID_Paciente = @ID_Paciente '
}

export const querysDoctor = {
    GetAllDoctors: 'SELECT * FROM Medico' ,
    AddDoctor : 'INSERT INTO Medico (ID_Medico, Nombre, Apellido, Especialidad, Telefono, Correo_Electronico) VALUES (@ID_Medico, @Nombre, @Apellido, @Especialidad, @Telefono, @Correo_Electronico)'
}

export const querysAseguradora = {

    GetAllSeguros: 'SELECT * FROM Aseguradora'
    
}