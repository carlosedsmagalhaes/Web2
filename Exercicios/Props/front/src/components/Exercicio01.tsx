import { useState, CSSProperties} from 'react'

export default function Form() {
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

            <div style={numberContainerStyle}>
                {
                    listanumeros.map((item, indice) => (
                        <div key={indice} style={numberStyle}>{item}</div>
                    ))
                }
            </div>
        </div>


    )
}


const containerStyle: CSSProperties = {
    backgroundColor: "#333",
    padding: "20px",
    borderRadius: "10px",
    width: "300px",
    textAlign: "center",
    color: "#fff",
};

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

const numberContainerStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    gap: "8px",
    marginTop: "15px",
    flexWrap: "wrap",
};

const numberStyle: CSSProperties = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#645cff",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: "18px",
};