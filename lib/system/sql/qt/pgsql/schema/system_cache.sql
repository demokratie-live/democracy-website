CREATE TABLE system.cache
(
  "ID" integer NOT NULL DEFAULT nextval('system."cache_ID_seq"'::regclass),
  "CacheID" integer NOT NULL,
  "Ident" character varying NOT NULL,
  data bytea,
  CONSTRAINT pk_system_cache_id PRIMARY KEY ("ID"),
  CONSTRAINT unique_system_cache_cid_ident UNIQUE ("CacheID", "Ident")
)
WITH (
  OIDS=FALSE
);
ALTER TABLE system.cache
  OWNER TO username;

-- Index: system."cache_CacheID_Ident_idx"

-- DROP INDEX system."cache_CacheID_Ident_idx";

CREATE INDEX "cache_CacheID_Ident_idx"
  ON system.cache
  USING btree
  ("CacheID", "Ident" COLLATE pg_catalog."default");

-- Index: system."cache_Ident_idx"

-- DROP INDEX system."cache_Ident_idx";

CREATE INDEX "cache_Ident_idx"
  ON system.cache
  USING btree
  ("Ident" COLLATE pg_catalog."default");