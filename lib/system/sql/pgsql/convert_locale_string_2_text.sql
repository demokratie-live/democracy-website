INSERT INTO system.text(id,text,lang)
    SELECT id, "deDE" , 'deDE' FROM system.locale_string WHERE category = 100;
INSERT INTO system.text(id,text,lang)
    SELECT id, "deDE" , 'deDE' FROM system.locale_string WHERE category = 110;
INSERT INTO system.text(id,text,lang)
    SELECT id, "deDE" , 'deDE' FROM system.locale_string WHERE category = 111;
INSERT INTO system.text(id,text,lang)
    SELECT id, "deDE" , 'deDE' FROM system.locale_string WHERE category = 112;
INSERT INTO system.text(id,text,lang)
    SELECT id, "deDE" , 'deDE' FROM system.locale_string WHERE category = 113;
INSERT INTO system.text(id,text,lang)
    SELECT id, "deDE" , 'deDE' FROM system.locale_string WHERE category = 114;
INSERT INTO system.text(id,text,lang)
    SELECT id, "deDE" , 'deDE' FROM system.locale_string WHERE category = 115;
INSERT INTO system.text(id,text,lang)
    SELECT id, "deDE" , 'deDE' FROM system.locale_string WHERE category = 116;
INSERT INTO system.text(id,text,lang)
    SELECT id, "deDE" , 'deDE' FROM system.locale_string WHERE category = 117;
INSERT INTO system.text(id,text,lang)
    SELECT id, "deDE" , 'deDE' FROM system.locale_string WHERE category = 118;
INSERT INTO system.text(id,text,lang)
    SELECT id, "deDE" , 'deDE' FROM system.locale_string WHERE category = 119;
INSERT INTO system.text(id,text,lang)
    SELECT id, "deDE" , 'deDE' FROM system.locale_string WHERE category = 120;
INSERT INTO system.text(id,text,lang)
    SELECT id, "deDE" , 'deDE' FROM system.locale_string WHERE category = 121;
INSERT INTO system.text(id,text,lang)
    SELECT id, "deDE" , 'deDE' FROM system.locale_string WHERE category = 122;
INSERT INTO system.text(id,text,lang)
    SELECT id, "deDE" , 'deDE' FROM system.locale_string WHERE category = 123;
INSERT INTO system.text(id,text,lang)
    SELECT id, "deDE" , 'deDE' FROM system.locale_string WHERE category = 200;
INSERT INTO system.text(id,text,lang)
    SELECT id, "deDE" , 'deDE' FROM system.locale_string WHERE category = 201;
INSERT INTO system.text(id,text,lang)
    SELECT id, "deDE" , 'deDE' FROM system.locale_string WHERE category = 202;
INSERT INTO system.text(id,text,lang)
    SELECT id, "deDE" , 'deDE' FROM system.locale_string WHERE category = 203;
INSERT INTO system.text(id,text,lang)
    SELECT id, "deDE" , 'deDE' FROM system.locale_string WHERE category = 204;
INSERT INTO system.text(id,text,lang)
    SELECT id, "deDE" , 'deDE' FROM system.locale_string WHERE category = 300;
INSERT INTO system.text(id,text,lang)
    SELECT id, "deDE" , 'deDE' FROM system.locale_string WHERE category = 301;
INSERT INTO system.text(id,text,lang)
    SELECT id, "deDE" , 'deDE' FROM system.locale_string WHERE category = 302;

INSERT INTO system.text(id,text,lang)
    SELECT id, "enUS" , 'enUS' FROM system.locale_string WHERE category = 100;
INSERT INTO system.text(id,text,lang)
    SELECT id, "enUS" , 'enUS' FROM system.locale_string WHERE category = 110;
INSERT INTO system.text(id,text,lang)
    SELECT id, "enUS" , 'enUS' FROM system.locale_string WHERE category = 111;
INSERT INTO system.text(id,text,lang)
    SELECT id, "enUS" , 'enUS' FROM system.locale_string WHERE category = 112;
INSERT INTO system.text(id,text,lang)
    SELECT id, "enUS" , 'enUS' FROM system.locale_string WHERE category = 113;
INSERT INTO system.text(id,text,lang)
    SELECT id, "enUS" , 'enUS' FROM system.locale_string WHERE category = 114;
INSERT INTO system.text(id,text,lang)
    SELECT id, "enUS" , 'enUS' FROM system.locale_string WHERE category = 115;
INSERT INTO system.text(id,text,lang)
    SELECT id, "enUS" , 'enUS' FROM system.locale_string WHERE category = 116;
INSERT INTO system.text(id,text,lang)
    SELECT id, "enUS" , 'enUS' FROM system.locale_string WHERE category = 117;
INSERT INTO system.text(id,text,lang)
    SELECT id, "enUS" , 'enUS' FROM system.locale_string WHERE category = 118;
INSERT INTO system.text(id,text,lang)
    SELECT id, "enUS" , 'enUS' FROM system.locale_string WHERE category = 119;
