import { useState, CSSProperties } from "react";
import SorteioMegaSena from "./pages/SorteioMegaSena";
import { LotteryProvider } from "./contexts/LotteryContext";
import { FaMoon, FaSun } from "react-icons/fa";

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
        <SorteioMegaSena darkMode={darkMode} /> 
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

