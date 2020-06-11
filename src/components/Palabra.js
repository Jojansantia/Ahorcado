import React from 'react';
import Swal from 'sweetalert2';

const Palabra = ({guardarIntento, nuevaLetra, frase}) => {

    let letra1 = nuevaLetra.find(elem => elem === frase[0])
    let letra2 = nuevaLetra.find(elem => elem === frase[1])
    let letra3 = nuevaLetra.find(elem => elem === frase[2])
    let letra4 = nuevaLetra.find(elem => elem === frase[3])
    let letra5 = nuevaLetra.find(elem => elem === frase[4])
    let letra6 = nuevaLetra.find(elem => elem === frase[5])

    if(letra1 && letra2 && letra3 && letra4 && letra5 && letra6){
        Swal.fire(
            'Ganaste',
            'Adivinaste la palabra',
            'success'
        );
        
        nuevaLetra.length = 0
        guardarIntento(6)

        letra1 = ''
        letra2 = ''
        letra3 = ''
        letra4 = ''
        letra5 = ''
        letra6 = ''
    }
    

    return (  
        <>
        <div className="flex">
            <h2 className=" w-1/6 border-b-2 mx-1 border-black text-center text-2xl ">
                {letra1}
            </h2>
            <h2 className=" w-1/6 border-b-2 mx-1 border-black text-center text-2xl ">
                {letra2}
            </h2>
            <h2 className=" w-1/6 border-b-2 mx-1 border-black text-center text-2xl ">
                {letra3}
            </h2>
            <h2 className=" w-1/6 border-b-2 mx-1 border-black text-center text-2xl ">
                {letra4}
            </h2>
            <h2 className=" w-1/6 border-b-2 mx-1 border-black text-center text-2xl ">
                {letra5}
            </h2>
            <h2 className=" w-1/6 border-b-2 mx-1 border-black text-center text-2xl ">
                {letra6}
            </h2>
        </div>
        </>
    );
}
 
export default Palabra;