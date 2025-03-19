import { useState } from "react";
import Ball from "./Ball";

interface Props {
  titleStyle: React.CSSProperties;
  inputStyle: React.CSSProperties;
}

export default function FormAddRemove(props: Props) {
  const [listaNumeros, setNumeros] = useState<number[]>([]);
  const [inputValue, setInputValue] = useState("");

  function handleListaNumeros() {
    const nro = parseInt(inputValue);
    if (isNaN(nro)) {
      return;
    }
    const novaLista = [...listaNumeros, nro];
    if (novaLista.length > 12) {
      novaLista.splice(0, 1);
    }
    setNumeros(novaLista);

    setInputValue("");
  }

  function handleRemoveNumero(index: number) {
    setNumeros(listaNumeros.filter((_, i) => i !== index));
  }

  function teclasPressionadas(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" || e.key === "Tab") {
      e.preventDefault();
      handleListaNumeros();
    }
  }

  return (
    <div>
      <div>
        <div style={props.titleStyle}>Exercício 2</div>
        <input
          value={inputValue}
          placeholder="Digite um número"
          style={props.inputStyle}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={teclasPressionadas}
        />
      </div>

      <Ball
        numeros={listaNumeros}
        ballStyle={{ backgroundColor: "#D9415D" }}
        remove={handleRemoveNumero}
      />
    </div>
  );
}
