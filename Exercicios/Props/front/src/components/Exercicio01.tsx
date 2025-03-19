import { useState } from "react";
import Ball from "./Ball";

interface Props {
  titleStyle: React.CSSProperties;
  inputStyle: React.CSSProperties;
}

export default function FormRandom(props: Props) {
  const [listanumeros, setNumeros] = useState<number[]>([]);

  function handleListaNumerosAleatorios(qtd: number) {
    let numerosSorteados: number[] = [];
    let limite: number = qtd > 12 ? 12 : qtd;
    for (let index = 0; index < limite; index++) {
      const num: number = Math.floor(Math.random() * 100);
      numerosSorteados.push(num);

      numerosSorteados.sort((a, b) => a - b);
    }

    setNumeros(numerosSorteados);
  }

  return (
    <div>
      <div>
        <div style={props.titleStyle}>Exercício 1</div>
        <input
          placeholder="Quantidade de números"
          style={props.inputStyle}
          onChange={(e) =>
            handleListaNumerosAleatorios(parseInt(e.target.value))
          }
        />
      </div>

      <Ball numeros={listanumeros} ballStyle={{ backgroundColor: "#645cff" }} />
    </div>
  );
}
