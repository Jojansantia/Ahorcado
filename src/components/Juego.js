import React from 'react';
import int1 from '../imagenes/int1.jpg';
import int2 from '../imagenes/int2.jpg';
import int3 from '../imagenes/int3.jpg';
import int4 from '../imagenes/int4.jpg';
import int5 from '../imagenes/int5.jpg';
import int6 from '../imagenes/int6.jpg';
import Palabra from './Palabra';

const Juego = ({juego, intento, palabra, nuevaLetra,guardarIntento,guardarLetra, frase}) => {

    const {intentos} = juego
    let imagen = ""
    
   
    if (intentos === 6) {
        imagen = int1
    } else if (intentos === 5) {
        imagen = int2
    } else if (intentos === 4) {
        imagen = int3
    } else if (intentos === 3) {
        imagen = int4
    } else if (intentos === 2) {
        imagen = int5
    } else if (intentos === 1) {
        imagen = int6
    }else{
        imagen = int6
    }
    
    return ( 
        <>
            <div className="container  border mr-1   ">
                <h1 className="text-center my-5 text-gray-700 text-3xl font-bold  uppercase">
                    Tienes {intentos} intentos
                </h1>
                <img src={imagen} className="m-auto mb-10"  alt=""  />
                <Palabra
                frase={frase}
                guardarIntento={guardarIntento}
                nuevaLetra={nuevaLetra}
                palabra={palabra}
                />
            </div>
        </>
     );
}
 
export default Juego;