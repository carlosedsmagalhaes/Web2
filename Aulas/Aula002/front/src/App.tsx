//[...nomes ,'Carlos'] => Dessa forma eu faço uma cópia do array e adiciono o nome 'Carlos' nele
import './App.css'
import { useState } from 'react'

export default function App() {
  const [nome, setNome] = useState<string>('Carlos')
  const [idade, setIdade] = useState<number>(21)
  const [peso, setPeso] = useState<number>() //Quando não definimos um valor inicial, por boa prática, definimos o tipo.


  function handleNome(evento) {
    setNome(evento.target.value)
  }

  function handleIdade(evento) {
    setIdade(evento.target.value)
  }

  function handlePeso(evento) {
    setPeso(evento.target.value)
  }

  function handleSave(){
    console.log(nome)
  }


  return <div>
    <input value={nome} onChange={handleNome} />
    <input type='number' value={idade} onChange={handleIdade} />
    <input type='number' step={0.1} value={peso} onChange={handlePeso} />
    <div>Nome: {nome}  Idade: {idade} Peso: {peso}</div>
    <div>
      <button onClick={handleSave}>Salvar</button>
    </div>
  </div>
}
