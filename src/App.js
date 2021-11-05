import { useState } from "react";
import Citas from "./components/Citas";
import Formulario from "./components/Formulario";
import './app.css'

function App() {

  const [lista, setLista] = useState([])

  const agregarLista=(cita) =>{
    setLista([...lista, cita])

   
  }

  const eliminar = (id) => {
    
    const eliminado = lista.filter(item => item.id !== id)
    setLista(eliminado)

}

  const condicional = lista.length ===0 ? "No hay citas" : "Citas"

  return (
    <>

      <div className="container">
        <div className="row">

          {/* FORMULARIO */}
          <div className="col-7 ">

            <h4 className="text-center mb-3 mt-2">Formulario de Ingreso</h4>

            <Formulario 
            agregarLista={agregarLista}
            


            />

          </div>

          {/*  CITAS */}
          <div className="col-5 ">
            <h4 className="text-center mb-5 mt-2">{condicional}</h4>

            {
              lista.map(item =>(
                <Citas
                cita={item}
                eliminar={eliminar}
                key={item.mascota}
                lista={lista}
                />
              ))
            }

            



          </div>
        </div>
      </div>


    </>
  );
}

export default App;
