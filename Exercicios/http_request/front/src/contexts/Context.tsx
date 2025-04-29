import React, { createContext, useState } from "react";

type ContextProps = {
  sugestoes: number[][];
  gerarSugestao: () => number[];
};

export const PalpiteContext = createContext({} as ContextProps);

export const PalpiteProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [sugestoes, setSugestoes] = useState<number[][]>([]);

  const gerarSugestao = () => {
    const nova: number[] = [];
    while (nova.length < 6) {
      const n = Math.floor(Math.random() * 60) + 1;
      if (!nova.includes(n)) {
        nova.push(n);
      }
    }
    nova.sort((a, b) => a - b);
    setSugestoes([...sugestoes, nova]);
    return nova;
  };

  return (
    <PalpiteContext.Provider value={{ sugestoes, gerarSugestao }}>
      {children}
    </PalpiteContext.Provider>
  );
};
