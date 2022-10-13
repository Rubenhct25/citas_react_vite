const Paciente = ({pacientes, setPaciente, eliminarPaciente}) => {
    const {nombre, propietario, correo, fecha, sintomas, id} = pacientes;

    const handleEliminar = ()=> {
      const respuesta = confirm('Deseas eliminar el paciente?');

      if(respuesta){
        eliminarPaciente(id)
      }
    }

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">{nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">{propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{correo}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: {""}
        <span className="font-normal normal-case">{fecha}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {""}
        <span className="font-normal normal-case w-full">{sintomas}</span>
      </p>
      <div className="flex justify-between mt-10">
        <button 
        type="button"
        className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase my-2 mx-5 rounded-lg"
        onClick={()=> setPaciente(pacientes)}
        >Editar</button>

        <button 
        type="button"
        className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase my-2 mx-5 rounded-lg"
        onClick={handleEliminar}
        >Eliminar</button>
      </div>
    </div>
  );
};

export default Paciente;
