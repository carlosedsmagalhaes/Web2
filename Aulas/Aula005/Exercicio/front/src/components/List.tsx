import { useContext, useState } from "react"
import { CtxCar } from "../contexts/CtxCar";

export default function List() {
    const { cars } = useContext(CtxCar);

    return <ol>
        {
            cars.map((item, index) => <li key={index}>{item.model} - {item.color}</li>)
        }
    </ol>
}