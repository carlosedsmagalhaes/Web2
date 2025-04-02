import { useContext, CSSProperties } from "react"
import { LetterCtx } from "../contexts/LetterCtx"
import Ball from "./Ball";

export default function Display() {
    const { input, setInput } = useContext(LetterCtx);
    const listaInput: string[] = input.split('')

    return (<div style={containerStyle}>
        <div style={palavraContainerStyle}>
            {input === "" ? (
                <p style={semEntradaStyle}>Sem entrada</p>
            ) : (
                listaInput.map((item, indice) => (
                    <Ball palavra={item} key={indice} />
                ))
            )}
        </div>
    </div>)
}


const containerStyle: CSSProperties = {
    backgroundColor: "#1c1c1c",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    width: "320px",
    margin: "auto",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)", 
};

const palavraContainerStyle: CSSProperties = {
    backgroundColor: "#292929", 
    padding: "20px 15px", 
    borderRadius: "10px",
    marginTop: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center", 
    minHeight: "70px", 
};

const semEntradaStyle: CSSProperties = {
    color: "white",
    fontWeight: "bold",
    fontSize: "16px", 
    margin: "0",
};