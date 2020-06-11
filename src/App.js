import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Botones from './components/Botones';
import Juego from './components/Juego';
function App() {

  const [palabra, guardarPalabra] = useState({
    letra1:'',
    letra2:'',
    letra3:'',
    letra4:'',
    letra5:'',
    letra6:'',
  });
  const [frase] = useState([
    's',
    'y',
    's',
    't',
    'e',
    'm',
  ]);
  const [nuevaLetra, guardarLetra] = useState([]);
  const [intento, guardarIntento] = useState(6);
  const [ cambiar, cambiarIntento ] = useState(false);
  

  useEffect(() => {
    if(cambiar) {

        // agrega el nuevo alumno
        guardarIntento(
          intento - 1
        );
        // Resetear a false
        cambiarIntento(false);
    }
  }, [cambiar, cambiarIntento, intento]);
  
  return (
    <>
      <div className="mb-5 mx-5 md:m-auto md:w-4/5">
        <div className=" container-fluid  m-auto">
         <Header/>
        </div>
      
        <div className=" container-fluid flex  justify-center">
          <Juego 
          palabra={palabra}
          nuevaLetra={nuevaLetra}
          guardarLetra={guardarLetra}
          guardarPalabra={guardarPalabra}
          frase={frase}
          intento={intento}
          guardarIntento={guardarIntento}
          />  
          <Botones
          nuevaLetra={nuevaLetra}
          guardarLetra={guardarLetra}
          frase={frase}
          cambiarIntento={cambiarIntento}
          /> 
        </div>
      </div>
    </>
  );
}

export default App;
