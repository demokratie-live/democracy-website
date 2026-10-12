CREATE TABLE system.rights
(
  "ID" integer NOT NULL DEFAULT nextval('system."user_rights_ID_seq"'::regclass),
  name character varying(55) NOT NULL,
  description character varying(255) NOT NULL,
  CONSTRAINT system_rights_pk PRIMARY KEY ("ID")
)
WITH (
  OIDS=FALSE
);
ALTER TABLE system.rights
  OWNER TO username;