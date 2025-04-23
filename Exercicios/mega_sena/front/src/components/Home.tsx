import { Link } from "react-router";
import { CSSProperties } from "react";

export default function Home() {
  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <div style={textStyle}>Bem-vindo!</div>
        <Link to="/palpite" style={linkStyle}>
          Clique para começar
        </Link>
      </div>
    </div>
  );
}

const containerStyle: CSSProperties = {
  backgroundColor: "#1e1e1e",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const cardStyle: CSSProperties = {
  backgroundColor: "#2a2a2a",
  padding: "40px",
  borderRadius: "10px",
  border: "1px solid #444",
  textAlign: "center",
};

const textStyle: CSSProperties = {
  color: "white",
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "20px",
};

const linkStyle: CSSProperties = {
  backgroundColor: "#0000ff",
  color: "white",
  textDecoration: "none",
  padding: "10px 20px",
  borderRadius: "4px",
  display: "inline-block",
};
