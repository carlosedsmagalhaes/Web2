import { Request, Response } from "express";
import { query } from "./db";


class megasenaController {
  public async getMegaSena(req: Request, res: Response): Promise<void> {
    const codigoConcurso = req.query.codigoConcurso as string;

    let consulta:string = "SELECT * FROM megasena";
    consulta += codigoConcurso ? ` WHERE concurso = ${codigoConcurso}` : ` WHERE concurso = (SELECT MAX(concurso) FROM megasena)`;

    const r: any = await query(consulta);
    if (r.length === 0) {
      res.json({ message: `Não existem dados no concurso ${codigoConcurso}` });
    } else {
      res.json(r);
    }
  }

}

export default new megasenaController();