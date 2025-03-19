import { useState, CSSProperties } from 'react'
import Ball from './ball'




export default function FormAddRemove() {
    const [numero, setNumero] = useState<string>();
    function handleListaNumeros(){
        console.log(numero)
    }

    return (
        <div>
            <div>
                <div >Exercício 2</div>
                <input value={numero} placeholder='Digite a um número: '/>
                
            </div>

            {/*  <Ball numeros={istaNumeros} /> */}
        </div>
    )
}