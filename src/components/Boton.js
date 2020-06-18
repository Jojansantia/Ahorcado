import React from 'react';

const Boton = ({letra, handleChange, nuevaLetra}) => {

    let inactiva = false;

    if (nuevaLetra.length > 0) {
        inactiva = nuevaLetra.filter( selec => selec === letra);
    }
    
    let btn =  "w-1/3 md:w-1/4 mx-2 md:mx-3 my-1 border rounded-md py-1 text-black uppercase hover:bg-gray-900 hover:text-white "
    const c1 = "bg-gray-100"
    const c2 = "bg-green-500"

    if (inactiva.length > 0) {
        btn = btn + c2
    } else {
        btn = btn + c1
    }
  
    return ( 
        <>
        <button disabled={ inactiva.length > 0 ? true : false }  onClick={handleChange} className={btn} value={letra}>
            {letra}
            </button>
            
        </>
     );
}
 
export default Boton;