import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import Header from './components/Header';
import Boton from './components/Boton';
import Juego from './components/Juego';
function App() {

  const [palabras] = useState([
      ['G','R','A','P','H','Q','L'],
      ['R','E','A','C','T'],
      ['J','A','V','A','S','C','R','I','P','T'],
      ['P','Y','T','H','O','N'],
      ['P','A','R','A','L','E','L','A'],
      ['S','I','S','T','E','M','A'],
      ['T','E','S','L','A'],
      ['A','N','G','U','L','A','R'],
      ['T','Y','P','E','S','C','R','I','P','T'],
      ['A','P','O','L','L','O'],
      ['D','I','S','T','R','I','B','U','I','D','A']
  ]);
  const [nuevaLetra, guardarLetra] = useState([]);
  const [juego, setJuego] = useState({
    letras: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
    palabra: [],
    intentos: 7,
    aciertos: 0,
  })
  
  useEffect(() => {
    if(juego.palabra.length === 0) {
      const rnd = Math.floor(Math.random() * 11);
        setJuego({
          ...juego,
          palabra: palabras[rnd]
        })
      }
  }, [palabras,juego]);
  
  const evaluar = ( e ) => {
    let a= juego.palabra.filter(elem => elem === e.target.value)
    if(a.length === 0){
     setJuego({
       ...juego,
       intentos: juego.intentos - 1    })
    }else{
      setJuego({
        ...juego,
        aciertos: juego.aciertos + a.length   })
    }
  }
  
  const reiniciar = () => {
    nuevaLetra.length = 0
    setJuego({
      ...juego,
      palabra : [],
      intentos : 7,
      aciertos : 0,
    })
  }

  const handleChange = e =>{
    guardarLetra([
        ...nuevaLetra,
        e.target.value
    ])
    evaluar(e)
  }

  if(juego.intentos === 0) {
    reiniciar()
    Swal.fire(
      'Perdiste',
      'Has usado todos tus intentos',
      'error'
    );
  }
  if(juego.aciertos === juego.palabra.length && juego.aciertos !== 0){
    reiniciar()
    Swal.fire(
      'Ganaste',
      'Has logrado decifrar la palabra',
      'success'
    );
  }

  return (
    <>
      <div className="mb-5 mx-5 md:m-auto md:w-4/5">
        <div className="container-fluid m-auto">
         <Header/>
        </div>
      
        <div className="container-fluid flex justify-center">
          <Juego 
          juego={juego}
          nuevaLetra={nuevaLetra}
          guardarLetra={guardarLetra}
          palabra={juego.palabra}
          />  
          <div className="text-center py-1 container border ml-1 ">
            {
              juego.letras.map( letra => (
                <Boton 
                  key={letra} 
                  letra={letra} 
                  nuevaLetra={nuevaLetra}
                  guardarLetra={guardarLetra}
                  palabra={juego.palabra}
                  handleChange={handleChange}
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
