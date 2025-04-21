import { BrowserRouter, Link, Route, Routes } from "react-router";
import { CSSProperties } from "react";

export default function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Rotas />
    </BrowserRouter>
  );
}
function Rotas() {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/manha" element={<Manha />} />
      <Route path="/tarde" element={<Tarde />} />
    </Routes>
  );
}
function Menu() {
  return (
    <div style={menuContainerStyle}>
      <div style={leftSectionStyle}>
        <span style={titleStyle}>Fatec</span>
        <span style={subtitleStyle}>Jacareí<br />Prof. Francisco de Moura</span>
      </div>
      <div style={rightSectionStyle}>
      <Link to="/manha"  style={linkStyle}>Palpite</Link>
      <Link to="/tarde"  style={linkStyle}>Histórico</Link>
    </div>
    </div>
  );
}
function Manha() {
  return <div style={{ backgroundColor: "yellow" }}>Bom dia</div>;
}
function Tarde() {
  return <div style={{ backgroundColor: "orange" }}>Boa tarde</div>;
}
function Noite() {
  return <div style={{ backgroundColor: "#aaa" }}>Boa noite</div>;
}
function Madrugada() {
  return <div style={{ backgroundColor: "#777" }}>Bom sono</div>;
}
function Home() {
  return <div>Bem vindo!</div>;
}



const menuContainerStyle: CSSProperties = {
  backgroundColor: "#2c2c2c",
  color: "white",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 20px",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
};

const titleStyle: CSSProperties = {
  fontSize: "24px",
  fontWeight: "bold",
};

const subtitleStyle: CSSProperties = {
  fontSize: "12px",
  color: "#ccc",
};

const leftSectionStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  lineHeight: "1.2",
};

const rightSectionStyle: CSSProperties = {
  display: "flex",
  gap: "20px",
};

const linkStyle: CSSProperties = {
  color: "white",
  textDecoration: "none",
  fontSize: "14px",
};