import { LotteryProps } from "../types"; 
import api from "./api"; 
export async function getLottery(codigoConcurso?: number): Promise<LotteryProps> {
  await delay(2000);

  

  const { data } = await api.get<LotteryProps>(`/${codigoConcurso ? `?codigoConcurso=${codigoConcurso}` : ''}`);
  const megasena = Array.isArray(data) ? data[0] : data;
  return megasena;
}
// Função para criar um delay 
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms)); 