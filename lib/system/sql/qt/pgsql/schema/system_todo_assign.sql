CREATE TABLE system.todo_assign (
	"todo" integer NOT NULL,
	"user" integer NOT NULL,
	"time" timestamp with time zone NOT NULL,
	CONSTRAINT system_todo_assign_pk_todo_user PRIMARY KEY ("todo", "user")
)
WITH (
  OIDS=FALSE
);