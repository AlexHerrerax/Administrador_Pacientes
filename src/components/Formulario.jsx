import React from 'react'
import { useState } from 'react'
import './formulario.css'

const Formulario = ({agregarLista}) => {

    const [contador, setContador] = useState(0)
    const [error, setError] = useState(true)
    const [cita, setCita] = useState({
        mascota:"",
        dueño:"",
        fecha:"",
        hora:"",
        sintomas:"",
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
        if(!mascota.trim() || !dueño.trim() || !fecha.trim() || !hora.trim() || !sintomas.trim()){
            console.log("vacioo");
            setError(false)
            return;
        }
        setError(true)
        setContador(contador+1)
        cita.id=contador
        agregarLista(cita)
        setCita({
            mascota:"",
            dueño:"",
            fecha:"",
            hora:"",
            sintomas:"",
        })
    }


    return (
        <>

<form>
{
    !error&&
    <p><span className="text-danger">Ingrese todos los datos</span></p>
    


}

<label className="mt-1 form-label">Nombre Mascota</label>
<input className="mt-1 form-control " onChange={entradaInput} type="text" name="mascota" value={mascota} />
<label className="mt-1 form-label">Dueño</label>
<input className="mt-1 form-control " onChange={entradaInput} type="text" name="dueño" value={dueño} />
<label className="mt-1 form-label">Fecha</label>
<input className="mt-1 form-control " onChange={entradaInput} type="date" name="fecha" value={fecha} />
<label className="mt-1 form-label">Hora</label>
<input className="mt-1 form-control " onChange={entradaInput} type="time" name="hora" value={hora} />
<label className="mt-1 form-label">Sintomas</label>
<textarea className="mt-1 form-control " onChange={entradaInput} name="sintomas" cols="15" rows="5" value={sintomas}></textarea>

<div className="w-100 text-center">
<button className="btn btn-primary my-3 " onClick={(e) =>enviarDatos(e)}>Enviar Datos</button>
</div>



</form>

        </>
    )
}

export default Formulario
