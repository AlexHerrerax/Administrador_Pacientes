import { useState } from "react";
import Citas from "./components/Citas";
import Formulario from "./components/Formulario";

function App() {

  const [lista, setLista] = useState([])

  const agregarLista=(cita) =>{
    setLista([...lista, cita])

   
  }

  const eliminar = (id) => {
    
    const eliminado = lista.filter(item => item.id !== id)
    setLista(eliminado)

}

  return (
    <>

      <div className="container">
        <div className="row">

          {/* FORMULARIO */}
          <div className="col-7 border">

            <h4 className="text-center mb-3">Formulario de ingreso</h4>

            <Formulario 
            agregarLista={agregarLista}
            


            />

          </div>

          {/*  CITAS */}
          <div className="col-5 border">
            <h4 className="text-center mb-5">Citas</h4>

            {
              lista.map(item =>(
                <Citas
                cita={item}
                eliminar={eliminar}
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
