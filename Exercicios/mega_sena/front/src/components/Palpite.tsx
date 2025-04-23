import { useContext, useEffect, useState } from "react";
import { CSSProperties } from "react";
import { PalpiteContext } from "../contexts/Context";
import Numero from "./Ball";

export default function Palpite() {
  const { gerarSugestao } = useContext(PalpiteContext);
  const [atual, setAtual] = useState<number[]>([]);

  useEffect(() => {
    setAtual(gerarSugestao());
  }, []);

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "80px" }}
    >
      <div style={cardStyle}>
        <h2 style={{ color: "white" }}>Palpite para a Mega-sena</h2>
        <div>
          {atual.map((valor, indice) => (
            <Numero indice={indice} numero={valor} />
          ))}
        </div>
        <button style={buttonStyle} onClick={() => setAtual(gerarSugestao())}>
          Nova sugestão
        </button>
      </div>
    </div>
  );
}

const cardStyle: CSSProperties = {
  backgroundColor: "#2a2a2a",
  padding: "30px",
  borderRadius: "10px",
  border: "1px solid #444",
  textAlign: "center",
};

const buttonStyle: CSSProperties = {
  backgroundColor: "#0000ff",
  color: "white",
  border: "none",
  padding: "10px 20px",
  borderRadius: "4px",
  marginTop: "20px",
  cursor: "pointer",
};
