CREATE TABLE system."user"
(
  id serial NOT NULL,
  username character varying(32) NOT NULL,
  password_sha character varying(255),
  password_md5 character varying(255),
  email character varying(255) NOT NULL,
  joindate timestamp with time zone NOT NULL DEFAULT now(),
  locale character varying(6) NOT NULL DEFAULT 'enUS'::character varying,
  last_active timestamp with time zone NOT NULL DEFAULT now(),
  email_confirmed integer DEFAULT NULL,
  CONSTRAINT system_user_pk_id PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE system."user"
  OWNER TO username;
