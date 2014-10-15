CREATE TABLE system.cron
(
    "class" character varying(255) NOT NULL,
    "min" integer DEFAULT NULL,
    "hour" integer DEFAULT NULL,
    "day" integer DEFAULT NULL,
    "day_week" integer DEFAULT NULL,
    "month" integer DEFAULT NULL,
    "last_run" timestamp with time zone DEFAULT NULL,
    "status" integer NOT NULL DEFAULT 0,
    PRIMARY KEY ("class")
)
WITH (
  OIDS=FALSE
);
ALTER TABLE system.log
  OWNER TO dasense;