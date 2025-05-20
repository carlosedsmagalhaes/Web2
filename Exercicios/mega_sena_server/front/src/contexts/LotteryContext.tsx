import { createContext, useEffect, useState } from "react"; 
import { LotteryContextProps, LotteryProps, ProviderProps } from "../types"; 
import { getLottery } from "../services/Lottery"; 
 
export const LotteryContext = createContext({} as LotteryContextProps); 
 
export function LotteryProvider({ children }: ProviderProps) { 
  const [megasena, setMegasena] = useState<LotteryProps | undefined>(); 
  const [concurso, setConcurso] = useState<number>();
  const [loading, setLoading] = useState(false);
 
  useEffect(() => {
    async function fetchData() {
      setLoading(true); 
      const result = await getLottery(concurso);
      setMegasena(result);
      setLoading(false); 
    }

    fetchData();
  }, [concurso]);
 
  return ( 
    <LotteryContext.Provider value={{ megasena, setConcurso, loading, concurso }}> 
      {children} 
    </LotteryContext.Provider> 
  ); 
}