CREATE TABLE system.todo
(
  "ID" integer NOT NULL,
  "time" timestamp with time zone NOT NULL,
  author integer NOT NULL,
  type integer NOT NULL,
  state integer NOT NULL,
  msg_1 text NOT NULL,
  msg_2 text,
  msg_3 text,
  msg_4 text,
  msg_5 text,
  CONSTRAINT system_todo_pk_id PRIMARY KEY ("ID")
)
WITH (
  OIDS=FALSE
);
ALTER TABLE system.todo
  OWNER TO username;
