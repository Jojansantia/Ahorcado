import React from 'react';
import Boton from './Boton';
const Botones = ({guardarLetra, nuevaLetra, frase, cambiarIntento}) => {
    return ( 
        <>
        <div className="container  border mr-1   ">
        <div className="flex block justify-around">
            <Boton letra={"a"} guardarLetra={guardarLetra} nuevaLetra={nuevaLetra} frase={frase} cambiarIntento={cambiarIntento}  />
            <Boton letra={"b"} guardarLetra={guardarLetra} nuevaLetra={nuevaLetra} frase={frase} cambiarIntento={cambiarIntento} />
            <Boton letra={"c"} guardarLetra={guardarLetra} nuevaLetra={nuevaLetra} frase={frase} cambiarIntento={cambiarIntento} />
        </div>
        <div className="flex block justify-around">
            <Boton letra={"d"} guardarLetra={guardarLetra} nuevaLetra={nuevaLetra} frase={frase} cambiarIntento={cambiarIntento} />
            <Boton letra={"e"} guardarLetra={guardarLetra} nuevaLetra={nuevaLetra} frase={frase} cambiarIntento={cambiarIntento} />
            <Boton letra={"f"} guardarLetra={guardarLetra} nuevaLetra={nuevaLetra} frase={frase} cambiarIntento={cambiarIntento} />
        </div>
        <div className="flex block justify-around">
            <Boton letra={"g"} guardarLetra={guardarLetra} nuevaLetra={nuevaLetra} frase={frase} cambiarIntento={cambiarIntento} />
            <Boton letra={"h"} guardarLetra={guardarLetra} nuevaLetra={nuevaLetra} frase={frase} cambiarIntento={cambiarIntento} />
            <Boton letra={"i"} guardarLetra={guardarLetra} nuevaLetra={nuevaLetra} frase={frase} cambiarIntento={cambiarIntento} />
        </div>
        <div className="flex block justify-around">
            <Boton letra={"j"} guardarLetra={guardarLetra} nuevaLetra={nuevaLetra} frase={frase} cambiarIntento={cambiarIntento} />
            <Boton letra={"k"} guardarLetra={guardarLetra} nuevaLetra={nuevaLetra} frase={frase} cambiarIntento={cambiarIntento} />
            <Boton letra={"l"} guardarLetra={guardarLetra} nuevaLetra={nuevaLetra} frase={frase} cambiarIntento={cambiarIntento} />
        </div>
        <div className="flex block justify-around">
            <Boton letra={"m"} guardarLetra={guardarLetra} nuevaLetra={nuevaLetra} frase={frase} cambiarIntento={cambiarIntento} />
            <Boton letra={"n"} guardarLetra={guardarLetra} nuevaLetra={nuevaLetra} frase={frase} cambiarIntento={cambiarIntento} />
            <Boton letra={"ñ"} guardarLetra={guardarLetra} nuevaLetra={nuevaLetra} frase={frase} cambiarIntento={cambiarIntento} />
        </div>
        <div className="flex block justify-around">
            <Boton letra={"o"} guardarLetra={guardarLetra} nuevaLetra={nuevaLetra} frase={frase} cambiarIntento={cambiarIntento} />
            <Boton letra={"p"} guardarLetra={guardarLetra} nuevaLetra={nuevaLetra} frase={frase} cambiarIntento={cambiarIntento} />
            <Boton letra={"q"} guardarLetra={guardarLetra} nuevaLetra={nuevaLetra} frase={frase} cambiarIntento={cambiarIntento} />
        </div>
        <div className="flex block justify-around">
            <Boton letra={"r"} guardarLetra={guardarLetra} nuevaLetra={nuevaLetra} frase={frase} cambiarIntento={cambiarIntento} />
            <Boton letra={"s"} guardarLetra={guardarLetra} nuevaLetra={nuevaLetra} frase={frase} cambiarIntento={cambiarIntento} />
            <Boton letra={"t"} guardarLetra={guardarLetra} nuevaLetra={nuevaLetra} frase={frase} cambiarIntento={cambiarIntento} />
        </div>
        <div className="flex block justify-around">
            <Boton letra={"u"} guardarLetra={guardarLetra} nuevaLetra={nuevaLetra} frase={frase} cambiarIntento={cambiarIntento} />
            <Boton letra={"v"} guardarLetra={guardarLetra} nuevaLetra={nuevaLetra} frase={frase} cambiarIntento={cambiarIntento} />
            <Boton letra={"w"} guardarLetra={guardarLetra} nuevaLetra={nuevaLetra} frase={frase} cambiarIntento={cambiarIntento} />
        </div>
        <div className="flex block justify-around">
            <Boton letra={"x"} guardarLetra={guardarLetra} nuevaLetra={nuevaLetra} frase={frase} cambiarIntento={cambiarIntento} />
            <Boton letra={"y"} guardarLetra={guardarLetra} nuevaLetra={nuevaLetra} frase={frase} cambiarIntento={cambiarIntento} />
            <Boton letra={"z"} guardarLetra={guardarLetra} nuevaLetra={nuevaLetra} frase={frase} cambiarIntento={cambiarIntento} />
        </div>
        </div>
        </>
     );
}
 
export default Botones;