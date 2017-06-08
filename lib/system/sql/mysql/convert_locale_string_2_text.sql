INSERT INTO system_text(id,`text`,lang)
	SELECT id, deDE , 'deDE' FROM system_locale_string;
INSERT INTO system_text(id,`text`,lang)
	SELECT id, enUS , 'enUS' FROM system_locale_string;
INSERT INTO system_text(id,`text`,lang)
	SELECT id, frFR , 'frFR' FROM system_locale_string;
INSERT INTO system_text(id,`text`,lang)
	SELECT id, esES , 'esES' FROM system_locale_string;
INSERT INTO system_text(id,`text`,lang)
	SELECT id, trTR , 'trTR' FROM system_locale_string;
INSERT INTO system_text(id,`text`,lang)
	SELECT id, jaJA , 'jaJA' FROM system_locale_string;
DELETE FROM system_text WHERE `text` = '';
	
INSERT INTO system_text_tag(id,tag)
	SELECT id,'basic' FROM system_locale_string WHERE category = 1;
INSERT INTO system_text_tag(id,tag)
	SELECT id,'webcraft' FROM system_locale_string WHERE category = 10;
INSERT INTO system_text_tag(id,tag)
	SELECT id,'slingit' FROM system_locale_string WHERE category = 110;