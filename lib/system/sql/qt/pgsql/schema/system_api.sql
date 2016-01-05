CREATE TABLE system.api
(
  "ID" integer NOT NULL,
  "group" integer NOT NULL,
  type integer NOT NULL,
  "parentID" integer NOT NULL,
  "parentValue" character varying(50),
  name character varying(50) NOT NULL,
  verify character varying(50),
  CONSTRAINT system_api_pk PRIMARY KEY ("ID", "group")
)
WITH (
  OIDS=FALSE
);
ALTER TABLE system.api
  OWNER TO username;
