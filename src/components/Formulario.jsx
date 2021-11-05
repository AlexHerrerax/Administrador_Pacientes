import React from 'react'
import { useState } from 'react'

const Formulario = ({agregarLista}) => {

    const [contador, setContador] = useState(0)
    const [cita, setCita] = useState({
        mascota:" ",
        dueño:" ",
        fecha:" ",
        hora:" ",
        sintomas:" ",
    })

    const {mascota, dueño, fecha, hora, sintomas} = cita
    
    const entradaInput =(e) =>{

        setCita({...cita,
            [e.target.name] : e.target.value,
            [e.target.name] : e.target.value,
            [e.target.name] : e.target.value,
            [e.target.name] : e.target.value,
            [e.target.name] : e.target.value,
        

        })
    }

    const enviarDatos = (e) =>{
        e.preventDefault();
        setContador(contador+1)
        cita.id=contador
        agregarLista(cita)
        setCita({
            mascota:" ",
            dueño:" ",
            fecha:" ",
            hora:" ",
            sintomas:" ",
        })
    }


    return (
        <>

<form>

<label className="form-label">Nombre Mascota</label>
<input className="form-control" onChange={entradaInput} type="text" name="mascota" value={mascota} />
<label className="form-label">Dueño</label>
<input className="form-control" onChange={entradaInput} type="text" name="dueño" value={dueño} />
<label className="form-label">Fecha</label>
<input className="form-control" onChange={entradaInput} type="date" name="fecha" value={fecha} />
<label className="form-label">Hora</label>
<input className="form-control" onChange={entradaInput} type="time" name="hora" value={hora} />
<label className="form-label">Sintomas</label>
<textarea className="form-control" onChange={entradaInput} name="sintomas" cols="15" rows="5" value={sintomas}></textarea>

<button className="btn btn-primary mt-2" onClick={(e) =>enviarDatos(e)}>Enviar</button>



</form>

        </>
    )
}

export default Formulario
