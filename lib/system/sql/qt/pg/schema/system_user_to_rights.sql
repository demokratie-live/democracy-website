CREATE TABLE system.user_to_rights
(
  "rightID" integer NOT NULL,
  "userID" integer NOT NULL,
  CONSTRAINT "system_user_to_rights_fk_userID" FOREIGN KEY ("userID")
      REFERENCES system."user" (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION,
  CONSTRAINT "system_user_to_rights_rightID" FOREIGN KEY ("rightID")
      REFERENCES system.rights ("ID") MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
)
WITH (
  OIDS=FALSE
);
ALTER TABLE system.user_to_rights
  OWNER TO username;