import { useContext } from "react";
import { CSSProperties } from "react";
import { LotteryContext } from "../contexts/LotteryContext";
import Numero from "../components/Ball";

interface SorteioMegaSenaProps {
  darkMode: boolean;
}

export default function SorteioMegaSena({ darkMode }: SorteioMegaSenaProps) {
  const { megasena } = useContext(LotteryContext);

  const cardStyle: CSSProperties = {
    backgroundColor: darkMode ? "#2a2a2a" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
    padding: "30px",
    borderRadius: "10px",
    border: darkMode ? "1px solid #444" : "1px solid #ddd",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
    transition: "background-color 0.3s, color 0.3s",
  };

  const containerStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    paddingTop: "25vh",
  };

  const titleStyle: CSSProperties = {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginBottom: "10px",
    color: darkMode ? "#ffffff" : "#000000",
  };

  const dateStyle: CSSProperties = {
    marginTop: "10px",
    fontSize: "1rem",
    color: darkMode ? "#ffffff" : "#000000",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={titleStyle}>
          {megasena ? "MEGA-SENA" : "CARREGANDO..."}
        </h2>

        {megasena && (
          <>
            <div style={{ marginBottom: "10px" }}>
              {megasena.dezenas.map((valor, indice) => (
                <Numero key={indice} numero={parseInt(valor)} />
              ))}
            </div>
            <div style={dateStyle}>{megasena.dataPorExtenso}</div>
          </>
        )}
      </div>
    </div>
  );
}
