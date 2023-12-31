import React from "react";
import '../stylesheets/Button.css';

function Button(props){
  const esOperador = valor =>{
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };


    return(
      <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : '' }`.trim()}
        onClick={() => props.manejarClick(props.children)}
      >
        {props.children}
      </div>

    );
}

export default Button;