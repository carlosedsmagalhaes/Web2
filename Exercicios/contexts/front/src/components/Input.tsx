import { CSSProperties, useContext } from "react";
import { LetterCtx } from "../contexts/LetterCtx";

export default function Input() {
    const {input, setInput} = useContext(LetterCtx)
    return <input style = {inputStyle} placeholder="Entre com o nome" value={input} onChange={(e) => setInput(e.target.value)}>

    </input>
}


const inputStyle: CSSProperties = {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #333", 
    marginBottom: "15px",
    fontSize: "16px",
    textAlign: "center",
    backgroundColor: "white", 
    color: "black", 
    boxSizing: "border-box",
};