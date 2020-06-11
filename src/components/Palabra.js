import React from 'react';

const Palabra = ({nuevaLetra, palabra}) => {

    return (  
        <>
            <div className="flex justify-center">
            {
                palabra.map( (frase, i) => (
                <div key={i} className=" w-1/12 border-b-2 mx-1 border-black text-center text-2xl "> { nuevaLetra.find( elem => elem === frase) }</div>
                ))
            }
            </div>
        </>
    );
}
 
export default Palabra;