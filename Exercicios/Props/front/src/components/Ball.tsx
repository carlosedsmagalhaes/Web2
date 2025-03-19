import { CSSProperties } from 'react';

interface Props {
    numeros: number[];
}

export default function Ball(props: Props) {
    return (
        <div style={numberContainerStyle}>
            {props.numeros.map((item, indice) => (
                <div key={indice} style={numberStyle}>
                    {item}
                </div>
            ))}
        </div>
    );
}

const numberContainerStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    gap: "8px",
    marginTop: "15px",
    flexWrap: "wrap",
};

const numberStyle: CSSProperties = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#645cff",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: "18px",
};