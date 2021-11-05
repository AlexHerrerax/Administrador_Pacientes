import React from 'react'
import './citas.css'

const Citas = ({ cita,eliminar}) => {

   
   
   

    return (
        <>


            <div className="card mt-3" styles="width: 18rem;">
                <div className="card-body degradado">
                    <p>Mascota: <span className="text-primary">{cita.mascota}</span></p>
                    <p>Dueño: <span className="text-primary">{cita.dueño}</span></p>
                    <p>Fecha: <span className="text-primary">{cita.fecha}</span></p>
                    <p>Hora: <span className="text-primary">{cita.hora}</span></p>
                    <p>Sintomas: <span className="text-primary">{cita.sintomas}</span></p>
                </div>

            </div>
            <div className="w-100 text-center">
            <button className=" btn btn-danger mt-2" onClick={() => eliminar(cita.id)}>Eliminar</button>
            </div>
        </>
    )
}

export default Citas
