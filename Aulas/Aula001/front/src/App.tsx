/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import "./App.css";

function App() {
  return (
    <>
      <Carro cor="yellow"/>
    </>
  );
}

export default App;

function Carro(props:any) {
  const marcas = [
    { marca: "Ford", modelo: "Ka", placa: "abc1234", cor:"red" },
    { marca: "GM", modelo: "Onix", placa: "xyz4090", cor:"blue" },
    { marca: "Fiat", modelo: "Uno", placa: "opt9087", cor:"green" },
    { marca: "VW", modelo: "Gol", placa: "rty2002", cor:"gray" },
  ];

  return marcas.map((item, indice) => {
    return (
      <div style={{ backgroundColor: props.cor, color: "black" }} key={indice}>
        <div>
          Marca: {item.marca}
        </div>
        <div>Modelo: {item.modelo}</div>
        <div>Placa: {item.placa.toUpperCase()}</div>
      </div>
    );
  });
}
