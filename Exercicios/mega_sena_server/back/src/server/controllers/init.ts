import { query } from "./db";
import dotenv from "dotenv";
dotenv.config();

async function init() {
  return await query(`
        START TRANSACTION;
        DROP TABLE IF EXISTS megasena; 
        CREATE TABLE megasena ( 
        concurso INTEGER NOT NULL, 
        data_do_sorteio DATE NOT NULL, 
        bola1 INTEGER NOT NULL, 
        bola2 INTEGER NOT NULL, 
        bola3 INTEGER NOT NULL, 
        bola4 INTEGER NOT NULL, 
        bola5 INTEGER NOT NULL, 
        bola6 INTEGER NOT NULL, 
        ganhadores_6_acertos INTEGER NOT NULL, 
        cidade_uf VARCHAR(510) NULL, 
        rateio_6_acertos DECIMAL NOT NULL, 
        ganhadores_5_acertos INTEGER NOT NULL, 
        rateio_5_acertos DECIMAL NOT NULL, 
        ganhadores_4_acertos INTEGER NOT NULL, 
        rateio_4_acertos DECIMAL NOT NULL, 
        acumulado_6_acertos DECIMAL NOT NULL, 
        arrecadacao_total DECIMAL NOT NULL, 
        estimativa_premio DECIMAL NOT NULL, 
        acumulado_sorteio_especial_mega_da_virada DECIMAL NOT NULL, 
        observacao VARCHAR(255) NULL, 
        PRIMARY KEY(concurso) 
        ); 

        COMMIT;

        COPY megasena 
        FROM '${process.env.PATH_IMPORT}' 
        WITH ( 
            FORMAT csv, 
            DELIMITER ';', 
            HEADER, 
            NULL 'NULL' 
        );  
    `);
}

init()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
