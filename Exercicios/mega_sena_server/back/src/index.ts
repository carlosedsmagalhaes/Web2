import { server } from "./server/server";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`Servidor rodando em: http://localhost:${PORT}`);
});