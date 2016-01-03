CREATE TABLE system.text (
	id character varying(35) NOT NULL,
	lang character varying(4) NOT NULL,
	text text NOT NULL,
	author serial NOT NULL,
	author_edit serial NOT NULL,
	time_create timestamp with time zone NOT NULL DEFAULT now(),
	time_edit timestamp with time zone DEFAULT NULL,
        CONSTRAINT system_text_pk_id_lang PRIMARY KEY (id,lang)
);