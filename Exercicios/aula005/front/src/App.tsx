//EXERCÍCIO 01
/* import { useState, useEffect } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  
  useEffect(
    function () {
      const tempName = localStorage.getItem("name")
      console.log(tempName)
      if (tempName) {
        setName(tempName)
      }

      const tempAge = localStorage.getItem("age")
      console.log(tempAge)
      if (tempAge) {
        setAge(tempAge)
      }
    }, []
  )

  useEffect(
    function () {
      localStorage.setItem("name", name);
      localStorage.setItem("age", age)
    }, [name, age]
  );


  return (
    <>
      <div>
        <label htmlFor="name">Nome</label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="age">Idade</label>
        <input id="age" value={age} onChange={(e) => setAge(e.target.value)} />
      </div>
      <div>Nome: {name}</div>
      <div>Idade: {age}</div>
    </>
  );
}  */


//EXERCÍCIO 02
/* import { createContext, useContext, useEffect, useState } from "react";

export default function App() {
  return (
    <UserProvider>
      <Form />
      <List />
    </UserProvider>
  );
}

interface ContextProps {
  users: User[];
  add: (user: User) => void;
}

interface User {
  name: string;
  age: string;
}

interface ChildrenProps {
  children: React.ReactNode;
}

const UserContext = createContext<ContextProps | null>(null);

function UserProvider({ children }: ChildrenProps) {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(
    function () {
      const temp = localStorage.getItem("users");
      if (temp){
        setUsers(JSON.parse(temp))
      }
    }, []
  )

  function add(user: User) {
    setUsers((prev) => [...prev, user]);
    localStorage.setItem("users", JSON.stringify(users))
  }

  return (
    <UserContext.Provider value={{ users, add }}>
      {children}
    </UserContext.Provider>
  );
}

// Hook customizado para consumir o contexto 
function useUserContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext deve ser usado dentro de um UserProvider");
  }
  return context;
}

function Form() {
  const { add } = useUserContext();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  return (<div>
    <div>
      <label htmlFor="name">Nome</label>
      <input
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
    <div>
      <label htmlFor="age">Idade</label>
      <input id="age" value={age} onChange={(e) => setAge(e.target.value)} />
    </div>
    <div>
      <button onClick={() => add({ name, age })}>Salvar</button>
    </div>
  </div>
  );
}

function List() {
  const { users } = useUserContext();

  return (
    <ol>
      {users.map((item, index) => (
        <li key={index}>
          {item.name} - {item.age}
        </li>
      ))}
    </ol>
  );
}  */

  //EXERCÍCIO 03
  import { createContext, CSSProperties, useContext, useEffect, useState } from "react"; 
 
export default function App() { 
  return ( 
    <SourceProvider> 
      <div> 
        <Button label="A" /> 
        <Button label="B" /> 
        <Button label="C" /> 
        <Button label="D" /> 
      </div>
      <List /> 
    </SourceProvider> 
  ); 
} 
 
interface ButtonProps { 
  label: string; 
} 
 
interface ContextProps { 
  sources: string[]; 
  add: (value: string) => void; 
} 
 
interface ChildrenProps { 
  children: React.ReactNode; 
} 
 
const SourceContext = createContext<ContextProps | null>(null); 
 
function SourceProvider({ children }: ChildrenProps) { 
  const [sources, setSources] = useState<string[]>([]); 
 
  function add(value:string){ 
    setSources((prev) => [...prev, value]); 
  } 
 
  return ( 
    <SourceContext.Provider value={{ sources, add }}> 
      {children} 
    </SourceContext.Provider> 
  ); 
} 
 
// Hook customizado para consumir o contexto 
function useSourceContext() { 
  const context = useContext(SourceContext); 
  if (!context) { 
    throw new Error("useSourceContext deve ser usado dentro de um SourceProvider"); 
  } 
  return context; 
} 
 
function Button({ label }: ButtonProps) { 
  const { add } = useSourceContext(); 
 
  return ( 
    <button style={buttonStyle} onClick={() => add(label)}> 
      {label} 
      </button> 
  ); 
} 
 
function List() { 
  const { sources } = useSourceContext(); 
 
  return ( 
    <ol> 
      {sources.map((item, index) => ( 
        <li key={index}>{item}</li> 
      ))} 
    </ol> 
  ); 
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