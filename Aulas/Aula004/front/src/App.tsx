/* import { useState } from "react";

export default function App() {
  const [nro, setNro] = useState(0);

  function inc() {
    setNro(nro + 1);
  }

  function dec() {
    setNro(nro - 1);
  }

  return (
    <div>
      <div>Número: {nro}</div>
      <div>
        <Botao rotulo="+" clique={inc} />
        <Botao rotulo="-" clique={dec} />
      </div>
    </div>
  );
}

function Botao(props: Props) {
  return <button onClick={props.clique} style={buttonStyle}>{props.rotulo}</button>;
}

interface Props {
  rotulo: string;
  clique: () => void;
}

const buttonStyle = {
  backgroundColor: "#567196",
  color:"#fff",
  fontWeight: "bold"
};

 */

//EXERCÍCIO 01
/* import { CSSProperties, useState } from "react"; 
 
export default function App() { 
  const [count, setCount] = useState(0); 
 
  function increment() { 
    setCount((prev) => prev + 1); 
  } 
 
  function decrement() {     setCount((prev) => prev - 1); 
  } 
 
  return ( 
    <> 
      <h4>Valor: {count}</h4> 
      <div> 
        <Button action={increment} label="Incrementar" /> 
        <Button action={decrement} label="Decrementar" /> 
      </div> 
    </> 
  ); 
} 

function Button(props:Props){
  return <button onClick={props.action} style={buttonStyle}>{props.label}</button>

}

interface Props{
  action: () => void; 
  label: string;
}
 
const buttonStyle: CSSProperties = { 
  backgroundColor: "#567196", 
  color: "white", 
  padding: "10px 20px", 
  marginRight: "10px", 
  fontSize: "16px", 
  fontWeight: "bold", 
  border: "none", 
  borderRadius: "5px",  
  cursor: "pointer",  
};  */


//EXERCÍCIO 02

/* import { CSSProperties, useState } from "react";


export default function App() {
  const [count, setCount] = useState(0); 
 
  function increment() { 
    setCount((prev) => prev + 1); 
  } 
 
  function decrement() {     setCount((prev) => prev - 1); 
  } 
  return (
    <>
      <h4>Valor: {count}</h4>
      <div style={{ display: "flex" }}>
        <Button action={increment}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828926.png"
            alt="Incrementar"
            style={iconStyle}
          />
          <span>Incrementar</span>
        </Button>
        <Button action={decrement}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828906.png"
            alt="Decrementar"
            style={iconStyle}
          />
          <span>Decrementar</span>
        </Button>
      </div>
    </>
  );
}

function Button({action, children}:Props){
  return <button onClick={action} style={buttonStyle}>{children}</button>

}

interface Props{
  action: () => void; 
  children: React.ReactNode; 
}

const buttonStyle: CSSProperties = {
  backgroundColor: "#567196",
  color: "white",
  padding: "10px 20px",
  marginRight: "10px",
  fontSize: "16px",
  fontWeight: "bold",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  display: "flex", // flexbox para alinhamento 
  alignItems: "center", // alinha ícone e texto verticalmente 
  gap: "8px", // espaçamento entre ícone e texto 
};

const iconStyle: CSSProperties = {
  width: "20px",
  height: "20px",
};  */


//EXERCÍCIO 3

/* import { useState } from "react";
export default function App() {
  const [users, setUsers] = useState<User[]>([]);

  function add(user: User) {
    setUsers((prev) => [...prev, user]);
  }

  return (
    <>
      <Form add={add} />
      <List users={users} />
    </>
  );
}

function Form(props:FormProps){
  const [name,setName] = useState("");
  const [age,setAge] = useState("");

  return <div>
    <div>
      <label>Nome</label>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
    <div>
      <label>Idade</label>
      <input value={age} onChange={(e) => setAge(e.target.value)} />
    </div>
    <button onClick={() => props.add({name,age})}>Salvar</button>
  </div>
}

function List(props:ListProps){
  return <ol>
    {
      props.users.map( (item,indice) => <li key={indice}>{item.name}</li>)
    }
  </ol>
}

interface User {
  name: string;
  age: string;
}

interface FormProps{
  add: (user: User) => void;
}

interface ListProps{
  users: User[];
} */


//EXERCÍCIO 04
/* import { useState } from "react";
export default function App() {
  const [users, setUsers] = useState<User[]>([]);

  function add(user: User) {
    setUsers((prev) => [...prev, user]);
  }

  function remove(index: number) {
    setUsers(users.filter((_, i) => i !== index));
  }

  return (
    <>
      <Form add={add} />
      <List users={users} remove={remove} />
    </>
  );
}

function Form(props: FormProps) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  return (
    <div>
      <div>
        <label>Nome</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Idade</label>
        <input value={age} onChange={(e) => setAge(e.target.value)} />
      </div>
      <button onClick={() => props.add({ name, age })}>Salvar</button>
    </div>
  );
}

function List(props: ListProps) {

  function handle(e: React.MouseEvent, indice: number) {
    e.preventDefault();
    props.remove(indice)
  }

  return (
    <ol>
      {props.users.map((item, indice) => (
        <li key={indice} onContextMenu={(e) => handle(e, indice)}>{item.name}</li>
      ))}
    </ol>
  );
}

interface User {
  name: string;
  age: string;
}

interface FormProps {
  add: (user: User) => void;
}

interface ListProps {
  users: User[];
  remove: (index: number) => void;
} */

//EXERCÍCIO 05
/* import { CSSProperties, useState } from "react";

export default function App() {
  const [source, setSource] = useState("X");

  function set(value: string) {
    setSource(value);
  }

  return (
    <>
      <div>Fonte: {source}</div>
      <div>
        <Button label="A" set={set} />
        <Button label="B" set={set} />
        <Button label="C" set={set} />
        <Button label="D" set={set} />
      </div>
    </>
  );
}

function Button({ label, set }: Props) {
  return (
    <button style={buttonStyle} onClick={() => set(label)}>
      {label}
    </button>
  );
}
interface Props {
  label: string;
  set: (value: string) => void;
}

const buttonStyle: CSSProperties = {
  backgroundColor: "#567196",
  color: "white",
  padding: "10px 20px",
  marginRight: "10px",
  fontSize: "16px",
  fontWeight: "bold",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
}; */

//EXERCÍCIO 06
import { CSSProperties, useState } from "react";

export default function App() {
  const [list, setList] = useState<string[]>([]);

  function set(value: string) {
    const temp = [...list, value];
    setList(temp);
  }

  return (
    <>
      <div>
        <Button label="A" set={set} />
        <Button label="B" set={set} />
        <Button label="C" set={set} />
        <Button label="D" set={set} />
      </div>
      <ol>
        {
          list.map( (item, indice) => <li key={indice}>{item}</li> )
        }
      </ol>
    </>
  );
}

function Button({ label, set }: Props) {
  return (
    <button style={buttonStyle} onClick={() => set(label)}>
      {label}
    </button>
  );
}
interface Props {
  label: string;
  set: (value: string) => void;
}

const buttonStyle: CSSProperties = {
  backgroundColor: "#567196",
  color: "white",
  padding: "10px 20px",
  marginRight: "10px",
  fontSize: "16px",
  fontWeight: "bold",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

