import { useContext, useState, useEffect, CSSProperties } from "react";
import SorteioMegaSena from "./pages/SorteioMegaSena";
import { LotteryProvider, LotteryContext  } from "./contexts/LotteryContext";
import { FaMoon, FaSun } from "react-icons/fa";

function AppContent({ darkMode }: { darkMode: boolean }) {
  const { setConcurso } = useContext(LotteryContext);
  const [inputConcurso, setCocncursoValor] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      const entrada = parseInt(inputConcurso);
      if (!isNaN(entrada) || !entrada) {
        setConcurso(entrada); 
      }
    }, 600); 

    return () => clearTimeout(timeout); 
  }, [inputConcurso]);

  return (
    <>
      <input
        type="number"
        placeholder="Digite o número do concurso"
        value={inputConcurso}
        onChange={(e) => setCocncursoValor(e.target.value)}
        style={{
          padding: "8px 12px",
          borderRadius: "6px",
          border: darkMode ? "1px solid #555" : "1px solid #ccc",
          backgroundColor: darkMode ? "#2a2a2a" : "#fff",
          color: darkMode ? "#fff" : "#000",
          width: "300px",
          fontSize: "16px",
          margin: "20px",
          appearance: "textfield",
          boxShadow: darkMode
            ? "inset 0 1px 2px rgba(255,255,255,0.1)"
            : "inset 0 1px 2px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
      />
      <SorteioMegaSena darkMode={darkMode} />
    </>
  );
}

export default function App() {

  const [darkMode, setDarkMode] = useState(false);

  const appStyle: CSSProperties = {
    backgroundColor: darkMode ? "#121212" : "#f2f2f2",
    color: darkMode ? "#ffffff" : "#000000",
    minHeight: "100vh",
    transition: "background-color 0.3s, color 0.3s",
  };

  const themeButtonStyle: CSSProperties = {
    position: "fixed",
    bottom: "20px",
    left: "20px",
    backgroundColor: darkMode ? "#333" : "#ccc",
    border: "none",
    borderRadius: "50%",
    padding: "12px",
    cursor: "pointer",
    zIndex: 999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <LotteryProvider>
      <div style={appStyle}>
        <AppContent darkMode={darkMode} />
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={themeButtonStyle}
          aria-label="Alternar tema"
        >
          {darkMode ? <FaSun size={20} color="#fff" /> : <FaMoon size={20} />}
        </button>
      </div>
    </LotteryProvider>
  );
}


