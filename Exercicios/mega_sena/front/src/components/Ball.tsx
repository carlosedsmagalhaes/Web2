import { CSSProperties } from "react";

interface Props {
  indice: number;
  numero: number;
}

export default function Ball(props: Props) {
  return (
    <div style={ballStyle} key={props.indice}>
      {props.numero}
    </div>
  );
}

const ballStyle: CSSProperties = {
  width: "50px",
  height: "50px",
  lineHeight: "50px",
  borderRadius: "50%",
  backgroundColor: "#2ecc71",
  color: "white",
  textAlign: "center",
  display: "inline-block",
  fontWeight: "bold",
  fontSize: "20px",
  margin: "10px",
};
