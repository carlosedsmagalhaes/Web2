import { CSSProperties } from "react";

interface Props {
    palavra: string;
}

export default function Ball(props: Props) {
  return (
    <div style={ballStyle}>{props.palavra}</div>
  )
}


const ballStyle: CSSProperties = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "#4C4CFF", 
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: "20px",
    margin: "0 5px", 
};