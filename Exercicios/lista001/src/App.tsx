/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import "./App.css";


/* ***EXERCÍCIO 001*** */
/* function App() {
  return (
    <>
    <Message />
    </>

  );
}

export default App;

function Message() {
  return (
  <div>Bom dia!</div>);
} */


/* ***EXERCÍCIO 002*** */
/* function App() {
  return (
    <>
    <Message />
    </>

  );
}

export default App;

function Message() {
  const horaAtual = new Date().getHours();
  let mensagem = '';

  return (
    <div>
      {
        mensagem = horaAtual < 12 ? 'Bom dia!': horaAtual > 18 ? 'Boa noite!' : 'Boa tarde!'
      }
    </div>
  )
    
} */



/* ***EXERCÍCIO 003*** */
/*  function App() {
  return (
    <>
    <Message />
    </>

  );
}

export default App;

function Message() {
  const horaAtual = new Date().getHours();
  let mensagem = '';

  return (
    <div>
      {
        mensagem = horaAtual < 12 ? 'Bom dia!': horaAtual > 18 ? 'Boa noite!' : 'Boa tarde!'
      }
    </div>
  )
    
}
 */

/* ***EXERCÍCIO 004*** */
/* function App() {
  return (
    <>
      <ListaNomes />
    </>

  );
}

export default App;

function ListaNomes() {
  const nomes = [{ name: "Ana", gender: "F" },
  { name: "Bruno", gender: "M" },
  { name: "Carla", gender: "F" },
  { name: "Daniel", gender: "M" }
  ]

  return (
    <ol>
      {nomes.map((item, indice) => {
        return (
          <li key={indice}>
            {`${item.name}`}
          </li>
        );
      })}
    </ol>
  )

} */

/* ***EXERCÍCIO 005*** */
/* function App() {
  return (
    <>
      <ListaNomes />
    </>

  );
}

export default App;

function ListaNomes() {
  const nomes = [{ name: "Ana", gender: "F" },
  { name: "Bruno", gender: "M" },
  { name: "Carla", gender: "F" },
  { name: "Daniel", gender: "M" }
  ]

  const f = {backgroundColor:"orange"};
  const m = {backgroundColor:"palegreen"};

  return (
    <ol>
      {nomes.map((item, indice) => {
        return (
          <li style={item.gender === 'F' ? f : m} key={indice}>
            {`${item.name}`}
          </li>
        );
      })}
    </ol>
  )
} */


/* ***EXERCÍCIO 006*** */
function App() {
  return (
    <>
      <ListaNomes />
    </>

  );
}

export default App;

function ListaNomes() {
  const nomes = [{ name: "Ana", gender: "F", age:21 },
  { name: "Bruno", gender: "M", age:17 },
  { name: "Carla", gender: "F", age:15 },
  { name: "Daniel", gender: "M", age:22 }
  ]

  const f = {backgroundColor:"orange"};
  const m = {backgroundColor:"palegreen"};

  return (
    <ol>
      {nomes.map((item, indice) => {
        return (
          <li style={item.gender === 'F' ? f : m} key={indice}>
            {`${item.name} ${item.age < 18 ? '(menor)': ''}`}
          </li>
        );
      })}
    </ol>
  )
} 


