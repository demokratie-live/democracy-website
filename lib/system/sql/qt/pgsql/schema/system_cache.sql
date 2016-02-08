CREATE TABLE system.cache
(
  "cache" integer NOT NULL,
  "ident" character varying NOT NULL,
  "type" character varying NOT NULL,
  "data" text,
  CONSTRAINT pk_system_cache_cache_ident PRIMARY KEY ("cache", "ident")
)
WITH (
  OIDS=FALSE
);