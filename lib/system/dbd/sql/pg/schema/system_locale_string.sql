CREATE TABLE system.locale_string
(
  id character varying(50) NOT NULL,
  category integer NOT NULL DEFAULT 0,
  "enUS" text,
  "deDE" text,
  CONSTRAINT system_locale_string_pk_id PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE system.locale_string
  OWNER TO username;