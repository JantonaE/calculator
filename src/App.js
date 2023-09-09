import "./App.css";
import Screen from "./components/Screen";
import Button from "./components/Button";
import ButtonClear from "./components/ButtonClear";
import { useState } from "react";
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');
  const agregarInput = value =>{
    setInput(input + value);
  };

  const calcularResultado = () =>{
    if(input){
      try{
        setInput(evaluate(input));
      }catch(error){
        console.error(error);
      }
      
    }else{
      alert("Ingrese valores");
    }
  };
   

  return (
    <div className="App">
      <div className="contenedor-calculadora">
        <Screen 
          input={input}     
          />
        <div className="fila">
          <Button manejarClick={agregarInput}>1</Button>
          <Button manejarClick={agregarInput}>2</Button>
          <Button manejarClick={agregarInput}>3</Button>
          <Button manejarClick={agregarInput}>+</Button>
        </div>
        <div className="fila">
          <Button manejarClick={agregarInput}>4</Button>
          <Button manejarClick={agregarInput}>5</Button>
          <Button manejarClick={agregarInput}>6</Button>
          <Button manejarClick={agregarInput}>-</Button>
        </div>
        <div className="fila">
          <Button manejarClick={agregarInput}>7</Button>
          <Button manejarClick={agregarInput}>8</Button>
          <Button manejarClick={agregarInput}>9</Button>
          <Button manejarClick={agregarInput}>*</Button>
        </div>
        <div className="fila">
          <Button manejarClick={calcularResultado}>=</Button>
          <Button manejarClick={agregarInput}>0</Button>
          <Button manejarClick={agregarInput}>.</Button>
          <Button manejarClick={agregarInput}>/</Button>
        </div>
        <div className="fila">
          <ButtonClear manejarClear={() => setInput('')}>
            Clear
          </ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
