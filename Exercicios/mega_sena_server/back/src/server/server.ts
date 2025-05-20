import express from "express";
import { pool } from "./controllers/db";
import cors from "cors";
import megaSenaRoutes from "./routes/megaSena";


pool
  .connect()
  .then(() => {
    console.log("Conectado ao PostgreSQL!");
  })
  .catch((err) => {
    console.error("Erro ao se conectar ao PostgreSQL:", err);
  });

const server = express();

server.use(cors());
server.use(express.json());


server.use("/api", megaSenaRoutes);

export { server };
