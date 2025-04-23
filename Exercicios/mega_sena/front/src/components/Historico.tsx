import { useContext } from "react";
import { CSSProperties } from "react";
import { PalpiteContext } from "../contexts/Context";
import Numero from "./Ball";

export default function Historico() {
  const { sugestoes } = useContext(PalpiteContext);

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "80px" }}
    >
      <div style={cardStyle}>
        <h2>Histórico de sugestões</h2>
        {sugestoes.length === 0 ? (
          <p>Nenhuma sugestão gerada ainda.</p>
        ) : (
          sugestoes.map((valor, indice) => (
            <div key={indice}>
              {valor.map((i, j) => (
                <Numero indice={j} numero={i} />
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

const cardStyle: CSSProperties = {
  backgroundColor: "#2a2a2a",
  padding: "30px",
  borderRadius: "10px",
  border: "1px solid #444",
  color: "white",
  textAlign: "center",
};
