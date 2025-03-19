import { CSSProperties } from "react";
import "./App.css";
import FormRandom from "./components/Exercicio01";
import FormAddRemove from "./components/Exercicio02";

function App() {
  return (
    <div style={appContainer}>
      <FormRandom
        titleStyle={{ ...titleStyle, color: "#645cff" }}
        inputStyle={inputStyle}
      />
      <FormAddRemove
        titleStyle={{ ...titleStyle, color: "#D9415D" }}
        inputStyle={inputStyle}
      />
    </div>
  );
}

const appContainer: CSSProperties = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  gap: "20px",
};

const titleStyle: CSSProperties = {
  fontSize: "18px",
  fontWeight: "bold",
  paddingBottom: "25px",
};

const inputStyle: CSSProperties = {
  padding: "8px",
  fontSize: "16px",
  borderRadius: "5px",
  border: "none",
  outline: "none",
  textAlign: "center",
};

export default App;
