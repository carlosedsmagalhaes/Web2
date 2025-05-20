import { useContext } from "react";
import { CSSProperties } from "react";
import { LotteryContext } from "../contexts/LotteryContext";
import Numero from "../components/Ball";

interface SorteioMegaSenaProps {
  darkMode: boolean;
}

export default function SorteioMegaSena({ darkMode }: SorteioMegaSenaProps) {
  const { megasena, loading, concurso } = useContext(LotteryContext);

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

  const formatarDataPorExtenso = (dataISO: string): string => {
    return new Date(dataISO).toLocaleDateString("pt-BR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={titleStyle}>
            {loading && "CARREGANDO..."}
            {!loading && megasena && megasena.message !== '' && megasena.message !== undefined && concurso && megasena.message}
            {!loading && megasena && (megasena.message == '' || megasena.message == undefined) && "MEGA-SENA"}
        </h2>

        {!loading && megasena && (megasena.message == '' || megasena.message == undefined) && (
          <>
            <div style={{ marginBottom: "10px" }}>
              {[
                megasena.bola1,
                megasena.bola2,
                megasena.bola3,
                megasena.bola4,
                megasena.bola5,
                megasena.bola6,
              ].map((valor, indice) => (
                <Numero key={indice} numero={valor} />
              ))}
            </div>
            <div style={dateStyle}>{formatarDataPorExtenso(megasena.data_do_sorteio)}</div>
          </>
        )}
      </div>
    </div>
  );
}
