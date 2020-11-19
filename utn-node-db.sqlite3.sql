BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "SequelizeMeta" (
	"name"	VARCHAR(255) NOT NULL UNIQUE,
	PRIMARY KEY("name")
);
CREATE TABLE IF NOT EXISTS "Peticiones" (
	"id"	INTEGER,
	"hora"	DATETIME,
	"ip"	VARCHAR(255),
	"ruta"	VARCHAR(255),
	"metodo"	VARCHAR(255),
	"usuario"	INTEGER,
	PRIMARY KEY("id" AUTOINCREMENT),
	FOREIGN KEY("usuario") REFERENCES "Usuarios"("id")
);
CREATE TABLE IF NOT EXISTS "Usuarios" (
	"id"	INTEGER,
	"email"	VARCHAR(255) NOT NULL UNIQUE,
	"nombre"	VARCHAR(255) NOT NULL UNIQUE,
	"clave"	VARCHAR(255) NOT NULL,
	"tipo"	VARCHAR(255) NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "Materias" (
	"id"	INTEGER,
	"nombre"	VARCHAR(255) NOT NULL,
	"cuatrimestre"	INTEGER NOT NULL,
	"cupos"	INTEGER NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "AlumnosMaterias" (
	"id"	INTEGER,
	"alumno"	INTEGER NOT NULL,
	"materia"	INTEGER NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT),
	FOREIGN KEY("alumno") REFERENCES "Usuarios"("id"),
	FOREIGN KEY("materia") REFERENCES "Materias"("id")
);
INSERT INTO "SequelizeMeta" VALUES ('20201118152407-create-peticion.js');
INSERT INTO "SequelizeMeta" VALUES ('20201118163957-create-usuario.js');
INSERT INTO "SequelizeMeta" VALUES ('20201118223033-create-materia.js');
INSERT INTO "SequelizeMeta" VALUES ('20201118234338-create-alumno-materia.js');
INSERT INTO "Peticiones" VALUES (1,'2020-11-18 23:39:15.567 +00:00','::1','/users','POST',NULL);
INSERT INTO "Peticiones" VALUES (2,'2020-11-18 23:39:17.468 +00:00','::1','/login','POST',NULL);
INSERT INTO "Peticiones" VALUES (3,'2020-11-18 23:40:13.949 +00:00','::1','/materia','POST',1);
INSERT INTO "Peticiones" VALUES (4,'2020-11-18 23:58:20.180 +00:00','::1','/users','POST',NULL);
INSERT INTO "Peticiones" VALUES (5,'2020-11-18 23:58:28.124 +00:00','::1','/login','POST',NULL);
INSERT INTO "Peticiones" VALUES (6,'2020-11-18 23:58:34.940 +00:00','::1','/materia','POST',2);
INSERT INTO "Peticiones" VALUES (7,'2020-11-18 23:59:01.040 +00:00','::1','/materia','POST',2);
INSERT INTO "Peticiones" VALUES (8,'2020-11-18 23:59:08.645 +00:00','::1','/login','POST',NULL);
INSERT INTO "Peticiones" VALUES (9,'2020-11-18 23:59:49.542 +00:00','::1','/login','POST',NULL);
INSERT INTO "Peticiones" VALUES (10,'2020-11-19 00:00:01.935 +00:00','::1','/materia','POST',1);
INSERT INTO "Peticiones" VALUES (11,'2020-11-19 00:00:05.092 +00:00','::1','/materia','POST',1);
INSERT INTO "Peticiones" VALUES (12,'2020-11-19 00:00:07.637 +00:00','::1','/materia','POST',1);
INSERT INTO "Peticiones" VALUES (13,'2020-11-19 00:00:10.204 +00:00','::1','/materia','POST',1);
INSERT INTO "Peticiones" VALUES (14,'2020-11-19 00:00:16.242 +00:00','::1','/inscripcion/:idMateria','POST',2);
INSERT INTO "Peticiones" VALUES (15,'2020-11-19 00:01:15.441 +00:00','::1','/inscripcion/:idMateria','POST',2);
INSERT INTO "Peticiones" VALUES (16,'2020-11-19 00:03:07.574 +00:00','::1','/inscripcion/:idMateria','POST',2);
INSERT INTO "Peticiones" VALUES (17,'2020-11-19 00:03:25.721 +00:00','::1','/inscripcion/:idMateria','POST',2);
INSERT INTO "Peticiones" VALUES (18,'2020-11-19 00:13:46.726 +00:00','::1','/inscripcion/:idMateria','POST',2);
INSERT INTO "Peticiones" VALUES (19,'2020-11-19 00:14:30.922 +00:00','::1','/inscripcion/:idMateria','POST',2);
INSERT INTO "Peticiones" VALUES (20,'2020-11-19 00:16:12.079 +00:00','::1','/inscripcion/:idMateria','POST',2);
INSERT INTO "Peticiones" VALUES (21,'2020-11-19 00:16:12.910 +00:00','::1','/inscripcion/:idMateria','POST',2);
INSERT INTO "Peticiones" VALUES (22,'2020-11-19 00:16:21.613 +00:00','::1','/inscripcion/:idMateria','POST',2);
INSERT INTO "Peticiones" VALUES (23,'2020-11-19 00:16:54.400 +00:00','::1','/inscripcion/:idMateria','POST',2);
INSERT INTO "Peticiones" VALUES (24,'2020-11-19 00:16:55.031 +00:00','::1','/inscripcion/:idMateria','POST',2);
INSERT INTO "Peticiones" VALUES (25,'2020-11-19 00:16:55.559 +00:00','::1','/inscripcion/:idMateria','POST',2);
INSERT INTO "Peticiones" VALUES (26,'2020-11-19 00:17:02.284 +00:00','::1','/inscripcion/:idMateria','POST',2);
INSERT INTO "Peticiones" VALUES (27,'2020-11-19 00:18:42.228 +00:00','::1','/inscripcion/:idMateria','POST',2);
INSERT INTO "Peticiones" VALUES (28,'2020-11-19 00:18:51.143 +00:00','::1','/inscripcion/:idMateria','POST',2);
INSERT INTO "Peticiones" VALUES (29,'2020-11-19 00:19:57.880 +00:00','::1','/inscripcion/:idMateria','POST',2);
INSERT INTO "Peticiones" VALUES (30,'2020-11-19 00:20:52.569 +00:00','::1','/inscripcion/:idMateria','POST',2);
INSERT INTO "Peticiones" VALUES (31,'2020-11-19 00:20:55.080 +00:00','::1','/inscripcion/:idMateria','POST',2);
INSERT INTO "Usuarios" VALUES (1,'pepe2@mail.com','pepe2','1233','admin');
INSERT INTO "Usuarios" VALUES (2,'pepe3@mail.com','pepe3','1233','alumno');
INSERT INTO "Materias" VALUES (1,'materia1',1,1);
INSERT INTO "Materias" VALUES (2,'materia2',1,1);
INSERT INTO "Materias" VALUES (3,'materia3',1,1);
INSERT INTO "Materias" VALUES (4,'materia4',1,1);
INSERT INTO "AlumnosMaterias" VALUES (3,2,4);
COMMIT;
