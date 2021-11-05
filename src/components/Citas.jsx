import React from 'react'

const Citas = ({ cita,eliminar }) => {

   

    return (
        <>

            <div class="card mt-3" styles="width: 18rem;">
                <div class="card-body">
                    <p>Mascota: <span>{cita.mascota}</span></p>
                    <p>Mascota: <span>{cita.dueño}</span></p>
                    <p>Fecha: <span>{cita.fecha}</span></p>
                    <p>Hora: <span>{cita.hora}</span></p>
                    <p>Sintomas: <span>{cita.sintomas}</span></p>
                </div>

            </div>
            <button onClick={() => eliminar(cita.id)}>Eliminar</button>
        </>
    )
}

export default Citas
