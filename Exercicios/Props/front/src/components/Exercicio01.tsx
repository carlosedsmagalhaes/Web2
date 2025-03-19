import { useState, CSSProperties} from 'react'
import  Ball  from './ball'

export default function FormRandom() {
    const [listanumeros, setNumeros] = useState<number[]>([]);

    function handleListaNumerosAleatorios(qtd:number) {
        let numerosSorteados: number[] = []
        let limite: number = qtd > 12 ? 12 : qtd;
        for (let index = 0; index < limite; index++) {
            const num: number = Math.floor(Math.random() * 100 + 1)
            numerosSorteados.push(num)

            numerosSorteados.sort((a, b) => a - b);
        }

        setNumeros(numerosSorteados);
    }

    return (

        <div>
            <div>
                <div style={titleStyle}>Exercício 1</div>
                <input placeholder='Digite a quantidade: ' style={inputStyle} onChange={(e) =>  handleListaNumerosAleatorios(parseInt(e.target.value))} />
            </div>

            <Ball numeros={listanumeros} />
        </div>


    )
}


/* const containerStyle: CSSProperties = {
    backgroundColor: "#333",
    padding: "20px",
    borderRadius: "10px",
    width: "300px",
    textAlign: "center",
    color: "#fff",
}; */

const titleStyle:CSSProperties = {
    fontSize: "18px", 
    fontWeight: "bold", 
    color: "#a89cff",
    paddingBottom: "25px"
}

const inputStyle: CSSProperties = {
    padding: "8px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "none",
    outline: "none",
    textAlign: "center",
};
