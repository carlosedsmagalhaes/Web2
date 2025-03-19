import { useState, CSSProperties } from 'react'
import Ball from './ball'


interface Props {
    listaNumeros: number[];
}

export default function FormAddRemove(props: Props) {
    return(
        <div>
            <div>
                <div >Exercício 1</div>
                <input placeholder='Digite a quantidade: '  />
            </div>

            <Ball numeros={props.listaNumeros} />
        </div>
    )
}