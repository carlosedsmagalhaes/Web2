CREATE TABLE Satelite (
  SateliteID   SERIAL  NOT NULL,
  SateliteNome VARCHAR(40),
     PRIMARY KEY ( SateliteID ));

CREATE UNIQUE INDEX USATELITE1 ON Satelite (
      SateliteNome);

-- Bioma

CREATE TABLE Bioma (
  BiomaID   SERIAL  NOT NULL,
  BiomaNome VARCHAR(40)    NOT NULL,
     PRIMARY KEY ( BiomaID ));

CREATE UNIQUE INDEX UBIOMA ON Bioma (
      BiomaNome);
--Pais


CREATE TABLE Pais (
  PaisID   SERIAL  NOT NULL,
  PaisNome VARCHAR(40),
     PRIMARY KEY ( PaisID ));

CREATE UNIQUE INDEX UPAIS ON Pais (
      PaisNome);

--Estado

CREATE TABLE Estado (
  EstadoID   SERIAL NOT NULL,
  PaisID     int,
  EstadoNome VARCHAR(40),
     PRIMARY KEY ( EstadoID ));

CREATE INDEX IESTADO1 ON Estado (PaisID);

CREATE UNIQUE INDEX UESTADO2 ON Estado (
      EstadoNome);

ALTER TABLE Estado
 ADD CONSTRAINT IESTADO1 FOREIGN KEY ( PaisID ) REFERENCES Pais(PaisID);

--Municipio

CREATE TABLE Municipio (
  MunicipioID   SERIAL  NOT NULL,
  EstadoID      int,
  MunicipioNome VARCHAR(40),
     PRIMARY KEY ( MunicipioID ));

CREATE INDEX IMUNICIPIO1 ON Municipio (EstadoID);

CREATE UNIQUE INDEX UMUNICIPIO2 ON Municipio (
      MunicipioNome);

ALTER TABLE Municipio
 ADD CONSTRAINT IMUNICIPIO1 FOREIGN KEY ( EstadoID ) REFERENCES Estado(EstadoID);
 
 --OCorrencia

CREATE TABLE Ocorrencia (OcorrenciaID SERIAL NOT NULL , MunicipioID int , BiomaID int , OcorrenciaDataHora timestamp without time zone , SateliteID int , OcorrenciaDiaSemChuva int , OcorrenciaPrecipitacao int , OcorrenciaRiscoFogo int , OcorrenciaLatitude VARCHAR(40) , OcorrenciaLongitude VARCHAR(40) , OcorrenciaFRP int , PRIMARY KEY(OcorrenciaID));
CREATE INDEX IOCORRENCIA1 ON Ocorrencia (
      SateliteID);
CREATE INDEX IOCORRENCIA2 ON Ocorrencia (
      BiomaID);
CREATE INDEX IOCORRENCIA3 ON Ocorrencia (
      MunicipioID);
ALTER TABLE Ocorrencia
 ADD CONSTRAINT IOCORRENCIA3 FOREIGN KEY ( MunicipioID ) REFERENCES Municipio(MunicipioID);
ALTER TABLE Ocorrencia
 ADD CONSTRAINT IOCORRENCIA2 FOREIGN KEY ( BiomaID ) REFERENCES Bioma(BiomaID);
ALTER TABLE Ocorrencia
 ADD CONSTRAINT IOCORRENCIA1 FOREIGN KEY ( SateliteID ) REFERENCES Satelite(SateliteID);

 DROP TABLE IF EXISTS Ocorrencia CASCADE;
DROP TABLE IF EXISTS Municipio CASCADE;
DROP TABLE IF EXISTS Estado CASCADE;
DROP TABLE IF EXISTS Pais CASCADE;
DROP TABLE IF EXISTS Bioma CASCADE;
DROP TABLE IF EXISTS Satelite CASCADE;