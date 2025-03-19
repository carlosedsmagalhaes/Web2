/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import './App.css'

/* import { useState } from "react";

export default function App() {
  let [nome,setNome] = useState("Ana");

  console.log("aqui")

  return <div>
    {nome}
    <input value={nome} onChange={(e)=>setNome(e.target.value)} /> 
  </div>;
}
 */


//EXERCÍCIO 01
/* import { useState } from "react";

interface Person {
  nome: string;
  idade: string;
}

export default function App() {
  const [nome, setNome] = useState<string>("");
  const [idade, setIdade] = useState<string>("");
  const [lista, setLista] = useState<Person[]>([]);

  function handleSave() {
    setLista([...lista, {nome,idade}]);
  }

  return (
    <div>
      <div>
        <label htmlFor="name">Nome</label>
        <input id="name" value={nome} onChange={(e) => setNome(e.target.value)} />
      </div>
      <div>
        <label htmlFor="age">Idade</label>
        <input id="age" value={idade} onChange={(e) => setIdade(e.target.value)} />
      </div>
      <button onClick={handleSave}>Salvar</button>
      
      <ol>
        {lista.map((item, indice) => (
          <li key={indice}>{item.nome} - {item.idade} </li>
        ))}
      </ol>
    </div>
  );
} */


//EXERCÍCIO 02 E 03
import { CSSProperties, useState } from "react";

interface Person {
  nome: string;
  idade: string;
}

export default function App() {
  const [nome, setNome] = useState<string>("");
  const [idade, setIdade] = useState<string>("");
  const [lista, setLista] = useState<Person[]>([]);

  function handleSave() {
    setLista([{ nome, idade }, ...lista]);
  }

  function handleDelete(indice:number){
    const temp = [...lista]; //copia do array
    temp.splice(indice,1);
    setLista(temp);
  }

  return (
    <div>
      <div>
        <label htmlFor="name">Nome</label>
        <input
          id="name"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="age">Idade</label>
        <input
          id="age"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />
      </div>
      <button onClick={handleSave}>Salvar</button>

      <table style={table}>
        <thead>
          <tr>
            <th style={cell}>Nome</th>
            <th style={cell}>Idade</th>
          </tr>
        </thead>
        <tbody>
          {lista.map(function (item, indice) {
            return (
              <tr key={indice} onClick={() => handleDelete(indice)}>
                <td style={cell}>{item.nome}</td>
                <td style={cell}>{item.idade}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

const table: CSSProperties = {
  tableLayout: "auto", // a largura da tabela se ajusta ao conteúdo
  borderCollapse: "collapse",
  marginTop: "20px",
};
const cell: CSSProperties = {
  border: "1px solid black",
  padding: "5px",
  whiteSpace: "nowrap", // garante que o conteúdo não quebre em várias linhas
};



