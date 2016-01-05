CREATE TABLE system.log
(
  "ID" integer NOT NULL DEFAULT nextval('system."sys_log_ID_seq"'::regclass),
  class text NOT NULL,
  message text NOT NULL,
  code integer NOT NULL,
  file text NOT NULL,
  line integer NOT NULL,
  trace text NOT NULL,
  ip text NOT NULL,
  querytime double precision NOT NULL,
  "time" timestamp with time zone NOT NULL DEFAULT now(),
  server_name character varying(255),
  server_port integer,
  request_uri character varying(512),
  post text,
  http_referer character varying(255),
  http_user_agent text,
  "user" integer,
  thrown integer,
  CONSTRAINT system_log_pk_id PRIMARY KEY ("ID"),
  CONSTRAINT system_log_fk_user FOREIGN KEY ("user")
      REFERENCES system."user" (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
)
WITH (
  OIDS=FALSE
);
ALTER TABLE system.log
  OWNER TO dasense;