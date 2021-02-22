-- Cracion de tablas 
CREATE TABLE empleados (
    id int IDENTITY(1,1) PRIMARY KEY,
    name varchar(255) NOT NULL,
    height int,
    weight int
);

CREATE TABLE abilities (
    id int IDENTITY(1,1) PRIMARY KEY,
    en_name varchar(255) NOT NULL,
    es_name varchar(255) NOT NULL,
    ja_name varchar(255) NOT NULL
);

-- Creacion de tabla pivote con ambas llaves primarias 
CREATE TABLE empleado_abilities (
	
	pok_abilitie_id INT   IDENTITY(1,1) PRIMARY KEY, -- id de la tabla misma
	empleado_id int NOT NULL, -- Id de la tabla empleado
	abilitie_id int NOT NULL, -- Id de la tabla abilities

	CONSTRAINT fk_empleado_id  FOREIGN KEY (empleado_id)  
	REFERENCES empleados (id), -- Se hace la relacion de llave foranea a la tabla empleado

	CONSTRAINT fk_abilitie_id  FOREIGN KEY (abilitie_id) 
	REFERENCES empleados (id) -- Se hace la relacion de llave foranea a la tabla abilities
)


/* ------------------------------------------------------------------------------- */

-- Consulta para obtener la cantidad de habilidades en orden alfabetico

  SELECT
    en_name AS Habilidad,
    COUNT(abilitie_id) AS Cantidad 
  FROM
    empleado_abilities
  JOIN
    abilities
  ON
    abilities.id = abilitie_id
  GROUP BY
    abilitie_id, en_name
  ORDER BY
    en_name
  ASC;

  /* ------------------------------------------------------------------------------ */

  -- Consulta que trae los empleadoes con inicial 'P'
  SELECT
    p.name,
    pa.empleado_id
  FROM
    empleado_abilities AS pa
  JOIN
    empleados AS p
  ON
    p.id = pa.empleado_id
WHERE
  p.name LIKE 'P%';
