import { useContext } from "react";
import { Contexto } from "../contexts/Contexto.tsx";

export default function Botao2() {
  const {inc} = useContext(Contexto);
  return (
    <>
      <button onClick={() => inc()}>
        Aumentar
      </button>
    </>
  );
}
