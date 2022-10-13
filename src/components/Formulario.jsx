import React, { useState, useEffect } from 'react';
import Error from './Error';


function Formulario({pacientes, setPacientes, paciente, setPaciente}){
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [correo, setCorreo] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false);

    useEffect(()=> {
        if(Object.keys(paciente).length > 0){
            setNombre(paciente.nombre);
            setPropietario(paciente.propietario);
            setCorreo(paciente.correo)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    },[paciente])

    const generarId = ()=> {
        const ramdon = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36);

        return ramdon + fecha;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //validacion del formulario
        if([nombre, propietario, correo, fecha, sintomas].includes('')){
            
            setError(true)
            return;
        }

        setError(false)

        //objeto de paciente
        const objetoPaciente ={
            nombre,
            propietario,
            correo,
            fecha,
            sintomas,
        }

        if(paciente.id){
            //editando el paciente
            objetoPaciente.id = paciente.id;
            const pacientesActualizado = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState);
            
            setPacientes(pacientesActualizado)
            setPaciente({})

        }else{
            //Nuevo registro
            objetoPaciente.id = generarId();
            setPacientes([...pacientes, objetoPaciente])
        }

        

        //Reinicio del fromulario
        setNombre('');
        setPropietario('');
        setCorreo('');
        setFecha('');
        setSintomas('');
    }

    

    return(
        <div className="md:w-1/2 lg:w-3/5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

            <p className="text-lg mt-5 text-center mb-5">Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Agregalos</span>
            </p>

            <form onSubmit={handleSubmit} className="bg-white shadpw-md rounded-lg py-10 px-5 mb-10 mx-5">
                {error && <Error><p>Todos los campos son obligatorios</p></Error>}
                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
                        Nombre Mascota
                    </label>
                    <input 
                        id="mascota"
                        type="text"
                        placeholder="Nombre de la Mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                    
                </div>

                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
                        Nombre Propietario
                    </label>
                    <input 
                        id="propietario"
                        type="text"
                        placeholder="Nombre del Propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}
                    />

                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                        Email
                    </label>
                    <input 
                        id="email"
                        type="email"
                        placeholder="Email Contacto Propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                    />

                </div>

                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
                        Alta
                    </label>
                    <input 
                        id="alta"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                    />

                </div>

                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
                        Sintomas
                    </label>
                    <textarea 
                        id="sintomas"
                        placeholder="Describa los Sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    />

                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer"
                    value={paciente.id? 'Editar Paciente': 'Agregar Paciente'}
                />
            </form>
        </div>
        
        
    )
}

export default Formulario;