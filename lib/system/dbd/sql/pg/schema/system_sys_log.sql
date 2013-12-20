CREATE TABLE system.sys_log
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
  "time" timestamp with time zone NOT NULL DEFAULT now()
)
WITH (
  OIDS=FALSE
);
ALTER TABLE system.sys_log
  OWNER TO username;

