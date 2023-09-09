import React from "react";
import '../stylesheets/ButtonClear.css';

const ButtonClear = (props) => (
  <div className="boton-clear" onClick={props.manejarClear}>
    {props.children}
  </div>

);

export default ButtonClear;