INSERT INTO system.text(id,text,lang)
    SELECT id, "enUS" , 'enUS' FROM system.locale_string WHERE category = 120;
INSERT INTO system.text(id,text,lang)
    SELECT id, "enUS" , 'enUS' FROM system.locale_string WHERE category = 121;
INSERT INTO system.text(id,text,lang)
    SELECT id, "enUS" , 'enUS' FROM system.locale_string WHERE category = 122;
INSERT INTO system.text(id,text,lang)
    SELECT id, "enUS" , 'enUS' FROM system.locale_string WHERE category = 123;
INSERT INTO system.text(id,text,lang)
    SELECT id, "enUS" , 'enUS' FROM system.locale_string WHERE category = 200;
INSERT INTO system.text(id,text,lang)
    SELECT id, "enUS" , 'enUS' FROM system.locale_string WHERE category = 201;
INSERT INTO system.text(id,text,lang)
    SELECT id, "enUS" , 'enUS' FROM system.locale_string WHERE category = 202;
INSERT INTO system.text(id,text,lang)
    SELECT id, "enUS" , 'enUS' FROM system.locale_string WHERE category = 203;
INSERT INTO system.text(id,text,lang)
    SELECT id, "enUS" , 'enUS' FROM system.locale_string WHERE category = 204;
INSERT INTO system.text(id,text,lang)
    SELECT id, "enUS" , 'enUS' FROM system.locale_string WHERE category = 300;
INSERT INTO system.text(id,text,lang)
    SELECT id, "enUS" , 'enUS' FROM system.locale_string WHERE category = 301;
INSERT INTO system.text(id,text,lang)
    SELECT id, "enUS" , 'enUS' FROM system.locale_string WHERE category = 302;

DELETE FROM system.text WHERE text = '';

INSERT INTO system.text_tag(id,tag)
    SELECT id,'dasense' FROM system.locale_string WHERE category = 100;
INSERT INTO system.text_tag(id,tag)
    SELECT id,'dasense_defaultpage' FROM system.locale_string WHERE category = 110;
INSERT INTO system.text_tag(id,tag)
    SELECT id,'dasense_geopoint' FROM system.locale_string WHERE category = 111;
INSERT INTO system.text_tag(id,tag)
    SELECT id,'dasense_impressum' FROM system.locale_string WHERE category = 112;
INSERT INTO system.text_tag(id,tag)
    SELECT id,'dasense_project' FROM system.locale_string WHERE category = 113;
INSERT INTO system.text_tag(id,tag)
    SELECT id,'dasense_sensor' FROM system.locale_string WHERE category = 114;
INSERT INTO system.text_tag(id,tag)
    SELECT id,'dasense_userlogin' FROM system.locale_string WHERE category = 115;
INSERT INTO system.text_tag(id,tag)
    SELECT id,'dasense_userlogout' FROM system.locale_string WHERE category = 116;
INSERT INTO system.text_tag(id,tag)
    SELECT id,'dasense_user' FROM system.locale_string WHERE category = 117;
INSERT INTO system.text_tag(id,tag)
    SELECT id,'dasense_press' FROM system.locale_string WHERE category = 118;
INSERT INTO system.text_tag(id,tag)
    SELECT id,'dasense_contact' FROM system.locale_string WHERE category = 119;
INSERT INTO system.text_tag(id,tag)
    SELECT id,'dasense_userstatistics' FROM system.locale_string WHERE category = 120;
INSERT INTO system.text_tag(id,tag)
    SELECT id,'dasense_highscore' FROM system.locale_string WHERE category = 121;
INSERT INTO system.text_tag(id,tag)
    SELECT id,'dasense_devs' FROM system.locale_string WHERE category = 122;
INSERT INTO system.text_tag(id,tag)
    SELECT id,'dasense_resetpassword' FROM system.locale_string WHERE category = 123;

INSERT INTO system.text_tag(id,tag)
    SELECT id,'db_admin_level' FROM system.locale_string WHERE category = 200;
INSERT INTO system.text_tag(id,tag)
    SELECT id,'db_badge_category' FROM system.locale_string WHERE category = 201;
INSERT INTO system.text_tag(id,tag)
    SELECT id,'db_badge' FROM system.locale_string WHERE category = 202;
INSERT INTO system.text_tag(id,tag)
    SELECT id,'db_title' FROM system.locale_string WHERE category = 203;
INSERT INTO system.text_tag(id,tag)
    SELECT id,'db_locality' FROM system.locale_string WHERE category = 204;

INSERT INTO system.text_tag(id,tag)
    SELECT id,'app_all' FROM system.locale_string WHERE category = 300;
INSERT INTO system.text_tag(id,tag)
    SELECT id,'app_android' FROM system.locale_string WHERE category = 301;
INSERT INTO system.text_tag(id,tag)
    SELECT id,'app_ios' FROM system.locale_string WHERE category = 302;