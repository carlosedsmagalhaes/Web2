import { Link } from "react-router";
import { CSSProperties } from "react";

export default function Menu() {
  return (
    <div style={menuContainerStyle}>
      <div style={leftSectionStyle}>
        <span style={titleStyle}>Fatec</span>
        <span style={subtitleStyle}>
          Jacareí
          <br />
          Prof. Francisco de Moura
        </span>
      </div>
      <div style={rightSectionStyle}>
        <Link to="/Palpite" style={linkStyle}>
          Palpite
        </Link>
        <Link to="/Historico" style={linkStyle}>
          Histórico
        </Link>
      </div>
    </div>
  );
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
