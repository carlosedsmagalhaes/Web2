import { Router } from "express";
import megasenaController from "../controllers/megaSenaController";

const routes = Router();

routes.get("/getmegasena", megasenaController.getMegaSena);

routes.get("/getmegasena/:codigoConcurso", megasenaController.getMegaSena);

export default routes;
