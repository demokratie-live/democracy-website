CREATE TABLE system.todo
(
  "ID" integer NOT NULL,
  "class" text NOT NULL,
  "message" text NOT NULL,
  "message_hash" character varying(40) NOT NULL,
  "code" integer NOT NULL,
  "file" text NOT NULL,
  "line" integer NOT NULL,
  "trace" text NOT NULL,
  "ip" text NOT NULL,
  "querytime" double precision NOT NULL,
  "time" timestamp with time zone NOT NULL DEFAULT now(),
  server_name character varying(255),
  server_port integer,
  request_uri character varying(512),
  post text,
  http_referer character varying(255),
  http_user_agent text,
  "user" integer,
  thrown integer,
  "type" integer NOT NULL DEFAULT 0,
  "count" integer NOT NULL DEFAULT 1,
  "state" integer NOT NULL DEFAULT 0,
  "priority" integer NOT NULL DEFAULT 0,
  "time_closed" timestamp with time zone DEFAULT NULL,
  CONSTRAINT system_todo_pk_id PRIMARY KEY ("ID"),
  CONSTRAINT system_todo_fk_user FOREIGN KEY ("user")
      REFERENCES system."user" (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
)
WITH (
  OIDS=FALSE
);
ALTER TABLE system.todo
  OWNER TO dasense;