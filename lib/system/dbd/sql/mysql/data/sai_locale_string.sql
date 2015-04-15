//TODO convert
DELETE FROM system_locale_string WHERE category = 42;
INSERT INTO `system_locale_string` (`id`, `category`, `enUS`, `deDE`) VALUES ('sai_mod_login_text', 42, 'Please login for developer access (if you are a developer).', 'Please login for developer access (if you are a developer).');