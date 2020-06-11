import React from 'react';

const Boton = ({letra, guardarLetra, nuevaLetra, frase, cambiarIntento}) => {

    
    const handleChange = e =>{
        guardarLetra([
            ...nuevaLetra,
            e.target.value
        ])

       let a= frase.find(elem => elem === e.target.value)
       if(a === undefined){
        cambiarIntento(true)
       }
       
    }
    
    

    return ( 
        <>
            
                <input
                    type="submit"
                    className="w-1/3 my-1 mx-5 border  rounded-md p-1 cursor-pointer text-black uppercase hover:bg-gray-900 hover:text-white"
                    onClick={handleChange}
                    name={letra}
                    value={letra}
                />
                    
                
            
        </>
     );
}
 
export default Boton;