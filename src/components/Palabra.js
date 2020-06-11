import React from 'react';

const Palabra = ({guardarIntento, nuevaLetra, frase}) => {

    return (  
        <>
            <div className="flex justify-center">
            {
                frase.map( (newfrase, i) => (
                <div key={i } className=" w-1/12 border-b-2 mx-1 border-black text-center text-2xl "> { nuevaLetra.find( elem => elem === newfrase) }</div>
                ))
            }
            </div>
        </>
    );
}
 
export default Palabra;