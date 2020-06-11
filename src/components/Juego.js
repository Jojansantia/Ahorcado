import React, { useState } from 'react';
import Swal from 'sweetalert2';
import int1 from '../imagenes/int1.jpg';
import int2 from '../imagenes/int2.jpg';
import int3 from '../imagenes/int3.jpg';
import int4 from '../imagenes/int4.jpg';
import int5 from '../imagenes/int5.jpg';
import int6 from '../imagenes/int6.jpg';
import Palabra from './Palabra';

const Juego = ({intento, palabra, nuevaLetra,guardarIntento, frase}) => {

    
    let imagen = ""
   console.log(frase);
console.log(nuevaLetra);

   
  let asd = frase.filter(elem => elem === nuevaLetra)
   console.log(asd);
   
    if (intento === 1) {
        imagen = int1
    } else if (intento === 2) {
        imagen = int2
    } else if (intento === 3) {
        imagen = int3
    } else if (intento === 4) {
        imagen = int4
    } else if (intento === 5) {
        imagen = int5
    } else if (intento === 6) {
        imagen = int6
    }else{
        Swal.fire(
            'Perdiste',
            'Has usado todos tus intentos',
            'error'
        );
        guardarIntento(1)
    }
    
    

    return ( 
        <>
            <div className="container  border mr-1   ">
                <h1 className="text-center my-5 text-gray-700 text-3xl font-bold  uppercase">
                    Tienes {intento} intentos
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