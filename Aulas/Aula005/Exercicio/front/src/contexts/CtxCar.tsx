import { createContext, useState } from "react";
import { Car } from "../types";

//Cabeçalho de função que vai gerar um componente a gente chama de Props
interface CtxCarProps {
    cars: Car[];
    add: (car: Car) => void;
}

interface ChildrenProps {
    children: React.ReactNode;
}

export const CtxCar = createContext({} as CtxCarProps);

export function ProviderCar({ children }: ChildrenProps) {
    const [cars, setCars] = useState<Car[]>([]);

    function add(car: Car) {
        setCars([...cars, car]);
    }

    return <CtxCar.Provider value={{ cars, add }}>
        {children}
    </CtxCar.Provider>
}

