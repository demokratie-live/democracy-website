CREATE TABLE system.page
(
	"id" integer NOT NULL,
	"group" integer NOT NULL,
	"name" character varying(50) NOT NULL,
	"state" character varying(50) NOT NULL,
	"parent_id" integer NOT NULL,
	"login" integer NOT NULL DEFAULT '0',
	"type" integer NOT NULL DEFAULT '0',
	"div" character varying(50) NOT NULL,
	"url" text NOT NULL,
	"func" character varying(50) NOT NULL,
	"php_class" character varying(50) NOT NULL,
        CONSTRAINT system_page_pk PRIMARY KEY ("id", "group")
)
WITH (
  OIDS=FALSE
);