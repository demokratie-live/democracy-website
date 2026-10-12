DELETE FROM system.locale_string WHERE category = 43;
INSERT INTO system.locale_string ("id", "category", "enUS", "deDE") VALUES ('sai_error_username_short', 43, 'Username is too short', 'Nutzername ist zu kurz');
INSERT INTO system.locale_string ("id", "category", "enUS", "deDE") VALUES ('sai_error_username_long', 43, 'Username is too long', 'Nutzername ist zu lang');
INSERT INTO system.locale_string ("id", "category", "enUS", "deDE") VALUES ('sai_error_username_miss', 43, 'Username required', 'Nutzername erfoderlich');
INSERT INTO system.locale_string ("id", "category", "enUS", "deDE") VALUES ('sai_error_password_miss', 43, 'Password required', 'Passwort erforderlich');
INSERT INTO system.locale_string ("id", "category", "enUS", "deDE") VALUES ('sai_error_password_long', 43, 'Password too long', 'Passwort zu lang');
INSERT INTO system.locale_string ("id", "category", "enUS", "deDE") VALUES ('sai_error_password_short', 43, 'Password too short', 'Passwort zu kurz');
INSERT INTO system.locale_string ("id", "category", "enUS", "deDE") VALUES ('sai_error_password_match', 43, 'Passwords do not match!', 'Passwords do not match!');
INSERT INTO system.locale_string ("id", "category", "enUS", "deDE") VALUES ('sai_error_email_wrong', 43, 'Invalid EMail!', 'Invalid EMail!');