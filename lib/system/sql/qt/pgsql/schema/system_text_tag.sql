CREATE TABLE system.text_tag (
	id character varying(35) NOT NULL,
	tag character varying(35) NOT NULL,
	CONSTRAINT system_text_tag_pk_id_tag PRIMARY KEY (id,tag)
)