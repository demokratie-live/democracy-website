-- Basic
    DELETE FROM `system_text` WHERE id = 'basic_add';
    DELETE FROM `system_text_tag` WHERE id = 'basic_add';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_add', 'deDE', 'Hinzufügen', 2, 2, '2015-04-20 01:45:18', '2015-04-20 01:45:18');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_add', 'enUS', 'Add', 2, 2, '2015-04-18 13:25:30', '2015-04-18 13:25:30');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_add', 'frFR', 'Ajouter', 3, 3, '2015-04-20 16:31:35', '2015-04-20 16:31:35');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_add', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_add', 'sai_text');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_add', 'sai_cron');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_add', 'sai_todo');
    
    DELETE FROM `system_text` WHERE id = 'basic_admin_rights';
    DELETE FROM `system_text_tag` WHERE id = 'basic_admin_rights';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_admin_rights', 'deDE', 'Admin Rechte', 0, 2, '2015-04-16 16:50:40', '2015-04-16 15:43:20');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_admin_rights', 'enUS', '<p>Admin Rights</p>', 0, 2, '2015-04-16 17:55:53', '2015-04-16 17:55:53');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_admin_rights', 'frFR', 'Droits du administrateur', 3, 3, '2015-04-20 16:44:03', '2015-04-20 16:44:03');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_admin_rights', 'jaJA', '管理者権限', 0, 2, '2015-04-17 20:32:33', '2015-04-17 20:32:33');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_admin_rights', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_admin_rights', 'sai_login');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_admin_rights', 'sai_start');

    DELETE FROM `system_text` WHERE id = 'basic_all';
    DELETE FROM `system_text_tag` WHERE id = 'basic_all';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_all', 'deDE', 'Alle', 2, 2, '2015-04-20 01:45:03', '2015-04-20 01:45:03');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_all', 'enUS', 'All', 2, 2, '2015-04-18 13:57:18', '2015-04-18 13:57:18');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_all', 'frFR', 'Tous', 3, 3, '2015-04-20 16:31:55', '2015-04-20 16:31:55');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_all', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_all', 'sai_log');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_all', 'sai_todo');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_all', 'sai_security');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_all', 'sai_text');

    DELETE FROM `system_text` WHERE id = 'basic_analytics';
    DELETE FROM `system_text_tag` WHERE id = 'basic_analytics';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_analytics', 'deDE', 'Statistik', 0, 0, '2015-04-16 14:13:25', '0000-00-00 00:00:00');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_analytics', 'enUS', 'Analytics', 2, 2, '2015-04-17 19:20:19', '2015-04-17 19:20:19');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_analytics', 'frFR', 'Statistique', 3, 3, '2015-04-20 14:20:35', '2015-04-20 14:20:35');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_analytics', 'jaJA', '統計', 0, 0, '2015-04-16 14:32:45', '0000-00-00 00:00:00');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_analytics', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_analytics', 'sai_log');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_analytics', 'sai_start');

    DELETE FROM `system_text` WHERE id = 'basic_back';
    DELETE FROM `system_text_tag` WHERE id = 'basic_back';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_back', 'deDE', 'Zurück', 2, 2, '2015-04-20 01:44:24', '2015-04-20 01:44:24');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_back', 'enUS', 'Back', 2, 2, '2015-04-18 13:34:53', '2015-04-18 13:34:53');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_back', 'frFR', 'Retour', 3, 3, '2015-04-20 16:34:28', '2015-04-20 16:34:28');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_back', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_back', 'sai_text');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_back', 'sai_todo');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_back', 'sai_login');

    DELETE FROM `system_text` WHERE id = 'basic_cancel';
    DELETE FROM `system_text_tag` WHERE id = 'basic_cancel';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_cancel', 'deDE', 'Abbrechen', 0, 0, '2015-04-15 18:29:16', '0000-00-00 00:00:00');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_cancel', 'enUS', 'Cancel', 0, 0, '2015-04-15 18:29:16', '0000-00-00 00:00:00');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_cancel', 'frFR', 'Annuler', 3, 3, '2015-04-18 04:46:32', '2015-04-18 04:46:32');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_cancel', 'jaJA', 'キャンシル', 0, 0, '2015-04-15 18:41:22', '0000-00-00 00:00:00');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_cancel', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_cancel', 'sai_login');

    DELETE FROM `system_text` WHERE id = 'basic_close';
    DELETE FROM `system_text_tag` WHERE id = 'basic_close';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_close', 'deDE', 'Schlie&szlig;en', 0, 0, '2015-04-15 18:29:16', '0000-00-00 00:00:00');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_close', 'enUS', 'Close', 0, 0, '2015-04-15 18:29:16', '0000-00-00 00:00:00');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_close', 'frFR', 'Fermer', 3, 3, '2015-04-18 04:47:27', '2015-04-18 04:47:27');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_close', 'jaJA', '閉める', 0, 0, '2015-04-15 18:41:22', '0000-00-00 00:00:00');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_close', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_close', 'sai_todo');

    DELETE FROM `system_text` WHERE id = 'basic_delete';
    DELETE FROM `system_text_tag` WHERE id = 'basic_delete';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_delete', 'deDE', 'Löschen', 2, 2, '2015-04-20 01:45:45', '2015-04-20 01:45:45');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_delete', 'enUS', 'Delete', 2, 2, '2015-04-18 13:35:31', '2015-04-18 13:35:31');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_delete', 'frFR', 'Effacer', 3, 3, '2015-04-20 16:30:09', '2015-04-20 16:30:09');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_delete', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_delete', 'sai_text');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_delete', 'sai_files');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_delete', 'sai_cron');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_delete', 'sai_security');

    DELETE FROM `system_text` WHERE id = 'basic_email';
    DELETE FROM `system_text_tag` WHERE id = 'basic_email';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_email', 'deDE', 'E-Mail', 0, 2, '2015-04-17 20:30:52', '2015-04-17 20:30:52');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_email', 'enUS', 'EMail', 0, 0, '2015-04-15 18:29:16', '0000-00-00 00:00:00');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_email', 'frFR', 'éMail', 3, 3, '2015-04-20 14:21:33', '2015-04-20 14:21:33');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_email', 'jaJA', 'メール', 0, 0, '2015-04-15 18:41:22', '0000-00-00 00:00:00');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_email', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_email', 'sai_login');

    DELETE FROM `system_text` WHERE id = 'basic_email_wrong';
    DELETE FROM `system_text_tag` WHERE id = 'basic_email_wrong';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_email_wrong', 'deDE', 'Invalid EMail!', 0, 2, '2015-04-18 13:15:58', '2015-04-18 13:15:58');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_email_wrong', 'enUS', 'Invalid EMail!', 0, 0, '2015-04-18 13:15:58', '0000-00-00 00:00:00');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_email_wrong', 'frFR', 'Adresse courriel&nbsp;non valide!', 3, 3, '2015-04-20 16:23:48', '2015-04-20 16:23:48');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_email_wrong', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_email_wrong', 'sai_login');

    DELETE FROM `system_text` WHERE id = 'basic_email_miss';
    DELETE FROM `system_text_tag` WHERE id = 'basic_email_miss';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_email_miss', 'deDE', 'EMail fehlt!', 0, 2, '2015-04-18 13:15:58', '2015-04-18 13:15:58');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_email_miss', 'enUS', 'EMail missing!', 0, 0, '2015-04-18 13:15:58', '0000-00-00 00:00:00');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_email_miss', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_email_miss', 'sai_login');

    DELETE FROM `system_text` WHERE id = 'basic_error';
    DELETE FROM `system_text_tag` WHERE id = 'basic_error';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_error', 'deDE', 'Fehler', 2, 2, '2015-04-20 01:45:35', '2015-04-20 01:45:35');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_error', 'enUS', 'Error', 2, 2, '2015-04-18 13:56:13', '2015-04-18 13:56:13');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_error', 'frFR', 'Erreur', 3, 3, '2015-04-20 16:30:41', '2015-04-20 16:30:41');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_error', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_error', 'sai_log');

    DELETE FROM `system_text` WHERE id = 'basic_example';
    DELETE FROM `system_text_tag` WHERE id = 'basic_example';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_example', 'deDE', '<h1><img style="float: right;" title="TinyMCE Logo" src="http://www.tinymce.com/tryit/img/tlogo.png" alt="TinyMCE Logo" width="92" height="80" data-mce-src="http://www.tinymce.com/tryit/img/tlogo.png" data-mce-style="float: right;">Welcome to the TinyMCE editor demo!</h1><p>Feel free to try out the different features that are provided, please note that the <strong>MoxieManager</strong> specific functionality is part of our commercial offering. The demo is to show the integration.</p><h2>Got questions or need help?</h2><p>If you have questions or need help, feel free to visit our <a href="forum/index.php" data-mce-href="forum/index.php">community forum</a>! We also offer Enterprise <a href="enterprise/support.php" data-mce-href="enterprise/support.php">support</a> solutions. Also do not miss out on the <a href="wiki.php" data-mce-href="wiki.php">documentation</a>, its a great resource wiki for understanding how TinyMCE works and integrates.</p><h2>Found a bug?</h2><p>If you think you have found a bug, you can use the <a href="develop/bugtracker.php" data-mce-href="develop/bugtracker.php">Bug Tracker</a> to report bugs to the developers.</p><p>And here is a simple table for you to play with.</p><table class="mce-item-table" border="0"><tbody><tr><td><strong>Product</strong></td><td><strong>Cost</strong></td><td><strong>Really?</strong></td></tr><tr><td>TinyMCE</td><td>Free</td><td>YES!</td></tr><tr><td>Plupload</td><td>Free</td><td>YES!</td></tr></tbody></table><p>Enjoy our software and create great content!</p><p>Oh, and by the way, don\'t forget to check out our other product called <a href="http://www.plupload.com" target="_blank" data-mce-href="http://www.plupload.com">Plupload</a>, your ultimate upload solution with HTML5 upload support!</p>', 0, 2, '2015-04-18 13:31:15', '2015-04-18 13:31:15');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_example', 'enUS', '<h1><img style="float: right;" title="TinyMCE Logo" src="http://www.tinymce.com/tryit/img/tlogo.png" alt="TinyMCE Logo" width="92" height="80" />Welcome to the TinyMCE editor demo!</h1>\n<p>Feel free to try out the different features that are provided, please note that the <strong>MoxieManager</strong> specific functionality is part of our commercial offering. The demo is to show the integration.</p>\n<h2>Got questions or need help?</h2>\n<p>If you have questions or need help, feel free to visit our <a href="forum/index.php">community forum</a>! We also offer Enterprise <a href="enterprise/support.php">support</a> solutions. Also do not miss out on the <a href="wiki.php">documentation</a>, its a great resource wiki for understanding how TinyMCE works and integrates.</p>\n<h2>Found a bug?</h2>\n<p>If you think you have found a bug, you can use the <a href="develop/bugtracker.php">Bug Tracker</a> to report bugs to the developers.</p>\n<p>And here is a simple table for you to play with.</p>\n<table border="0">\n<tbody>\n<tr>\n<td><strong>Product</strong></td>\n<td><strong>Cost</strong></td>\n<td><strong>Really?</strong></td>\n</tr>\n<tr>\n<td>TinyMCE</td>\n<td>Free</td>\n<td>YES!</td>\n</tr>\n<tr>\n<td>Plupload</td>\n<td>Free</td>\n<td>YES!</td>\n</tr>\n</tbody>\n</table>\n<p>Enjoy our software and create great content!</p>\n<p>Oh, and by the way, don\'t forget to check out our other product called <a href="http://www.plupload.com" target="_blank">Plupload</a>, your ultimate upload solution with HTML5 upload support!</p>', 0, 0, '2015-04-15 18:29:16', '0000-00-00 00:00:00');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_example', 'example');

    DELETE FROM `system_text` WHERE id = 'basic_ips';
    DELETE FROM `system_text_tag` WHERE id = 'basic_ips';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_ips', 'deDE', 'IPs', 1, 1, '2015-04-16 23:22:09', '2015-04-16 16:47:38');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_ips', 'enUS', 'IPs', 2, 1, '2015-04-16 23:22:09', '2015-04-16 23:22:09');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_ips', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_ips', 'sai_start');

    DELETE FROM `system_text` WHERE id = 'basic_join_date';
    DELETE FROM `system_text_tag` WHERE id = 'basic_join_date';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_join_date', 'deDE', 'Beitrittsdatum', 0, 2, '2015-04-17 20:32:44', '2015-04-17 20:32:44');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_join_date', 'enUS', 'Joindate', 0, 0, '2015-04-15 18:29:16', '0000-00-00 00:00:00');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_join_date', 'frFR', 'Date de l\'affiliation<a href="http://dict.leo.org/frde/index_de.html#/search=affiliation&amp;searchLoc=0&amp;resultOrder=basic&amp;multiwordShowSingle=on" data-mce-href="http://dict.leo.org/frde/index_de.html#/search=affiliation&amp;searchLoc=0&amp;resultOrder=basic&amp;multiwordShowSingle=on"><br></a>', 3, 3, '2015-04-20 14:31:49', '2015-04-20 14:31:49');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_join_date', 'jaJA', 'メンバになりましたの日', 0, 0, '2015-04-15 18:41:22', '0000-00-00 00:00:00');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_join_date', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_join_date', 'sai_login');

    DELETE FROM `system_text` WHERE id = 'basic_last_active';
    DELETE FROM `system_text_tag` WHERE id = 'basic_last_active';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_last_active', 'deDE', 'Zuletzt aktiv', 0, 2, '2015-04-17 20:31:03', '2015-04-17 20:31:03');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_last_active', 'enUS', 'Last active', 0, 0, '2015-04-15 18:29:16', '0000-00-00 00:00:00');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_last_active', 'frFR', 'en dernier actif', 3, 3, '2015-04-20 14:26:17', '2015-04-20 14:26:17');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_last_active', 'jaJA', '前のログイン', 0, 0, '2015-04-15 18:41:22', '0000-00-00 00:00:00');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_last_active', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_last_active', 'sai_login');

    DELETE FROM `system_text` WHERE id = 'basic_locale';
    DELETE FROM `system_text_tag` WHERE id = 'basic_locale';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_locale', 'deDE', 'Sprache', 0, 2, '2015-04-17 20:31:27', '2015-04-17 20:31:27');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_locale', 'enUS', 'Locale', 0, 0, '2015-04-15 18:29:16', '0000-00-00 00:00:00');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_locale', 'frFR', 'Langue', 3, 3, '2015-04-20 16:35:18', '2015-04-20 16:35:18');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_locale', 'jaJA', '言葉', 0, 0, '2015-04-15 18:41:22', '0000-00-00 00:00:00');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_locale', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_locale', 'sai_login');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_locale', 'sai_start');

    DELETE FROM `system_text` WHERE id = 'basic_log';
    DELETE FROM `system_text_tag` WHERE id = 'basic_log';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_log', 'deDE', 'Log', 0, 0, '2015-04-16 14:27:44', '0000-00-00 00:00:00');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_log', 'enUS', 'Log', 2, 2, '2015-04-17 19:20:04', '2015-04-17 19:20:04');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_log', 'frFR', 'Log', 3, 3, '2015-04-20 14:19:53', '2015-04-20 14:19:53');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_log', 'jaJA', '報告', 2, 2, '2015-04-23 01:44:00', '2015-04-23 01:44:00');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_log', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_log', 'sai_log');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_log', 'sai_start');

    DELETE FROM `system_text` WHERE id = 'basic_login';
    DELETE FROM `system_text_tag` WHERE id = 'basic_login';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_login', 'deDE', 'Einloggen', 0, 2, '2015-04-21 03:38:29', '2015-04-21 03:38:29');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_login', 'enUS', 'Login', 0, 0, '2015-04-15 18:29:16', '0000-00-00 00:00:00');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_login', 'frFR', 'Connecter', 1, 1, '2015-04-19 20:57:06', '2015-04-19 20:57:06');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_login', 'jaJA', 'ログイン', 0, 0, '2015-04-15 18:41:22', '0000-00-00 00:00:00');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_login', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_login', 'sai_login');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_login', 'sai_start');

    DELETE FROM `system_text` WHERE id = 'basic_logout';
    DELETE FROM `system_text_tag` WHERE id = 'basic_logout';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_logout', 'deDE', 'Ausloggen', 0, 2, '2015-04-17 20:30:25', '2015-04-17 20:30:25');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_logout', 'enUS', 'Logout', 0, 0, '2015-04-15 18:29:16', '0000-00-00 00:00:00');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_logout', 'frFR', 'Déconnecter', 3, 3, '2015-04-20 14:20:59', '2015-04-20 14:20:59');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_logout', 'jaJA', 'ログアウト', 0, 0, '2015-04-15 18:41:22', '0000-00-00 00:00:00');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_logout', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_logout', 'sai_login');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_logout', 'sai_start');

    DELETE FROM `system_text` WHERE id = 'basic_month';
    DELETE FROM `system_text_tag` WHERE id = 'basic_month';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_month', 'deDE', 'Monat', 1, 1, '2015-04-16 23:12:34', '2015-04-16 16:48:51');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_month', 'enUS', 'Month', 2, 1, '2015-04-16 23:12:34', '2015-04-16 23:12:34');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_month', 'frFR', 'Mois', 3, 3, '2015-04-18 04:53:43', '2015-04-18 04:53:43');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_month', 'jaJA', '月', 1, 1, '2015-04-16 23:12:34', '2015-04-16 16:54:57');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_month', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_month', 'sai_start');

    DELETE FROM `system_text` WHERE id = 'basic_name';
    DELETE FROM `system_text_tag` WHERE id = 'basic_name';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_name', 'deDE', 'Name', 0, 0, '2015-04-16 23:15:33', '0000-00-00 00:00:00');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_name', 'enUS', 'Name', 2, 1, '2015-04-16 23:15:33', '2015-04-16 23:15:33');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_name', 'frFR', 'Nom', 3, 3, '2015-04-18 04:54:38', '2015-04-18 04:54:38');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_name', 'jaJA', '計画名前', 0, 0, '2015-04-16 23:15:33', '0000-00-00 00:00:00');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_name', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_name', 'sai_start');

    DELETE FROM `system_text` WHERE id = 'basic_no_tag';
    DELETE FROM `system_text_tag` WHERE id = 'basic_no_tag';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_no_tag', 'deDE', 'Kein Tag', 2, 2, '2015-04-20 01:46:19', '2015-04-20 01:46:19');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_no_tag', 'enUS', 'No Tag', 2, 2, '2015-04-18 13:25:47', '2015-04-18 13:25:47');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_no_tag', 'frFR', 'Pas des Tags', 3, 3, '2015-04-20 18:56:53', '2015-04-20 18:56:53');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_no_tag', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_no_tag', 'sai_text');

    DELETE FROM `system_text` WHERE id = 'basic_password';
    DELETE FROM `system_text_tag` WHERE id = 'basic_password';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_password', 'deDE', 'Passwort', 0, 2, '2015-04-17 20:31:17', '2015-04-17 20:31:17');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_password', 'enUS', 'Password', 0, 0, '2015-04-15 18:29:16', '0000-00-00 00:00:00');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_password', 'frFR', 'Mot de passe', 3, 3, '2015-04-20 16:34:46', '2015-04-20 16:34:46');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_password', 'jaJA', 'パスワード', 0, 0, '2015-04-15 18:41:22', '0000-00-00 00:00:00');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_password', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_password', 'sai_login');

    -- DELETE FROM `system_text` WHERE id = 'basic_password_long';
    -- DELETE FROM `system_text_tag` WHERE id = 'basic_password_long';
    -- INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_password_long', 'deDE', 'Passwort zu lang', 0, 2, '2015-04-18 13:16:18', '2015-04-18 13:16:18');
    -- INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_password_long', 'enUS', 'Password too long', 0, 0, '2015-04-18 13:16:18', '0000-00-00 00:00:00');
    -- INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_password_long', 'frFR', 'Mot de passe trop long!', 3, 3, '2015-04-20 16:28:21', '2015-04-20 16:28:21');
    -- INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_password_long', 'basic');
    -- INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_password_long', 'sai_login');

    DELETE FROM `system_text` WHERE id = 'basic_password_match';
    DELETE FROM `system_text_tag` WHERE id = 'basic_password_match';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_password_match', 'deDE', 'Passwords do not match!', 0, 2, '2015-04-18 13:16:33', '2015-04-18 13:16:33');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_password_match', 'enUS', 'Passwords do not match!', 0, 0, '2015-04-18 13:16:33', '0000-00-00 00:00:00');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_password_match', 'frFR', 'Les mots de passe ne lui correspondent pas!', 3, 3, '2015-04-20 16:20:57', '2015-04-20 16:20:57');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_password_match', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_password_match', 'sai_login');

    DELETE FROM `system_text` WHERE id = 'basic_password_miss';
    DELETE FROM `system_text_tag` WHERE id = 'basic_password_miss';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_password_miss', 'deDE', 'Passwort erforderlich', 0, 2, '2015-04-18 13:16:46', '2015-04-18 13:16:46');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_password_miss', 'enUS', 'Password required', 0, 0, '2015-04-18 13:16:46', '0000-00-00 00:00:00');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_password_miss', 'frFR', 'Mot de passe demandé!', 3, 3, '2015-04-20 16:18:30', '2015-04-20 16:18:30');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_password_miss', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_password_miss', 'sai_login');

    DELETE FROM `system_text` WHERE id = 'basic_password_short';
    DELETE FROM `system_text_tag` WHERE id = 'basic_password_short';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_password_short', 'deDE', 'Passwort zu kurz', 0, 2, '2015-04-18 13:16:58', '2015-04-18 13:16:58');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_password_short', 'enUS', 'Password too short', 0, 0, '2015-04-18 13:16:58', '0000-00-00 00:00:00');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_password_short', 'frFR', 'Mot de passe est trop court!', 3, 3, '2015-04-20 16:24:50', '2015-04-20 16:24:50');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_password_short', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_password_short', 'sai_login');

    DELETE FROM `system_text` WHERE id = 'basic_placeholder_email';
    DELETE FROM `system_text_tag` WHERE id = 'basic_placeholder_email';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_placeholder_email', 'deDE', 'peter@world.org', 0, 0, '2015-04-15 18:29:16', '0000-00-00 00:00:00');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_placeholder_email', 'enUS', 'peter@world.org', 0, 0, '2015-04-15 18:29:16', '0000-00-00 00:00:00');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_placeholder_email', 'esES', 'peter@world.org', 0, 0, '2015-04-15 18:29:16', '0000-00-00 00:00:00');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_placeholder_email', 'frFR', 'peter@world.org', 0, 0, '2015-04-15 18:29:16', '0000-00-00 00:00:00');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_placeholder_email', 'jaJA', 'peter@world.org', 0, 0, '2015-04-15 18:41:22', '0000-00-00 00:00:00');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_placeholder_email', 'trTR', 'peter@world.org', 0, 0, '2015-04-15 18:29:17', '0000-00-00 00:00:00');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_placeholder_email', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_placeholder_email', 'sai_login');

    DELETE FROM `system_text` WHERE id = 'basic_placeholder_password';
    DELETE FROM `system_text_tag` WHERE id = 'basic_placeholder_password';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_placeholder_password', 'deDE', 'geheim23', 0, 2, '2015-04-21 03:39:39', '2015-04-21 03:39:39');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_placeholder_password', 'enUS', 'secret123', 0, 2, '2015-04-20 01:42:30', '2015-04-20 01:42:30');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_placeholder_password', 'jaJA', '丸秘のパスワード', 0, 0, '2015-04-15 18:41:22', '0000-00-00 00:00:00');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_placeholder_password', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_placeholder_password', 'sai_login');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_placeholder_password', 'sai_start');

    DELETE FROM `system_text` WHERE id = 'basic_placeholder_username';
    DELETE FROM `system_text_tag` WHERE id = 'basic_placeholder_username';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_placeholder_username', 'deDE', 'peter / peter@world.org', 0, 0, '2015-04-15 18:29:16', '0000-00-00 00:00:00');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_placeholder_username', 'enUS', 'peter / peter@world.org', 0, 0, '2015-04-15 18:29:16', '0000-00-00 00:00:00');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_placeholder_username', 'esES', 'peter@world.org', 0, 0, '2015-04-15 18:29:16', '0000-00-00 00:00:00');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_placeholder_username', 'frFR', 'peter@world.org', 0, 0, '2015-04-15 18:29:16', '0000-00-00 00:00:00');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_placeholder_username', 'jaJA', 'peter / peter@world.org', 0, 0, '2015-04-15 18:41:22', '0000-00-00 00:00:00');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_placeholder_username', 'trTR', 'peter@world.org', 0, 0, '2015-04-15 18:29:17', '0000-00-00 00:00:00');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_placeholder_username', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_placeholder_username', 'sai_login');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_placeholder_username', 'sai_start');
    
    DELETE FROM `system_text` WHERE id = 'basic_placeholder_search';
    DELETE FROM `system_text_tag` WHERE id = 'basic_placeholder_search';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_placeholder_search', 'deDE', 'Ich suche nach...', 0, 0, '2015-04-15 18:29:16', '0000-00-00 00:00:00');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_placeholder_search', 'enUS', 'I\'m searching for...', 0, 0, '2015-04-15 18:29:16', '0000-00-00 00:00:00');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_placeholder_search', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_placeholder_search', 'sai_todo');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_placeholder_search', 'sai_security');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_placeholder_search', 'sai_log');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_placeholder_search', 'sai_text');

    DELETE FROM `system_text` WHERE id = 'basic_progress';
    DELETE FROM `system_text_tag` WHERE id = 'basic_progress';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_progress', 'deDE', 'Fortschritt', 0, 0, '2015-04-16 23:14:43', '0000-00-00 00:00:00');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_progress', 'enUS', 'Progress', 2, 1, '2015-04-16 23:14:43', '2015-04-16 23:14:43');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_progress', 'frFR', 'Progès', 3, 3, '2015-04-20 14:07:33', '2015-04-20 14:07:33');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_progress', 'jaJA', '進展', 0, 0, '2015-04-16 23:14:43', '0000-00-00 00:00:00');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_progress', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_progress', 'sai_start');

    DELETE FROM `system_text` WHERE id = 'basic_project';
    DELETE FROM `system_text_tag` WHERE id = 'basic_project';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_project', 'deDE', 'Projekt', 0, 0, '2015-04-16 14:06:30', '0000-00-00 00:00:00');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_project', 'enUS', 'Project', 2, 1, '2015-04-16 23:06:03', '2015-04-16 23:06:03');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_project', 'frFR', 'Projet', 3, 3, '2015-04-20 14:07:00', '2015-04-20 14:07:00');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_project', 'jaJA', 'インフォメーション', 0, 0, '2015-04-16 14:06:30', '0000-00-00 00:00:00');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_project', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_project', 'sai_start');

    DELETE FROM `system_text` WHERE id = 'basic_register';
    DELETE FROM `system_text_tag` WHERE id = 'basic_register';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_register', 'deDE', 'Registrieren', 0, 2, '2015-04-17 20:33:14', '2015-04-17 20:33:14');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_register', 'enUS', 'Register', 0, 0, '2015-04-15 18:29:16', '0000-00-00 00:00:00');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_register', 'frFR', 'Enregistrer', 3, 3, '2015-04-20 14:32:22', '2015-04-20 14:32:22');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_register', 'jaJA', 'サインオン', 0, 0, '2015-04-15 18:41:22', '0000-00-00 00:00:00');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_register', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_register', 'sai_login');

    DELETE FROM `system_text` WHERE id = 'basic_rows';
    DELETE FROM `system_text_tag` WHERE id = 'basic_rows';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_rows', 'deDE', 'Zeilen', 2, 2, '2015-04-20 01:44:51', '2015-04-20 01:44:51');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_rows', 'enUS', '<span id="_mce_caret" data-mce-bogus="1">﻿</span>Rows', 2, 2, '2015-04-18 14:42:23', '2015-04-18 14:42:23');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_rows', 'frFR', 'lignes', 3, 3, '2015-04-20 16:33:19', '2015-04-20 16:33:19');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_rows', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_rows', 'sai_log');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_rows', 'sai_todo');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_rows', 'sai_text');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_rows', 'sai_security');

    DELETE FROM `system_text` WHERE id = 'basic_save';
    DELETE FROM `system_text_tag` WHERE id = 'basic_save';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_save', 'deDE', 'Speichern', 2, 2, '2015-04-20 01:46:06', '2015-04-20 01:46:06');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_save', 'enUS', 'Save', 2, 2, '2015-04-18 13:35:09', '2015-04-18 13:35:09');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_save', 'frFR', 'Mémoriser', 3, 3, '2015-04-20 16:29:38', '2015-04-20 16:29:38');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_save', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_save', 'sai_text');

    DELETE FROM `system_text` WHERE id = 'basic_show_all';
    DELETE FROM `system_text_tag` WHERE id = 'basic_show_all';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_show_all', 'deDE', 'Alle anzeigen', 2, 2, '2015-04-20 01:44:40', '2015-04-20 01:44:40');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_show_all', 'enUS', 'Show All', 2, 2, '2015-04-18 13:25:13', '2015-04-18 13:25:13');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_show_all', 'frFR', 'Afficher tout', 3, 3, '2015-04-20 16:32:51', '2015-04-20 16:32:51');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_show_all', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_show_all', 'sai_text');

    DELETE FROM `system_text` WHERE id = 'basic_state_login';
    DELETE FROM `system_text_tag` WHERE id = 'basic_state_login';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_state_login', 'deDE', 'Du bist eingeloggt', 0, 2, '2015-04-17 20:32:08', '2015-04-17 20:32:08');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_state_login', 'enUS', 'You are logged in.', 0, 0, '2015-04-15 18:29:16', '0000-00-00 00:00:00');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_state_login', 'frFR', 'Tu es connecté!', 3, 3, '2015-04-20 14:30:21', '2015-04-20 14:30:21');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_state_login', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_state_login', 'sai_login');

    DELETE FROM `system_text` WHERE id = 'basic_status';
    DELETE FROM `system_text_tag` WHERE id = 'basic_status';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_status', 'deDE', 'Status', 0, 0, '2015-04-16 14:16:32', '0000-00-00 00:00:00');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_status', 'enUS', 'Status', 2, 1, '2015-04-16 23:27:32', '2015-04-16 23:27:32');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_status', 'frFR', 'Statut', 3, 3, '2015-04-20 14:19:07', '2015-04-20 14:19:07');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_status', 'jaJA', 'ステイタス', 0, 0, '2015-04-16 14:16:32', '0000-00-00 00:00:00');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_status', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_status', 'sai_start');

    DELETE FROM `system_text` WHERE id = 'basic_text_login';
    DELETE FROM `system_text_tag` WHERE id = 'basic_text_login';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_text_login', 'deDE', 'Logge Dich in deine Website ein.', 0, 2, '2015-04-17 20:33:54', '2015-04-17 20:33:54');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_text_login', 'enUS', 'Login to your Website.', 0, 0, '2015-04-15 18:29:16', '0000-00-00 00:00:00');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_text_login', 'frFR', 'Connecte sur ton site Web', 3, 3, '2015-04-18 04:52:46', '2015-04-18 04:52:46');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_text_login', 'jaJA', 'ログインする', 0, 0, '2015-04-15 18:41:22', '0000-00-00 00:00:00');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_text_login', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_text_login', 'sai_login');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_text_login', 'sai_start');

    DELETE FROM `system_text` WHERE id = 'basic_text_logout';
    DELETE FROM `system_text_tag` WHERE id = 'basic_text_logout';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_text_logout', 'deDE', 'Logge Dich aus bevor Du gehst!', 0, 1, '2015-04-16 23:24:12', '2015-04-16 23:24:12');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_text_logout', 'enUS', 'Logout before you leave!', 0, 0, '2015-04-15 18:29:16', '0000-00-00 00:00:00');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_text_logout', 'frFR', 'Déconnecter avant partir!', 3, 3, '2015-04-20 14:16:21', '2015-04-20 14:16:21');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_text_logout', 'jaJA', '出て前にログアウトを忘れないでください。', 0, 0, '2015-04-16 14:41:25', '0000-00-00 00:00:00');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_text_logout', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_text_logout', 'sai_start');

    DELETE FROM `system_text` WHERE id = 'basic_text_password_miss';
    DELETE FROM `system_text_tag` WHERE id = 'basic_text_password_miss';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_text_password_miss', 'deDE', 'Can\'t really remember your Password?', 0, 2, '2015-04-17 20:34:38', '2015-04-17 20:34:38');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_text_password_miss', 'enUS', 'Can\'t really remember your Password?', 0, 0, '2015-04-15 18:29:16', '0000-00-00 00:00:00');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_text_password_miss', 'frFR', 'Tu te ne rappelles pas ton mot de passe?', 3, 3, '2015-04-20 16:22:13', '2015-04-20 16:22:13');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_text_password_miss', 'jaJA', 'パスワードを忘れた', 0, 0, '2015-04-15 18:41:22', '0000-00-00 00:00:00');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_text_password_miss', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_text_password_miss', 'sai_login');

    DELETE FROM `system_text` WHERE id = 'basic_text_register';
    DELETE FROM `system_text_tag` WHERE id = 'basic_text_register';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_text_register', 'deDE', 'Registriere einen Account', 0, 3, '2015-04-20 14:33:03', '2015-04-20 14:33:03');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_text_register', 'enUS', 'Register an Account', 0, 0, '2015-04-15 18:29:16', '0000-00-00 00:00:00');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_text_register', 'frFR', 'Enregistrer un compte', 3, 3, '2015-04-20 14:33:42', '2015-04-20 14:33:42');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_text_register', 'jaJA', 'サインオン', 0, 0, '2015-04-15 18:41:22', '0000-00-00 00:00:00');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_text_register', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_text_register', 'sai_login');

    DELETE FROM `system_text` WHERE id = 'basic_today';
    DELETE FROM `system_text_tag` WHERE id = 'basic_today';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_today', 'deDE', 'Heute', 1, 1, '2015-04-16 23:21:33', '2015-04-16 16:48:25');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_today', 'enUS', 'Today', 2, 1, '2015-04-16 23:21:33', '2015-04-16 23:21:33');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_today', 'frFR', 'Aujourd\'hui', 3, 3, '2015-04-18 04:55:23', '2015-04-18 04:55:23');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_today', 'jaJA', '今日', 1, 1, '2015-04-16 23:21:33', '2015-04-16 16:55:58');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_today', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_today', 'sai_start');

    DELETE FROM `system_text` WHERE id = 'basic_todo';
    DELETE FROM `system_text_tag` WHERE id = 'basic_todo';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_todo', 'deDE', 'Todo', 0, 0, '2015-04-16 14:16:32', '0000-00-00 00:00:00');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_todo', 'enUS', 'Todo', 2, 1, '2015-04-16 23:25:06', '2015-04-16 23:25:06');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_todo', 'jaJA', 'ToDoリスト', 2, 2, '2015-04-23 01:47:28', '2015-04-23 01:47:28');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_todo', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_todo', 'sai_start');

    DELETE FROM `system_text` WHERE id = 'basic_URL';
    DELETE FROM `system_text_tag` WHERE id = 'basic_URL';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_URL', 'deDE', 'URL', 0, 2, '2015-04-16 23:17:13', '2015-04-16 20:20:50');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_URL', 'enUS', 'URL', 2, 1, '2015-04-16 23:17:13', '2015-04-16 23:17:13');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_URL', 'jaJA', 'URL', 0, 0, '2015-04-16 23:17:13', '0000-00-00 00:00:00');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_URL', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_URL', 'sai_start');

    DELETE FROM `system_text` WHERE id = 'basic_username';
    DELETE FROM `system_text_tag` WHERE id = 'basic_username';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_username', 'deDE', 'Username', 0, 2, '2015-04-17 20:31:39', '2015-04-17 20:31:39');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_username', 'enUS', 'Username', 0, 0, '2015-04-15 18:29:16', '0000-00-00 00:00:00');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_username', 'frFR', 'Nom d\'usager', 3, 3, '2015-04-20 16:35:03', '2015-04-20 16:35:03');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_username', 'jaJA', '名前', 0, 0, '2015-04-15 18:41:22', '0000-00-00 00:00:00');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_username', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_username', 'sai_login');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_username', 'sai_start');

    DELETE FROM `system_text` WHERE id = 'basic_username_long';
    DELETE FROM `system_text_tag` WHERE id = 'basic_username_long';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_username_long', 'deDE', 'Nutzername ist zu lang', 0, 2, '2015-04-18 13:17:11', '2015-04-18 13:17:11');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_username_long', 'enUS', 'Username is too long', 0, 0, '2015-04-18 13:17:11', '0000-00-00 00:00:00');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_username_long', 'frFR', 'Nom d\'utilisateur trop long!', 3, 3, '2015-04-20 16:26:21', '2015-04-20 16:26:21');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_username_long', 'basic');

    DELETE FROM `system_text` WHERE id = 'basic_username_miss';
    DELETE FROM `system_text_tag` WHERE id = 'basic_username_miss';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_username_miss', 'deDE', 'Nutzername benötigt', 0, 2, '2015-04-21 03:40:25', '2015-04-21 03:40:25');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_username_miss', 'enUS', 'Username required', 0, 0, '2015-04-18 13:17:25', '0000-00-00 00:00:00');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_username_miss', 'frFR', 'Nom d\'utilisateur est nécessaire!', 2, 2, '2015-04-21 03:40:34', '2015-04-21 03:40:34');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_username_miss', 'basic');

    DELETE FROM `system_text` WHERE id = 'basic_username_short';
    DELETE FROM `system_text_tag` WHERE id = 'basic_username_short';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_username_short', 'deDE', 'Nutzername zu kurz', 0, 2, '2015-04-21 03:38:57', '2015-04-21 03:38:57');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_username_short', 'enUS', 'Username is too short', 0, 0, '2015-04-18 13:17:37', '0000-00-00 00:00:00');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_username_short', 'frFR', 'Nom d\'utilisateur trop court!', 2, 2, '2015-04-21 03:39:06', '2015-04-21 03:39:06');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_username_short', 'basic');

    DELETE FROM `system_text` WHERE id = 'basic_users';
    DELETE FROM `system_text_tag` WHERE id = 'basic_users';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_users', 'deDE', 'Nutzer', 1, 1, '2015-04-16 23:26:08', '2015-04-16 16:47:59');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_users', 'enUS', 'Users', 2, 1, '2015-04-16 23:26:08', '2015-04-16 23:26:08');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_users', 'frFR', 'Utilisateurs', 3, 3, '2015-04-20 19:18:29', '2015-04-20 19:18:29');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_users', 'jaJA', '利用者', 1, 1, '2015-04-16 23:26:08', '2015-04-16 17:00:22');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_users', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_users', 'sai_start');

    DELETE FROM `system_text` WHERE id = 'basic_week';
    DELETE FROM `system_text_tag` WHERE id = 'basic_week';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_week', 'deDE', 'Woche', 1, 1, '2015-04-16 23:11:18', '2015-04-16 16:48:36');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_week', 'enUS', 'Week', 2, 1, '2015-04-16 23:11:18', '2015-04-16 23:11:18');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_week', 'frFR', 'Semaine', 3, 3, '2015-04-18 04:53:07', '2015-04-18 04:53:07');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_week', 'jaJA', '週', 1, 1, '2015-04-16 23:11:18', '2015-04-16 16:54:02');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_week', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_week', 'sai_start');
    
    DELETE FROM `system_text` WHERE id = 'basic_refresh';
    DELETE FROM `system_text_tag` WHERE id = 'basic_refresh';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_refresh', 'deDE', 'Aktualisieren', 1, 1, '2015-04-16 23:11:18', '2015-04-16 16:48:36');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_refresh', 'enUS', 'Refresh', 2, 1, '2015-04-16 23:11:18', '2015-04-16 23:11:18');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_refresh', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_refresh', 'sai_log');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_refresh', 'sai_todo');
    
    DELETE FROM `system_text` WHERE id = 'basic_search';
    DELETE FROM `system_text_tag` WHERE id = 'basic_search';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_search', 'deDE', 'Suchen', 1, 1, '2015-04-16 23:11:18', '2015-04-16 16:48:36');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_search', 'enUS', 'Search', 2, 1, '2015-04-16 23:11:18', '2015-04-16 23:11:18');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_search', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_search', 'sai_security');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_search', 'sai_todo');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_search', 'sai_text');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_search', 'sai_log');
    
    DELETE FROM `system_text` WHERE id = 'basic_send_email';
    DELETE FROM `system_text_tag` WHERE id = 'basic_send_email';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_send_email', 'deDE', 'EMail senden', 1, 1, '2015-04-16 23:11:18', '2015-04-16 16:48:36');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_send_email', 'enUS', 'send EMail', 2, 1, '2015-04-16 23:11:18', '2015-04-16 23:11:18');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_send_email', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_send_email', 'sai_security');
    
    DELETE FROM `system_text` WHERE id = 'basic_edit';
    DELETE FROM `system_text_tag` WHERE id = 'basic_edit';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_edit', 'deDE', 'Ändern', 1, 1, '2015-04-16 23:11:18', '2015-04-16 16:48:36');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_edit', 'enUS', 'Edit', 2, 1, '2015-04-16 23:11:18', '2015-04-16 23:11:18');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_edit', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_edit', 'sai_security');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_edit', 'sai_cron');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_edit', 'sai_todo');
    
    DELETE FROM `system_text` WHERE id = 'basic_new_right';
    DELETE FROM `system_text_tag` WHERE id = 'basic_new_right';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_new_right', 'deDE', 'Neues Recht', 1, 1, '2015-04-16 23:11:18', '2015-04-16 16:48:36');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_new_right', 'enUS', 'New Right', 2, 1, '2015-04-16 23:11:18', '2015-04-16 23:11:18');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_new_right', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_new_right', 'sai_security');
    
    DELETE FROM `system_text` WHERE id = 'basic_rename';
    DELETE FROM `system_text_tag` WHERE id = 'basic_rename';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_rename', 'deDE', 'Umbenenen', 1, 1, '2015-04-16 23:11:18', '2015-04-16 16:48:36');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_rename', 'enUS', 'Rename', 2, 1, '2015-04-16 23:11:18', '2015-04-16 23:11:18');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_rename', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_rename', 'sai_files');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_rename', 'sai_security');
    
    DELETE FROM `system_text` WHERE id = 'basic_upload';
    DELETE FROM `system_text_tag` WHERE id = 'basic_upload';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_upload', 'deDE', 'Hochladen', 1, 1, '2015-04-16 23:11:18', '2015-04-16 16:48:36');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_upload', 'enUS', 'Upload', 2, 1, '2015-04-16 23:11:18', '2015-04-16 23:11:18');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_upload', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_upload', 'sai_files');
    
    DELETE FROM `system_text` WHERE id = 'basic_change';
    DELETE FROM `system_text_tag` WHERE id = 'basic_change';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_change', 'deDE', 'Ändern', 1, 1, '2015-04-16 23:11:18', '2015-04-16 16:48:36');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_change', 'enUS', 'Change', 2, 1, '2015-04-16 23:11:18', '2015-04-16 23:11:18');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_change', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_change', 'sai_cron');
    
    DELETE FROM `system_text` WHERE id = 'basic_close_all';
    DELETE FROM `system_text_tag` WHERE id = 'basic_close_all';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_close_all', 'deDE', 'Alle schließen', 1, 1, '2015-04-16 23:11:18', '2015-04-16 16:48:36');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_close_all', 'enUS', 'Close all', 2, 1, '2015-04-16 23:11:18', '2015-04-16 23:11:18');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_close_all', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_close_all', 'sai_todo');
    
    DELETE FROM `system_text` WHERE id = 'basic_git';
    DELETE FROM `system_text_tag` WHERE id = 'basic_git';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_git', 'deDE', 'Git', 1, 1, '2015-04-16 23:11:18', '2015-04-16 16:48:36');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_git', 'enUS', 'Git', 2, 1, '2015-04-16 23:11:18', '2015-04-16 23:11:18');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_git', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_git', 'sai_start');
    
    DELETE FROM `system_text` WHERE id = 'basic_open';
    DELETE FROM `system_text_tag` WHERE id = 'basic_open';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_open', 'deDE', 'Öffnen', 1, 1, '2015-04-16 23:11:18', '2015-04-16 16:48:36');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_open', 'enUS', 'Open', 2, 1, '2015-04-16 23:11:18', '2015-04-16 23:11:18');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_open', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_open', 'sai_todo');
    
    DELETE FROM `system_text` WHERE id = 'basic_assign';
    DELETE FROM `system_text_tag` WHERE id = 'basic_assign';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_assign', 'deDE', 'Mach ich', 1, 1, '2015-04-16 23:11:18', '2015-04-16 16:48:36');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_assign', 'enUS', 'I Do it', 2, 1, '2015-04-16 23:11:18', '2015-04-16 23:11:18');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_assign', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_assign', 'sai_todo');
    
    DELETE FROM `system_text` WHERE id = 'basic_deassign';
    DELETE FROM `system_text_tag` WHERE id = 'basic_deassign';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_deassign', 'deDE', 'Mach ich nicht', 1, 1, '2015-04-16 23:11:18', '2015-04-16 16:48:36');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_deassign', 'enUS', 'I don\'t Do that', 2, 1, '2015-04-16 23:11:18', '2015-04-16 23:11:18');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_deassign', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_deassign', 'sai_todo');
    
    DELETE FROM `system_text` WHERE id = 'basic_mine';
    DELETE FROM `system_text_tag` WHERE id = 'basic_mine';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_mine', 'deDE', 'Meine', 1, 1, '2015-04-16 23:11:18', '2015-04-16 16:48:36');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_mine', 'enUS', 'Mine', 2, 1, '2015-04-16 23:11:18', '2015-04-16 23:11:18');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_mine', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_mine', 'sai_todo');
    
    DELETE FROM `system_text` WHERE id = 'basic_free';
    DELETE FROM `system_text_tag` WHERE id = 'basic_free';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_free', 'deDE', 'Frei', 1, 1, '2015-04-16 23:11:18', '2015-04-16 16:48:36');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_free', 'enUS', 'Free', 2, 1, '2015-04-16 23:11:18', '2015-04-16 23:11:18');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_free', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_free', 'sai_todo');
    
    DELETE FROM `system_text` WHERE id = 'basic_others';
    DELETE FROM `system_text_tag` WHERE id = 'basic_others';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_others', 'deDE', 'Andere', 1, 1, '2015-04-16 23:11:18', '2015-04-16 16:48:36');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_others', 'enUS', 'Others', 2, 1, '2015-04-16 23:11:18', '2015-04-16 23:11:18');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_others', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_others', 'sai_todo');
    
    DELETE FROM `system_text` WHERE id = 'basic_generated';
    DELETE FROM `system_text_tag` WHERE id = 'basic_generated';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_generated', 'deDE', 'Generiert', 1, 1, '2015-04-16 23:11:18', '2015-04-16 16:48:36');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_generated', 'enUS', 'Generated', 2, 1, '2015-04-16 23:11:18', '2015-04-16 23:11:18');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_generated', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_generated', 'sai_todo');
    
    DELETE FROM `system_text` WHERE id = 'basic_user';
    DELETE FROM `system_text_tag` WHERE id = 'basic_user';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_user', 'deDE', 'Nutzer', 1, 1, '2015-04-16 23:11:18', '2015-04-16 16:48:36');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_user', 'enUS', 'User', 2, 1, '2015-04-16 23:11:18', '2015-04-16 23:11:18');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_user', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_user', 'sai_todo');
    
    DELETE FROM `system_text` WHERE id = 'basic_report';
    DELETE FROM `system_text_tag` WHERE id = 'basic_report';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_report', 'deDE', 'Report', 1, 1, '2015-04-16 23:11:18', '2015-04-16 16:48:36');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_report', 'enUS', 'Report', 2, 1, '2015-04-16 23:11:18', '2015-04-16 23:11:18');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_report', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_report', 'sai_todo');
    
    DELETE FROM `system_text` WHERE id = 'basic_priority';
    DELETE FROM `system_text_tag` WHERE id = 'basic_priority';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_priority', 'deDE', 'Priorität', 1, 1, '2015-04-16 23:11:18', '2015-04-16 16:48:36');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_priority', 'enUS', 'Priority', 2, 1, '2015-04-16 23:11:18', '2015-04-16 23:11:18');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_priority', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_priority', 'sai_todo');
    
    DELETE FROM `system_text` WHERE id = 'basic_page';
    DELETE FROM `system_text_tag` WHERE id = 'basic_page';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_page', 'deDE', 'Seite', 1, 1, '2015-04-16 23:11:18', '2015-04-16 16:48:36');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_page', 'enUS', 'Page', 2, 1, '2015-04-16 23:11:18', '2015-04-16 23:11:18');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_page', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_page', 'sai_todo');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_page', 'sai_log');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_page', 'sai_text');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_page', 'sai_security');
    
    DELETE FROM `system_text` WHERE id = 'basic_add_right';
    DELETE FROM `system_text_tag` WHERE id = 'basic_add_right';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_add_right', 'deDE', 'Recht hinzufügen', 1, 1, '2015-04-16 23:11:18', '2015-04-16 16:48:36');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_add_right', 'enUS', 'Add Right', 2, 1, '2015-04-16 23:11:18', '2015-04-16 23:11:18');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_add_right', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_add_right', 'sai_security');

    DELETE FROM `system_text` WHERE id = 'basic_clear';
    DELETE FROM `system_text_tag` WHERE id = 'basic_clear';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_clear', 'deDE', 'Leeren', 1, 1, '2015-04-16 23:11:18', '2015-04-16 16:48:36');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_clear', 'enUS', 'Clear', 2, 1, '2015-04-16 23:11:18', '2015-04-16 23:11:18');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_clear', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_clear', 'sai_cache');

    DELETE FROM `system_text` WHERE id = 'basic_generate';
    DELETE FROM `system_text_tag` WHERE id = 'basic_generate';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_generate', 'deDE', 'Generieren', 1, 1, '2015-04-16 23:11:18', '2015-04-16 16:48:36');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_generate', 'enUS', 'Generate', 2, 1, '2015-04-16 23:11:18', '2015-04-16 23:11:18');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_generate', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_generate', 'sai_docu');

    DELETE FROM `system_text` WHERE id = 'basic_confirm_email';
    DELETE FROM `system_text_tag` WHERE id = 'basic_confirm_email';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_confirm_email', 'deDE', 'EMail bestätigen', 1, 1, '2015-04-16 23:11:18', '2015-04-16 16:48:36');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_confirm_email', 'enUS', 'Confirm EMail', 2, 1, '2015-04-16 23:11:18', '2015-04-16 23:11:18');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_confirm_email', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_confirm_email', 'sai_security');

    DELETE FROM `system_text` WHERE id = 'basic_change_password';
    DELETE FROM `system_text_tag` WHERE id = 'basic_change_password';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_change_password', 'deDE', 'Password ändern', 1, 1, '2015-04-16 23:11:18', '2015-04-16 16:48:36');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_change_password', 'enUS', 'Change Password', 2, 1, '2015-04-16 23:11:18', '2015-04-16 23:11:18');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_change_password', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_change_password', 'sai_security');

    DELETE FROM `system_text` WHERE id = 'basic_reset_password';
    DELETE FROM `system_text_tag` WHERE id = 'basic_reset_password';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_reset_password', 'deDE', 'Password zurücksetzen', 1, 1, '2015-04-16 23:11:18', '2015-04-16 16:48:36');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_reset_password', 'enUS', 'Reset Password', 2, 1, '2015-04-16 23:11:18', '2015-04-16 23:11:18');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_reset_password', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_reset_password', 'sai_security');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_reset_password', 'sai_login');

    DELETE FROM `system_text` WHERE id = 'basic_change_email';
    DELETE FROM `system_text_tag` WHERE id = 'basic_change_email';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_change_email', 'deDE', 'EMail ändern', 1, 1, '2015-04-16 23:11:18', '2015-04-16 16:48:36');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_change_email', 'enUS', 'Change EMail', 2, 1, '2015-04-16 23:11:18', '2015-04-16 23:11:18');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_change_email', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_change_email', 'sai_security');

    DELETE FROM `system_text` WHERE id = 'basic_password_old';
    DELETE FROM `system_text_tag` WHERE id = 'basic_password_old';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_password_old', 'deDE', 'Altes Passwort', 1, 1, '2015-04-16 23:11:18', '2015-04-16 16:48:36');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_password_old', 'enUS', 'Old Password', 2, 1, '2015-04-16 23:11:18', '2015-04-16 23:11:18');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_password_old', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_password_old', 'sai_security');

    DELETE FROM `system_text` WHERE id = 'basic_password_new';
    DELETE FROM `system_text_tag` WHERE id = 'basic_password_new';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_password_new', 'deDE', 'Neues Passwort', 1, 1, '2015-04-16 23:11:18', '2015-04-16 16:48:36');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_password_new', 'enUS', 'New Password', 2, 1, '2015-04-16 23:11:18', '2015-04-16 23:11:18');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_password_new', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_password_new', 'sai_security');

    DELETE FROM `system_text` WHERE id = 'basic_email_new';
    DELETE FROM `system_text_tag` WHERE id = 'basic_email_new';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_email_new', 'deDE', 'Neue Email', 1, 1, '2015-04-16 23:11:18', '2015-04-16 16:48:36');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_email_new', 'enUS', 'New Email', 2, 1, '2015-04-16 23:11:18', '2015-04-16 23:11:18');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_email_new', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_email_new', 'sai_security');

    DELETE FROM `system_text` WHERE id = 'basic_username_new';
    DELETE FROM `system_text_tag` WHERE id = 'basic_username_new';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_username_new', 'deDE', 'Neuer Username', 1, 1, '2015-04-16 23:11:18', '2015-04-16 16:48:36');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('basic_username_new', 'enUS', 'New Username', 2, 1, '2015-04-16 23:11:18', '2015-04-16 23:11:18');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_username_new', 'basic');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('basic_username_new', 'sai_security');

-- SAI
    DELETE FROM `system_text` WHERE id = 'sai_api_title';
    DELETE FROM `system_text_tag` WHERE id = 'sai_api_title';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_api_title', 'deDE', 'System API', 2, 2, '2015-04-17 19:29:25', '2015-04-17 19:29:25');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_api_title', 'enUS', 'System API', 2, 2, '2015-04-17 19:29:25', '2015-04-17 19:29:25');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_api_title', 'frFR', 'System API', 2, 2, '2015-04-17 19:29:25', '2015-04-17 19:29:25');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_api_title', 'esES', 'System API', 2, 2, '2015-04-17 19:29:25', '2015-04-17 19:29:25');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_api_title', 'trTR', 'System API', 2, 2, '2015-04-17 19:29:25', '2015-04-17 19:29:25');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_api_title', 'sai');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_api_title', 'sai_api');

    DELETE FROM `system_text` WHERE id = 'sai_cache_title';
    DELETE FROM `system_text_tag` WHERE id = 'sai_cache_title';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_cache_title', 'deDE', 'System Cache', 2, 2, '2015-04-17 19:30:41', '2015-04-17 19:30:41');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_cache_title', 'enUS', 'System Cache', 2, 2, '2015-04-17 19:30:41', '2015-04-17 19:30:41');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_cache_title', 'sai');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_cache_title', 'sai_cache');

    DELETE FROM `system_text` WHERE id = 'sai_config_title';
    DELETE FROM `system_text_tag` WHERE id = 'sai_config_title';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_config_title', 'deDE', 'System Config', 2, 2, '2015-04-17 19:29:05', '2015-04-17 19:29:05');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_config_title', 'enUS', 'System Config', 2, 2, '2015-04-17 19:29:05', '2015-04-17 19:29:05');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_config_title', 'sai');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_config_title', 'sai_config');

    DELETE FROM `system_text` WHERE id = 'sai_copyright';
    DELETE FROM `system_text_tag` WHERE id = 'sai_copyright';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_copyright', 'deDE', '<a href="${project_url}" target="_blank" data-mce-href="${project_url}">${project}</a> © WebCraft Media 2015', 2, 2, '2015-04-17 19:15:03', '2015-04-17 19:15:03');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_copyright', 'enUS', '<a href="${project_url}" target="_blank" data-mce-href="${project_url}">${project}</a> © WebCraft Media 2015', 2, 2, '2015-04-17 19:15:03', '2015-04-17 19:15:03');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_copyright', 'trTR', '<a href="${project_url}" target="_blank" data-mce-href="${project_url}">${project}</a> © WebCraft Media 2015', 2, 2, '2015-04-17 19:15:03', '2015-04-17 19:15:03');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_copyright', 'frFR', '<a href="${project_url}" target="_blank" data-mce-href="${project_url}">${project}</a> © WebCraft Media 2015', 2, 2, '2015-04-17 19:15:03', '2015-04-17 19:15:03');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_copyright', 'esES', '<a href="${project_url}" target="_blank" data-mce-href="${project_url}">${project}</a> © WebCraft Media 2015', 2, 2, '2015-04-17 19:15:03', '2015-04-17 19:15:03');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_copyright', 'sai');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_copyright', 'sai_default');

    DELETE FROM `system_text` WHERE id = 'sai_cron_title';
    DELETE FROM `system_text_tag` WHERE id = 'sai_cron_title';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_cron_title', 'deDE', 'System Cron', 2, 2, '2015-04-17 19:31:02', '2015-04-17 19:31:02');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_cron_title', 'enUS', 'System Cron', 2, 2, '2015-04-17 19:31:02', '2015-04-17 19:31:02');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_cron_title', 'sai');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_cron_title', 'sai_cron');

    DELETE FROM `system_text` WHERE id = 'sai_docu_title';
    DELETE FROM `system_text_tag` WHERE id = 'sai_docu_title';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_docu_title', 'deDE', 'System - Dokumentation', 2, 2, '2015-04-21 03:42:27', '2015-04-21 03:42:27');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_docu_title', 'enUS', 'System - Documentation', 2, 2, '2015-04-21 03:42:01', '2015-04-21 03:42:01');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_docu_title', 'jaJA', 'System -&nbsp;ドキュメンテーション', 2, 2, '2015-04-21 03:42:09', '2015-04-21 03:42:09');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_docu_title', 'sai');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_docu_title', 'sai_docu');

    DELETE FROM `system_text` WHERE id = 'sai_files_title';
    DELETE FROM `system_text_tag` WHERE id = 'sai_files_title';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_files_title', 'deDE', 'System Dateien', 3, 3, '2015-05-16 13:53:33', '2015-05-16 13:53:33');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_files_title', 'enUS', 'System Files', 2, 1, '2015-04-20 16:18:27', '2015-04-20 16:18:27');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_files_title', 'jaJA', 'System ファイル', 2, 1, '2015-04-20 16:18:27', '2015-04-20 16:18:27');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_files_title', 'frFR', 'System Fichiers', 3, 3, '2015-04-20 19:15:58', '2015-04-20 19:15:58');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_files_title', 'sai');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_files_title', 'sai_files');

    DELETE FROM `system_text` WHERE id = 'sai_files_title_warning';
    DELETE FROM `system_text_tag` WHERE id = 'sai_files_title_warning';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_files_title_warning', 'deDE', 'Bitte verkleinern Sie Bilder bevor Sie diese auf Ihrer Seite einbinden!', 3, 3, '2015-05-16 13:53:33', '2015-05-16 13:53:33');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_files_title_warning', 'enUS', 'Please minify pictures before you embed them in your page.', 2, 1, '2015-04-20 16:18:27', '2015-04-20 16:18:27');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_files_title_warning', 'sai');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_files_title_warning', 'sai_files');

    DELETE FROM `system_text` WHERE id = 'sai_log_latest_entries';
    DELETE FROM `system_text_tag` WHERE id = 'sai_log_latest_entries';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_log_latest_entries', 'deDE', 'letzten Log Einträge', 0, 0, '2015-04-16 23:26:52', '0000-00-00 00:00:00');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_log_latest_entries', 'enUS', 'latest log entries', 2, 1, '2015-04-16 23:31:20', '2015-04-16 23:31:20');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_log_latest_entries', 'frFR', 'Entrées récammentes', 3, 3, '2015-04-20 16:37:57', '2015-04-20 16:37:57');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_log_latest_entries', 'sai');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_log_latest_entries', 'sai_start');

    DELETE FROM `system_text` WHERE id = 'sai_log_page_value';
    DELETE FROM `system_text_tag` WHERE id = 'sai_log_page_value';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_log_page_value', 'deDE', 'SW', 1, 2, '2015-04-16 23:22:39', '2015-04-16 20:21:29');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_log_page_value', 'enUS', 'PV', 2, 2, '2015-04-21 03:36:14', '2015-04-21 03:36:14');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_log_page_value', 'sai');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_log_page_value', 'sai_start');

    DELETE FROM `system_text` WHERE id = 'sai_log_title';
    DELETE FROM `system_text_tag` WHERE id = 'sai_log_title';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_log_title', 'deDE', 'System Protokoll', 2, 2, '2015-04-23 01:51:28', '2015-04-23 01:51:28');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_log_title', 'enUS', 'System Log', 2, 2, '2015-04-17 19:28:09', '2015-04-17 19:28:09');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_log_title', 'jaJA', 'System&nbsp;報告', 2, 2, '2015-04-23 01:45:24', '2015-04-23 01:45:24');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_log_title', 'sai');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_log_title', 'sai_log');

    DELETE FROM `system_text` WHERE id = 'sai_menu_api';
    DELETE FROM `system_text_tag` WHERE id = 'sai_menu_api';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_api', 'deDE', 'API', 1, 1, '2015-04-19 20:48:44', '2015-04-19 20:48:44');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_api', 'enUS', 'API', 2, 2, '2015-04-17 19:17:28', '2015-04-17 19:17:28');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_api', 'frFR', 'API', 3, 3, '2015-04-20 19:11:39', '2015-04-20 19:11:39');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_api', 'trTR', 'API', 3, 3, '2015-04-20 19:11:39', '2015-04-20 19:11:39');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_api', 'esES', 'API', 3, 3, '2015-04-20 19:11:39', '2015-04-20 19:11:39');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_api', 'jaJA', 'エーピーアイ', 1, 1, '2015-04-19 21:02:19', '2015-04-19 21:02:19');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_menu_api', 'sai');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_menu_api', 'sai_default');

    DELETE FROM `system_text` WHERE id = 'sai_menu_cache';
    DELETE FROM `system_text_tag` WHERE id = 'sai_menu_cache';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_cache', 'deDE', 'Cache', 2, 2, '2015-04-17 19:18:07', '2015-04-17 19:18:07');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_cache', 'enUS', 'Cache', 2, 2, '2015-04-17 19:18:07', '2015-04-17 19:18:07');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_cache', 'frFR', 'Cache', 3, 3, '2015-04-20 19:14:00', '2015-04-20 19:14:00');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_cache', 'esES', 'Cache', 3, 3, '2015-04-20 19:14:00', '2015-04-20 19:14:00');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_cache', 'trTR', 'Cache', 3, 3, '2015-04-20 19:14:00', '2015-04-20 19:14:00');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_cache', 'jaJA', 'キャッシュ', 1, 1, '2015-04-19 21:13:51', '2015-04-19 21:13:51');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_menu_cache', 'sai');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_menu_cache', 'sai_default');

    DELETE FROM `system_text` WHERE id = 'sai_menu_config';
    DELETE FROM `system_text_tag` WHERE id = 'sai_menu_config';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_config', 'deDE', 'Konfiguration', 1, 1, '2015-04-19 20:45:36', '2015-04-19 20:45:36');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_config', 'enUS', 'Config', 2, 2, '2015-04-17 19:17:06', '2015-04-17 19:17:06');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_config', 'frFR', 'Config', 3, 3, '2015-04-20 19:10:18', '2015-04-20 19:10:18');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_config', 'jaJA', 'コンフィギュレーション', 1, 1, '2015-04-19 20:46:12', '2015-04-19 20:46:12');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_menu_config', 'sai');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_menu_config', 'sai_default');

    DELETE FROM `system_text` WHERE id = 'sai_menu_cron';
    DELETE FROM `system_text_tag` WHERE id = 'sai_menu_cron';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_cron', 'deDE', 'Cron', 1, 1, '2015-04-19 21:17:24', '2015-04-19 21:17:24');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_cron', 'enUS', 'Cron', 2, 2, '2015-04-17 19:18:22', '2015-04-17 19:18:22');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_cron', 'esES', 'Cron', 2, 2, '2015-04-17 19:18:22', '2015-04-17 19:18:22');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_cron', 'trTR', 'Cron', 2, 2, '2015-04-17 19:18:22', '2015-04-17 19:18:22');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_cron', 'frFR', 'Cron', 2, 2, '2015-04-17 19:18:22', '2015-04-17 19:18:22');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_cron', 'jaJA', 'スケジューラ', 1, 1, '2015-04-19 21:17:04', '2015-04-19 21:17:04');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_menu_cron', 'sai');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_menu_cron', 'sai_default');

    DELETE FROM `system_text` WHERE id = 'sai_menu_docu';
    DELETE FROM `system_text_tag` WHERE id = 'sai_menu_docu';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_docu', 'deDE', 'Docu', 2, 2, '2015-04-17 19:18:38', '2015-04-17 19:18:38');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_docu', 'enUS', 'Docu', 2, 2, '2015-04-17 19:18:38', '2015-04-17 19:18:38');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_docu', 'frFR', 'Docu', 3, 3, '2015-04-20 19:11:20', '2015-04-20 19:11:20');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_docu', 'esES', 'Docu', 3, 3, '2015-04-20 19:11:20', '2015-04-20 19:11:20');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_docu', 'jaJA', 'ドキュメンテーション', 1, 1, '2015-04-19 21:00:25', '2015-04-19 21:00:25');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_menu_docu', 'sai');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_menu_docu', 'sai_default');

    DELETE FROM `system_text` WHERE id = 'sai_menu_files';
    DELETE FROM `system_text_tag` WHERE id = 'sai_menu_files';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_files', 'deDE', 'Dateien', 1, 1, '2015-04-19 20:54:12', '2015-04-19 20:54:12');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_files', 'enUS', 'Files', 2, 2, '2015-04-17 19:17:53', '2015-04-17 19:17:53');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_files', 'frFR', 'Fichiers', 3, 3, '2015-04-20 19:09:23', '2015-04-20 19:09:23');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_files', 'jaJA', 'ファイル', 1, 1, '2015-04-19 20:53:58', '2015-04-19 20:53:58');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_menu_files', 'sai');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_menu_files', 'sai_default');

    DELETE FROM `system_text` WHERE id = 'sai_menu_git';
    DELETE FROM `system_text_tag` WHERE id = 'sai_menu_git';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_git', 'deDE', 'Git', 2, 2, '2015-05-19 00:44:29', '2015-05-19 00:44:29');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_git', 'enUS', 'Git', 2, 2, '2015-05-19 00:44:20', '2015-05-19 00:44:20');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_git', 'frFR', 'Git', 2, 2, '2015-05-19 00:44:20', '2015-05-19 00:44:20');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_git', 'trTR', 'Git', 2, 2, '2015-05-19 00:44:20', '2015-05-19 00:44:20');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_git', 'esES', 'Git', 2, 2, '2015-05-19 00:44:20', '2015-05-19 00:44:20');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_menu_git', 'sai');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_menu_git', 'sai_default');

    DELETE FROM `system_text` WHERE id = 'sai_menu_log';
    DELETE FROM `system_text_tag` WHERE id = 'sai_menu_log';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_log', 'deDE', 'Protokoll', 1, 1, '2015-04-19 20:34:08', '2015-04-19 20:34:08');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_log', 'enUS', 'Log', 2, 2, '2015-04-17 19:16:07', '2015-04-17 19:16:07');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_log', 'frFR', 'Log', 3, 3, '2015-04-20 19:05:30', '2015-04-20 19:05:30');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_log', 'jaJA', '報告', 1, 1, '2015-04-19 20:33:52', '2015-04-19 20:33:52');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_menu_log', 'sai');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_menu_log', 'sai_default');

    DELETE FROM `system_text` WHERE id = 'sai_menu_login';
    DELETE FROM `system_text_tag` WHERE id = 'sai_menu_login';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_login', 'deDE', 'Login', 2, 2, '2015-04-17 19:19:03', '2015-04-17 19:19:03');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_login', 'enUS', 'Login', 2, 2, '2015-04-17 19:19:03', '2015-04-17 19:19:03');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_login', 'frFR', 'Connecter', 3, 3, '2015-04-20 19:10:51', '2015-04-20 19:10:51');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_login', 'jaJA', 'ログイン', 1, 1, '2015-04-19 20:58:09', '2015-04-19 20:58:09');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_menu_login', 'sai');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_menu_login', 'sai_default');

    DELETE FROM `system_text` WHERE id = 'sai_menu_logout';
    DELETE FROM `system_text_tag` WHERE id = 'sai_menu_logout';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_logout', 'deDE', 'Ausloggen', 2, 2, '2015-04-17 20:29:13', '2015-04-17 20:29:13');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_logout', 'enUS', 'Logout', 2, 2, '2015-04-17 19:18:52', '2015-04-17 19:18:52');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_logout', 'frFR', 'Deconnecter', 3, 3, '2015-04-20 16:38:49', '2015-04-20 16:38:49');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_logout', 'jaJA', 'ログアウト', 2, 2, '2015-04-17 20:29:05', '2015-04-17 20:29:05');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_menu_logout', 'sai');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_menu_logout', 'sai_default');

    DELETE FROM `system_text` WHERE id = 'sai_menu_mod';
    DELETE FROM `system_text_tag` WHERE id = 'sai_menu_mod';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_mod', 'deDE', 'Plug-in', 1, 1, '2015-04-19 20:43:36', '2015-04-19 20:43:36');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_mod', 'enUS', 'Mod', 2, 2, '2015-04-17 19:16:41', '2015-04-17 19:16:41');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_mod', 'jaJA', 'プラグイン', 1, 1, '2015-04-19 20:43:08', '2015-04-19 20:43:08');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_menu_mod', 'sai');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_menu_mod', 'sai_default');

    DELETE FROM `system_text` WHERE id = 'sai_menu_page';
    DELETE FROM `system_text_tag` WHERE id = 'sai_menu_page';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_page', 'deDE', 'Seite', 1, 1, '2015-04-19 20:51:17', '2015-04-19 20:51:17');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_page', 'enUS', 'Page', 2, 2, '2015-04-17 19:17:41', '2015-04-17 19:17:41');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_page', 'frFR', 'Page', 3, 3, '2015-04-20 19:08:59', '2015-04-20 19:08:59');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_page', 'jaJA', '組織', 1, 1, '2015-04-19 20:50:55', '2015-04-19 20:50:55');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_menu_page', 'sai');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_menu_page', 'sai_default');

    DELETE FROM `system_text` WHERE id = 'sai_menu_security';
    DELETE FROM `system_text_tag` WHERE id = 'sai_menu_security';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_security', 'deDE', 'Benutzerverwaltung', 1, 1, '2015-04-19 20:39:48', '2015-04-19 20:39:48');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_security', 'enUS', 'Security', 2, 2, '2015-04-17 19:16:21', '2015-04-17 19:16:21');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_security', 'frFR', 'Sécurité', 3, 3, '2015-04-20 20:35:24', '2015-04-20 20:35:24');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_security', 'jaJA', '利用者経営', 1, 1, '2015-04-19 20:39:09', '2015-04-19 20:39:09');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_menu_security', 'sai');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_menu_security', 'sai_default');

    DELETE FROM `system_text` WHERE id = 'sai_menu_start';
    DELETE FROM `system_text_tag` WHERE id = 'sai_menu_start';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_start', 'deDE', 'Slingit - Admin Bereich', 1, 1, '2015-04-19 21:12:46', '2015-04-19 21:12:46');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_start', 'enUS', 'Slingit - Admin area', 2, 1, '2015-04-19 21:11:58', '2015-04-19 21:11:58');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_start', 'frFR', 'Slingit - Domaine d\'administration', 3, 3, '2015-04-20 19:13:28', '2015-04-20 19:13:28');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_start', 'jaJA', 'Slingit - アドミンーエリア', 1, 1, '2015-04-19 21:12:10', '2015-04-19 21:12:10');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_menu_start', 'sai');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_menu_start', 'sai_default');

    DELETE FROM `system_text` WHERE id = 'sai_menu_text';
    DELETE FROM `system_text_tag` WHERE id = 'sai_menu_text';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_text', 'deDE', 'Text', 1, 1, '2015-04-19 20:56:09', '2015-04-19 20:56:09');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_text', 'enUS', 'Text', 2, 2, '2015-04-17 19:19:20', '2015-04-17 19:19:20');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_text', 'frFR', 'Texte', 3, 3, '2015-04-20 19:09:48', '2015-04-20 19:09:48');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_text', 'jaJA', 'テクスト', 1, 1, '2015-04-19 20:55:54', '2015-04-19 20:55:54');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_menu_text', 'sai');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_menu_text', 'sai_default');

    DELETE FROM `system_text` WHERE id = 'sai_menu_todo';
    DELETE FROM `system_text_tag` WHERE id = 'sai_menu_todo';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_todo', 'deDE', 'To-do', 1, 2, '2015-04-20 01:39:54', '2015-04-20 01:39:54');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_todo', 'enUS', 'ToDo', 2, 2, '2015-04-17 19:19:37', '2015-04-17 19:19:37');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_todo', 'frFR', 'ToDo', 2, 2, '2015-04-17 19:19:37', '2015-04-17 19:19:37');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_todo', 'trTR', 'ToDo', 2, 2, '2015-04-17 19:19:37', '2015-04-17 19:19:37');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_todo', 'esES', 'ToDo', 2, 2, '2015-04-17 19:19:37', '2015-04-17 19:19:37');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_menu_todo', 'jaJA', 'ToDoリスト', 1, 1, '2015-04-19 21:05:14', '2015-04-19 21:05:14');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_menu_todo', 'sai');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_menu_todo', 'sai_default');

    DELETE FROM `system_text` WHERE id = 'sai_mod_login_text';
    DELETE FROM `system_text_tag` WHERE id = 'sai_mod_login_text';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_mod_login_text', 'deDE', 'Für Entwicklerzugriff bitte einloggen (falls Sie Entwickler sind).', 0, 2, '2015-04-17 20:34:48', '2015-04-17 20:34:48');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_mod_login_text', 'enUS', 'Please login for developer access (if you are a developer).', 0, 0, '2015-04-16 20:27:32', '0000-00-00 00:00:00');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_mod_login_text', 'frFR', 'Connectez pour accès de développeur (si vous êtes un développeur).', 0, 0, '2015-04-16 20:27:32', '0000-00-00 00:00:00');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_mod_login_text', 'sai');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_mod_login_text', 'sai_login');

    DELETE FROM `system_text` WHERE id = 'sai_mod_title';
    DELETE FROM `system_text_tag` WHERE id = 'sai_mod_title';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_mod_title', 'deDE', 'System Plugins', 2, 2, '2015-04-17 19:28:45', '2015-04-17 19:28:45');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_mod_title', 'enUS', 'System Mods', 2, 2, '2015-04-17 19:28:45', '2015-04-17 19:28:45');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_mod_title', 'sai');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_mod_title', 'sai_mod');

    DELETE FROM `system_text` WHERE id = 'sai_page_title';
    DELETE FROM `system_text_tag` WHERE id = 'sai_page_title';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_page_title', 'deDE', 'System Page', 2, 2, '2015-04-17 19:29:45', '2015-04-17 19:29:45');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_page_title', 'enUS', 'System Page', 2, 2, '2015-04-17 19:29:45', '2015-04-17 19:29:45');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_page_title', 'sai');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_page_title', 'sai_page');

    DELETE FROM `system_text` WHERE id = 'sai_security_title';
    DELETE FROM `system_text_tag` WHERE id = 'sai_security_title';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_security_title', 'deDE', 'System Sicherheit', 2, 2, '2015-04-17 19:28:25', '2015-04-17 19:28:25');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_security_title', 'enUS', 'System Security', 2, 2, '2015-04-17 19:28:25', '2015-04-17 19:28:25');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_security_title', 'frFR', 'System Sécurité', 3, 3, '2015-04-20 19:17:16', '2015-04-20 19:17:16');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_security_title', 'sai');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_security_title', 'sai_security');

    DELETE FROM `system_text` WHERE id = 'sai_start_welcome';
    DELETE FROM `system_text_tag` WHERE id = 'sai_start_welcome';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_start_welcome', 'deDE', 'Willkommen im SYSTEM Admin Interface - kurz SAI', 0, 0, '2015-04-16 22:59:29', '0000-00-00 00:00:00');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_start_welcome', 'enUS', '<p>Welcome to the SYSTEM Admin Interface - short SAI.</p>', 0, 1, '2015-04-16 22:59:29', '2015-04-16 22:59:29');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_start_welcome', 'frFR', 'Accueillir en System Admin Interface - court: SAI.', 3, 3, '2015-04-20 16:40:27', '2015-04-20 16:40:27');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_start_welcome', 'jaJA', '<p>SYSTEM-Admin-Interface、SAIて言う、へようこそ。</p>', 1, 2, '2015-04-16 22:59:29', '2015-04-16 19:16:02');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_start_welcome', 'sai');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_start_welcome', 'sai_start');

    DELETE FROM `system_text` WHERE id = 'sai_start_welcome_description';
    DELETE FROM `system_text_tag` WHERE id = 'sai_start_welcome_description';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_start_welcome_description', 'deDE', 'Hier erhalten Sie eine Übersicht über Funktionen und Statistiken ihres Web-Projekts', 0, 0, '2015-04-16 22:56:37', '0000-00-00 00:00:00');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_start_welcome_description', 'enUS', 'From here you can control and manage your Website.', 0, 0, '2015-04-16 22:56:37', '0000-00-00 00:00:00');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_start_welcome_description', 'frFR', 'D\'ici tu peux contrôler ton site Web.', 3, 3, '2015-04-20 16:41:46', '2015-04-20 16:41:46');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_start_welcome_description', 'jaJA', '<p>SAIはあなたにプロジェクトのコントロールを挙げます。見渡しは下です。</p>', 1, 1, '2015-04-16 22:56:37', '2015-04-16 22:56:37');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_start_welcome_description', 'sai');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_start_welcome_description', 'sai_start');

    DELETE FROM `system_text` WHERE id = 'sai_text_title';
    DELETE FROM `system_text_tag` WHERE id = 'sai_text_title';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_text_title', 'deDE', 'System Text', 2, 2, '2015-04-23 02:02:03', '2015-04-23 02:02:03');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_text_title', 'enUS', 'System Text', 2, 2, '2015-04-17 19:30:06', '2015-04-17 19:30:06');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_text_title', 'frFR', 'System Texte', 3, 3, '2015-04-20 19:17:35', '2015-04-20 19:17:35');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_text_title', 'sai');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_text_title', 'sai_text');

    DELETE FROM `system_text` WHERE id = 'sai_title';
    DELETE FROM `system_text_tag` WHERE id = 'sai_title';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_title', 'deDE', '${project} - Admin Bereich', 1, 1, '2015-04-19 21:10:58', '2015-04-19 21:10:58');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_title', 'enUS', '${project} - Admin area', 2, 1, '2015-04-19 21:09:54', '2015-04-19 21:09:54');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_title', 'frFR', '${project} - Domaine d\'administration', 3, 3, '2015-04-20 19:12:40', '2015-04-20 19:12:40');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_title', 'jaJA', '${project} - アドミンーエリア', 1, 1, '2015-04-19 21:09:28', '2015-04-19 21:09:28');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_title', 'sai');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_title', 'sai_default');

    DELETE FROM `system_text` WHERE id = 'sai_todo_title';
    DELETE FROM `system_text_tag` WHERE id = 'sai_todo_title';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_todo_title', 'deDE', 'System ToDo', 2, 2, '2015-04-23 01:53:37', '2015-04-23 01:53:37');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_todo_title', 'enUS', 'System ToDo', 2, 2, '2015-04-17 19:22:57', '2015-04-17 19:22:57');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_todo_title', 'frFR', 'System ToDo', 2, 2, '2015-04-17 19:22:57', '2015-04-17 19:22:57');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_todo_title', 'esES', 'System ToDo', 2, 2, '2015-04-17 19:22:57', '2015-04-17 19:22:57');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_todo_title', 'trTR', 'System ToDo', 2, 2, '2015-04-17 19:22:57', '2015-04-17 19:22:57');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_todo_title', 'sai');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_todo_title', 'sai_todo');

    DELETE FROM `system_text` WHERE id = 'sai_git_title';
    DELETE FROM `system_text_tag` WHERE id = 'sai_git_title';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_git_title', 'deDE', 'System Git', 2, 2, '2015-04-23 01:53:37', '2015-04-23 01:53:37');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_git_title', 'enUS', 'System Git', 2, 2, '2015-04-17 19:22:57', '2015-04-17 19:22:57');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_git_title', 'frFR', 'System Git', 2, 2, '2015-04-17 19:22:57', '2015-04-17 19:22:57');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_git_title', 'esES', 'System Git', 2, 2, '2015-04-17 19:22:57', '2015-04-17 19:22:57');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('sai_git_title', 'trTR', 'System Git', 2, 2, '2015-04-17 19:22:57', '2015-04-17 19:22:57');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_git_title', 'sai');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('sai_git_title', 'sai_git');

-- Table

    DELETE FROM `system_text` WHERE id = 'table_author';
    DELETE FROM `system_text_tag` WHERE id = 'table_author';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_author', 'deDE', 'Autor', 2, 2, '2015-04-23 02:00:03', '2015-04-23 02:00:03');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_author', 'enUS', 'Author', 2, 2, '2015-04-18 13:36:35', '2015-04-18 13:36:35');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_author', 'frFR', 'Auteur', 3, 3, '2015-04-20 18:59:40', '2015-04-20 18:59:40');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_author', 'sai_text');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_author', 'sai_todo');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_author', 'table');

    DELETE FROM `system_text` WHERE id = 'table_author_edit';
    DELETE FROM `system_text_tag` WHERE id = 'table_author_edit';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_author_edit', 'deDE', 'Editor', 2, 2, '2015-04-21 03:43:51', '2015-04-21 03:43:51');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_author_edit', 'enUS', 'Editor', 2, 2, '2015-04-21 03:43:34', '2015-04-21 03:43:34');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_author_edit', 'frFR', 'Auteur du traitement', 2, 2, '2015-04-21 03:44:05', '2015-04-21 03:44:05');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_author_edit', 'sai_text');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_author_edit', 'table');

    DELETE FROM `system_text` WHERE id = 'table_class';
    DELETE FROM `system_text_tag` WHERE id = 'table_class';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_class', 'deDE', 'Klasse', 2, 2, '2015-04-23 01:58:51', '2015-04-23 01:58:51');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_class', 'enUS', 'Class', 2, 2, '2015-04-18 14:42:56', '2015-04-18 14:42:56');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_class', 'sai_log');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_class', 'sai_todo');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_class', 'sai_mod');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_class', 'sai_security');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_class', 'table');

    DELETE FROM `system_text` WHERE id = 'table_code';
    DELETE FROM `system_text_tag` WHERE id = 'table_code';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_code', 'deDE', 'Code', 2, 2, '2015-04-23 01:55:39', '2015-04-23 01:55:39');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_code', 'enUS', 'Code', 2, 2, '2015-04-18 13:50:05', '2015-04-18 13:50:05');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_code', 'sai_log');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_code', 'table');
    
    DELETE FROM `system_text` WHERE id = 'table_count';
    DELETE FROM `system_text_tag` WHERE id = 'table_count';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_count', 'deDE', '#Anzahl', 2, 2, '2015-04-18 14:43:20', '2015-04-18 14:43:20');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_count', 'enUS', '#Count', 2, 2, '2015-04-18 14:43:20', '2015-04-18 14:43:20');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_count', 'sai_todo');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_count', 'table');

    DELETE FROM `system_text` WHERE id = 'table_file';
    DELETE FROM `system_text_tag` WHERE id = 'table_file';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_file', 'deDE', 'Datei', 2, 2, '2015-04-18 14:43:20', '2015-04-18 14:43:20');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_file', 'enUS', 'File', 2, 2, '2015-04-18 14:43:20', '2015-04-18 14:43:20');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_file', 'frFR', 'Fichier', 3, 3, '2015-04-20 19:03:04', '2015-04-20 19:03:04');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_file', 'sai_log');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_file', 'sai_todo');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_file', 'sai_security');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_file', 'table');

    DELETE FROM `system_text` WHERE id = 'table_http_referer';
    DELETE FROM `system_text_tag` WHERE id = 'table_http_referer';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_http_referer', 'deDE', 'HTTP Referer', 2, 2, '2015-04-18 13:54:18', '2015-04-18 13:54:18');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_http_referer', 'enUS', 'HTTP Referer', 2, 2, '2015-04-18 13:54:18', '2015-04-18 13:54:18');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_http_referer', 'sai_log');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_http_referer', 'sai_todo');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_http_referer', 'table');

    DELETE FROM `system_text` WHERE id = 'table_http_user_agent';
    DELETE FROM `system_text_tag` WHERE id = 'table_http_user_agent';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_http_user_agent', 'deDE', 'HTTP User Agent', 2, 2, '2015-04-18 13:54:48', '2015-04-18 13:54:48');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_http_user_agent', 'enUS', 'HTTP User Agent', 2, 2, '2015-04-18 13:54:48', '2015-04-18 13:54:48');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_http_user_agent', 'sai_log');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_http_user_agent', 'sai_todo');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_http_user_agent', 'table');

    DELETE FROM `system_text` WHERE id = 'table_id';
    DELETE FROM `system_text_tag` WHERE id = 'table_id';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_id', 'deDE', 'ID', 2, 2, '2015-04-23 01:54:42', '2015-04-23 01:54:42');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_id', 'enUS', 'ID', 2, 2, '2015-04-18 13:49:38', '2015-04-18 13:49:38');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_id', 'sai_log');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_id', 'sai_todo');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_id', 'sai_text');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_id', 'sai_security');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_id', 'table');

    DELETE FROM `system_text` WHERE id = 'table_ip';
    DELETE FROM `system_text_tag` WHERE id = 'table_ip';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_ip', 'deDE', 'IP', 2, 2, '2015-04-23 01:59:06', '2015-04-23 01:59:06');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_ip', 'enUS', 'IP', 2, 2, '2015-04-18 14:43:51', '2015-04-18 14:43:51');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_ip', 'sai_log');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_ip', 'sai_todo');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_ip', 'sai_security');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_ip', 'table');

    DELETE FROM `system_text` WHERE id = 'table_lang';
    DELETE FROM `system_text_tag` WHERE id = 'table_lang';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_lang', 'deDE', 'Sprache', 2, 2, '2015-04-23 01:55:09', '2015-04-23 01:55:09');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_lang', 'enUS', 'Language', 2, 2, '2015-04-18 13:35:57', '2015-04-18 13:35:57');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_lang', 'frFR', 'Langue', 3, 3, '2015-04-20 18:56:16', '2015-04-20 18:56:16');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_lang', 'sai_text');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_lang', 'table');

    DELETE FROM `system_text` WHERE id = 'table_line';
    DELETE FROM `system_text_tag` WHERE id = 'table_line';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_line', 'deDE', 'Zeile', 2, 2, '2015-04-18 14:43:31', '2015-04-18 14:43:31');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_line', 'enUS', 'Line', 2, 2, '2015-04-18 14:43:31', '2015-04-18 14:43:31');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_line', 'frFR', 'Ligne', 3, 3, '2015-04-20 19:03:28', '2015-04-20 19:03:28');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_line', 'sai_log');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_line', 'sai_todo');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_line', 'sai_security');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_line', 'table');

    DELETE FROM `system_text` WHERE id = 'table_message';
    DELETE FROM `system_text_tag` WHERE id = 'table_message';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_message', 'deDE', 'Nachricht', 2, 2, '2015-04-23 01:57:28', '2015-04-23 01:57:28');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_message', 'enUS', 'Message', 2, 2, '2015-04-18 14:43:09', '2015-04-18 14:43:09');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_message', 'sai_log');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_message', 'sai_todo');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_message', 'sai_security');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_message', 'table');

    DELETE FROM `system_text` WHERE id = 'table_post';
    DELETE FROM `system_text_tag` WHERE id = 'table_post';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_post', 'deDE', 'POST', 2, 2, '2015-04-18 13:53:55', '2015-04-18 13:53:55');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_post', 'enUS', 'POST', 2, 2, '2015-04-18 13:53:55', '2015-04-18 13:53:55');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_post', 'sai_log');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_post', 'table');

    DELETE FROM `system_text` WHERE id = 'table_property';
    DELETE FROM `system_text_tag` WHERE id = 'table_property';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_property', 'deDE', 'Eigenschaft', 2, 2, '2015-04-18 13:56:35', '2015-04-18 13:56:35');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_property', 'enUS', 'Property', 2, 2, '2015-04-18 13:56:35', '2015-04-18 13:56:35');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_property', 'sai_log');
	 INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_property', 'sai_todo');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_property', 'table');

    DELETE FROM `system_text` WHERE id = 'table_querytime';
    DELETE FROM `system_text_tag` WHERE id = 'table_querytime';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_querytime', 'deDE', 'Antwortzeit', 2, 2, '2015-04-18 14:44:18', '2015-04-18 14:44:18');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_querytime', 'enUS', 'Querytime', 2, 2, '2015-04-18 14:44:18', '2015-04-18 14:44:18');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_querytime', 'sai_log');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_querytime', 'sai_todo');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_querytime', 'sai_security');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_querytime', 'table');

    DELETE FROM `system_text` WHERE id = 'table_request_uri';
    DELETE FROM `system_text_tag` WHERE id = 'table_request_uri';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_request_uri', 'deDE', 'Request URI', 2, 2, '2015-04-18 13:53:18', '2015-04-18 13:53:18');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_request_uri', 'enUS', 'Request URI', 2, 2, '2015-04-18 13:53:18', '2015-04-18 13:53:18');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_request_uri', 'sai_log');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_request_uri', 'table');

    DELETE FROM `system_text` WHERE id = 'table_server_name';
    DELETE FROM `system_text_tag` WHERE id = 'table_server_name';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_server_name', 'deDE', 'Server Name', 2, 2, '2015-04-18 13:52:35', '2015-04-18 13:52:35');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_server_name', 'enUS', 'Server Name', 2, 2, '2015-04-18 13:52:35', '2015-04-18 13:52:35');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_server_name', 'frFR', 'Nom du serveur', 3, 3, '2015-04-20 19:00:09', '2015-04-20 19:00:09');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_server_name', 'sai_log');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_server_name', 'table');

    DELETE FROM `system_text` WHERE id = 'table_server_port';
    DELETE FROM `system_text_tag` WHERE id = 'table_server_port';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_server_port', 'deDE', 'Server Port', 2, 2, '2015-04-18 13:52:55', '2015-04-18 13:52:55');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_server_port', 'enUS', 'Server Port', 2, 2, '2015-04-18 13:52:55', '2015-04-18 13:52:55');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_server_port', 'frFR', 'Port du serveur', 3, 3, '2015-04-20 19:08:14', '2015-04-20 19:08:14');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_server_port', 'sai_log');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_server_port', 'table');

    DELETE FROM `system_text` WHERE id = 'table_text';
    DELETE FROM `system_text_tag` WHERE id = 'table_text';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_text', 'deDE', 'Text', 2, 2, '2015-04-23 01:59:38', '2015-04-23 01:59:38');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_text', 'enUS', 'Text', 2, 2, '2015-04-18 13:36:18', '2015-04-18 13:36:18');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_text', 'frFR', 'Texte', 3, 3, '2015-04-20 18:59:12', '2015-04-20 18:59:12');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_text', 'sai_text');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_text', 'table');

    DELETE FROM `system_text` WHERE id = 'table_thrown';
    DELETE FROM `system_text_tag` WHERE id = 'table_thrown';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_thrown', 'deDE', 'Geworfen', 2, 2, '2015-04-23 01:56:35', '2015-04-23 01:56:35');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_thrown', 'enUS', 'Thrown', 2, 2, '2015-04-18 13:55:30', '2015-04-18 13:55:30');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_thrown', 'sai_log');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_thrown', 'table');

    DELETE FROM `system_text` WHERE id = 'table_time';
    DELETE FROM `system_text_tag` WHERE id = 'table_time';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_time', 'deDE', 'Zeit', 3, 3, '2015-04-20 18:58:16', '2015-04-20 18:58:16');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_time', 'enUS', 'Time', 2, 2, '2015-04-18 13:52:11', '2015-04-18 13:52:11');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_time', 'frFR', 'Temps', 3, 3, '2015-04-20 18:58:10', '2015-04-20 18:58:10');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_time', 'sai_log');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_time', 'sai_todo');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_time', 'table');

    DELETE FROM `system_text` WHERE id = 'table_time_create';
    DELETE FROM `system_text_tag` WHERE id = 'table_time_create';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_time_create', 'deDE', 'Erstellt', 2, 2, '2015-04-23 02:00:29', '2015-04-23 02:00:29');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_time_create', 'enUS', 'Creation Time', 2, 2, '2015-04-18 13:37:39', '2015-04-18 13:37:39');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_time_create', 'frFR', 'écrit', 3, 3, '2015-04-20 19:00:54', '2015-04-20 19:00:54');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_time_create', 'sai_text');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_time_create', 'table');

    DELETE FROM `system_text` WHERE id = 'table_time_edit';
    DELETE FROM `system_text_tag` WHERE id = 'table_time_edit';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_time_edit', 'deDE', 'Editiert', 2, 2, '2015-04-23 02:00:59', '2015-04-23 02:00:59');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_time_edit', 'enUS', 'Edit Time', 2, 2, '2015-04-18 13:38:14', '2015-04-18 13:38:14');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_time_edit', 'frFR', 'édité', 3, 3, '2015-04-20 19:01:35', '2015-04-20 19:01:35');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_time_edit', 'sai_text');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_time_edit', 'table');

    DELETE FROM `system_text` WHERE id = 'table_trace';
    DELETE FROM `system_text_tag` WHERE id = 'table_trace';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_trace', 'deDE', 'Spur', 2, 2, '2015-04-23 01:56:05', '2015-04-23 01:56:05');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_trace', 'enUS', 'Trace', 2, 2, '2015-04-18 13:51:11', '2015-04-18 13:51:11');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_trace', 'sai_log');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_trace', 'table');

    DELETE FROM `system_text` WHERE id = 'table_url';
    DELETE FROM `system_text_tag` WHERE id = 'table_url';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_url', 'deDE', 'URL', 2, 2, '2015-04-23 01:59:19', '2015-04-23 01:59:19');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_url', 'enUS', 'URL', 2, 2, '2015-04-18 14:44:00', '2015-04-18 14:44:00');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_url', 'sai_log');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_url', 'sai_todo');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_url', 'sai_security');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_url', 'table');

    DELETE FROM `system_text` WHERE id = 'table_user';
    DELETE FROM `system_text_tag` WHERE id = 'table_user';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_user', 'deDE', 'Nutzer', 2, 2, '2015-04-18 14:44:09', '2015-04-18 14:44:09');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_user', 'enUS', 'User', 2, 2, '2015-04-18 14:44:09', '2015-04-18 14:44:09');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_user', 'sai_log');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_user', 'sai_todo');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_user', 'sai_security');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_user', 'table');

    DELETE FROM `system_text` WHERE id = 'table_value';
    DELETE FROM `system_text_tag` WHERE id = 'table_value';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_value', 'deDE', 'Wert', 2, 2, '2015-04-23 01:58:25', '2015-04-23 01:58:25');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_value', 'enUS', 'Value', 2, 2, '2015-04-18 13:56:53', '2015-04-18 13:56:53');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_value', 'sai_log');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_value', 'sai_todo');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_value', 'table');
    
    DELETE FROM `system_text` WHERE id = 'table_assignee';
    DELETE FROM `system_text_tag` WHERE id = 'table_assignee';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_assignee', 'deDE', 'Beauftragter', 2, 2, '2015-04-23 01:58:25', '2015-04-23 01:58:25');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_assignee', 'enUS', 'Assignee', 2, 2, '2015-04-18 13:56:53', '2015-04-18 13:56:53');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_assignee', 'sai_todo');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_assignee', 'table');
    
    DELETE FROM `system_text` WHERE id = 'table_assignees';
    DELETE FROM `system_text_tag` WHERE id = 'table_assignees';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_assignees', 'deDE', 'Beauftragte', 2, 2, '2015-04-23 01:58:25', '2015-04-23 01:58:25');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_assignees', 'enUS', 'Assignees', 2, 2, '2015-04-18 13:56:53', '2015-04-18 13:56:53');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_assignees', 'sai_todo');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_assignees', 'table');
    
    DELETE FROM `system_text` WHERE id = 'table_action';
    DELETE FROM `system_text_tag` WHERE id = 'table_action';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_action', 'deDE', 'Aktion', 2, 2, '2015-04-23 01:58:25', '2015-04-23 01:58:25');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_action', 'enUS', 'Action', 2, 2, '2015-04-18 13:56:53', '2015-04-18 13:56:53');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_action', 'sai_todo');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_action', 'sai_security');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_action', 'table');

    DELETE FROM `system_text` WHERE id = 'table_username';
    DELETE FROM `system_text_tag` WHERE id = 'table_username';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_username', 'deDE', 'Nutzername', 2, 2, '2015-04-23 01:58:25', '2015-04-23 01:58:25');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_username', 'enUS', 'Username', 2, 2, '2015-04-18 13:56:53', '2015-04-18 13:56:53');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_username', 'sai_todo');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_username', 'sai_start');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_username', 'sai_security');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_username', 'table');

    DELETE FROM `system_text` WHERE id = 'table_open';
    DELETE FROM `system_text_tag` WHERE id = 'table_open';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_open', 'deDE', 'Offen', 2, 2, '2015-04-23 01:58:25', '2015-04-23 01:58:25');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_open', 'enUS', 'Open', 2, 2, '2015-04-18 13:56:53', '2015-04-18 13:56:53');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_open', 'sai_todo');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_open', 'sai_start');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_open', 'table');

    DELETE FROM `system_text` WHERE id = 'table_closed';
    DELETE FROM `system_text_tag` WHERE id = 'table_closed';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_closed', 'deDE', 'Geschlossen', 2, 2, '2015-04-23 01:58:25', '2015-04-23 01:58:25');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_closed', 'enUS', 'Closed', 2, 2, '2015-04-18 13:56:53', '2015-04-18 13:56:53');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_closed', 'sai_todo');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_closed', 'sai_start');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_closed', 'table');

    DELETE FROM `system_text` WHERE id = 'table_all';
    DELETE FROM `system_text_tag` WHERE id = 'table_all';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_all', 'deDE', 'Alle', 2, 2, '2015-04-23 01:58:25', '2015-04-23 01:58:25');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_all', 'enUS', 'All', 2, 2, '2015-04-18 13:56:53', '2015-04-18 13:56:53');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_all', 'sai_todo');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_all', 'sai_start');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_all', 'table');

    DELETE FROM `system_text` WHERE id = 'table_percentage';
    DELETE FROM `system_text_tag` WHERE id = 'table_percentage';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_percentage', 'deDE', '% Prozent', 2, 2, '2015-04-23 01:58:25', '2015-04-23 01:58:25');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_percentage', 'enUS', '% Percentage', 2, 2, '2015-04-18 13:56:53', '2015-04-18 13:56:53');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_percentage', 'sai_todo');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_percentage', 'sai_start');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_percentage', 'table');

    DELETE FROM `system_text` WHERE id = 'table_name';
    DELETE FROM `system_text_tag` WHERE id = 'table_name';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_name', 'deDE', 'Name', 2, 2, '2015-04-23 01:58:25', '2015-04-23 01:58:25');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_name', 'enUS', 'Name', 2, 2, '2015-04-18 13:56:53', '2015-04-18 13:56:53');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_name', 'sai_todo');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_name', 'table');

    DELETE FROM `system_text` WHERE id = 'table_project';
    DELETE FROM `system_text_tag` WHERE id = 'table_project';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_project', 'deDE', 'Projekt', 2, 2, '2015-04-23 01:58:25', '2015-04-23 01:58:25');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_project', 'enUS', 'Project', 2, 2, '2015-04-18 13:56:53', '2015-04-18 13:56:53');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_project', 'sai_todo');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_project', 'table');

    DELETE FROM `system_text` WHERE id = 'table_done';
    DELETE FROM `system_text_tag` WHERE id = 'table_done';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_done', 'deDE', 'Fertig', 2, 2, '2015-04-23 01:58:25', '2015-04-23 01:58:25');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_done', 'enUS', 'Done', 2, 2, '2015-04-18 13:56:53', '2015-04-18 13:56:53');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_done', 'sai_todo');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_done', 'table');

    DELETE FROM `system_text` WHERE id = 'table_version';
    DELETE FROM `system_text_tag` WHERE id = 'table_version';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_version', 'deDE', 'Version', 2, 2, '2015-04-23 01:58:25', '2015-04-23 01:58:25');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_version', 'enUS', 'Version', 2, 2, '2015-04-18 13:56:53', '2015-04-18 13:56:53');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_version', 'sai_mod');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_version', 'table');

    DELETE FROM `system_text` WHERE id = 'table_interface';
    DELETE FROM `system_text_tag` WHERE id = 'table_interface';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_interface', 'deDE', 'Schnittstelle', 2, 2, '2015-04-23 01:58:25', '2015-04-23 01:58:25');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_interface', 'enUS', 'Interface', 2, 2, '2015-04-18 13:56:53', '2015-04-18 13:56:53');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_interface', 'sai_mod');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_interface', 'table');
    
    DELETE FROM `system_text` WHERE id = 'table_priority';
    DELETE FROM `system_text_tag` WHERE id = 'table_priority';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_priority', 'deDE', 'Priorität', 2, 2, '2015-04-23 01:58:25', '2015-04-23 01:58:25');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_priority', 'enUS', 'Priority', 2, 2, '2015-04-18 13:56:53', '2015-04-18 13:56:53');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_priority', 'sai_todo');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_priority', 'table');
    
    DELETE FROM `system_text` WHERE id = 'table_email';
    DELETE FROM `system_text_tag` WHERE id = 'table_email';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_email', 'deDE', 'E-Mail', 2, 2, '2015-04-23 01:58:25', '2015-04-23 01:58:25');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_email', 'enUS', 'EMail', 2, 2, '2015-04-18 13:56:53', '2015-04-18 13:56:53');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_email', 'sai_security');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_email', 'table');
    
    DELETE FROM `system_text` WHERE id = 'table_join_date';
    DELETE FROM `system_text_tag` WHERE id = 'table_join_date';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_join_date', 'deDE', 'Beitrittsdatum', 2, 2, '2015-04-23 01:58:25', '2015-04-23 01:58:25');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_join_date', 'enUS', 'Join Date', 2, 2, '2015-04-18 13:56:53', '2015-04-18 13:56:53');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_join_date', 'sai_security');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_join_date', 'table');
    
    DELETE FROM `system_text` WHERE id = 'table_language';
    DELETE FROM `system_text_tag` WHERE id = 'table_language';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_language', 'deDE', 'Sprache', 2, 2, '2015-04-23 01:58:25', '2015-04-23 01:58:25');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_language', 'enUS', 'Language', 2, 2, '2015-04-18 13:56:53', '2015-04-18 13:56:53');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_language', 'sai_security');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_language', 'table');
    
    DELETE FROM `system_text` WHERE id = 'table_last_active';
    DELETE FROM `system_text_tag` WHERE id = 'table_last_active';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_last_active', 'deDE', 'Zuletzt aktiv', 2, 2, '2015-04-23 01:58:25', '2015-04-23 01:58:25');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_last_active', 'enUS', 'Last active', 2, 2, '2015-04-18 13:56:53', '2015-04-18 13:56:53');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_last_active', 'sai_security');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_last_active', 'table');
    
    DELETE FROM `system_text` WHERE id = 'table_reset_password';
    DELETE FROM `system_text_tag` WHERE id = 'table_reset_password';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_reset_password', 'deDE', 'Passwort zurücksetzen', 2, 2, '2015-04-23 01:58:25', '2015-04-23 01:58:25');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_reset_password', 'enUS', 'Reset Password', 2, 2, '2015-04-18 13:56:53', '2015-04-18 13:56:53');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_reset_password', 'sai_security');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('table_reset_password', 'table');

    REPLACE INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_email_confirmed', 'deDE', 'Email bestätigt', 10, 10, '2016-06-01 15:49:43', '2016-06-01 15:49:43');
    REPLACE INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('table_email_confirmed', 'enUS', 'Email Confirmed', 10, 10, '2016-06-01 15:49:28', '2016-06-01 15:49:28');
    REPLACE INTO `system_text_tag` (`id`, `tag`) VALUES ('table_email_confirmed', 'sai_security');
    REPLACE INTO `system_text_tag` (`id`, `tag`) VALUES ('table_email_confirmed', 'table');

-- Time

    DELETE FROM `system_text` WHERE id = 'time_ago';
    DELETE FROM `system_text_tag` WHERE id = 'time_ago';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('time_ago', 'deDE', 'Vergangene Zeit', 2, 2, '2015-04-20 01:39:10', '2015-04-20 01:39:10');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('time_ago', 'enUS', 'Time Ago', 2, 2, '2015-04-18 14:42:32', '2015-04-18 14:42:32');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('time_ago', 'frFR', 'temps passé', 3, 3, '2015-04-20 14:39:52', '2015-04-20 14:39:52');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('time_ago', 'sai_log');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('time_ago', 'sai_todo');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('time_ago', 'sai_security');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('time_ago', 'time');

    DELETE FROM `system_text` WHERE id = 'time_ago_day';
    DELETE FROM `system_text_tag` WHERE id = 'time_ago_day';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('time_ago_day', 'deDE', 'Tage vergangen', 2, 3, '2015-04-20 14:43:03', '2015-04-20 14:43:03');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('time_ago_day', 'enUS', 'day(s) ago', 2, 2, '2015-04-18 14:36:07', '2015-04-18 14:36:07');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('time_ago_day', 'frFR', 'jour(s) sont passé', 3, 3, '2015-04-20 14:43:09', '2015-04-20 14:43:09');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('time_ago_day', 'sai_log');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('time_ago_day', 'sai_security');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('time_ago_day', 'sai_todo');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('time_ago_day', 'time');

    DELETE FROM `system_text` WHERE id = 'time_ago_hour';
    DELETE FROM `system_text_tag` WHERE id = 'time_ago_hour';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('time_ago_hour', 'deDE', 'Stunde(n) zuvor', 2, 3, '2015-04-20 14:42:41', '2015-04-20 14:42:41');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('time_ago_hour', 'enUS', 'hour(s) ago', 2, 2, '2015-04-18 14:35:37', '2015-04-18 14:35:37');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('time_ago_hour', 'frFR', 'heure(s) sont passé', 3, 3, '2015-04-20 14:42:48', '2015-04-20 14:42:48');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('time_ago_hour', 'sai_log');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('time_ago_hour', 'sai_security');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('time_ago_hour', 'sai_todo');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('time_ago_hour', 'time');

    DELETE FROM `system_text` WHERE id = 'time_ago_minute';
    DELETE FROM `system_text_tag` WHERE id = 'time_ago_minute';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('time_ago_minute', 'deDE', 'Minute(n) zuvor', 2, 3, '2015-04-20 14:44:58', '2015-04-20 14:44:58');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('time_ago_minute', 'enUS', 'minute(s) ago', 2, 2, '2015-04-18 14:35:32', '2015-04-18 14:35:32');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('time_ago_minute', 'frFR', 'minutes(s) sont passé', 3, 3, '2015-04-20 14:42:23', '2015-04-20 14:42:23');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('time_ago_minute', 'sai_log');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('time_ago_minute', 'sai_security');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('time_ago_minute', 'sai_todo');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('time_ago_minute', 'time');

    DELETE FROM `system_text` WHERE id = 'time_ago_month';
    DELETE FROM `system_text_tag` WHERE id = 'time_ago_month';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('time_ago_month', 'deDE', 'Monat(e) zuvor', 2, 3, '2015-04-20 14:43:58', '2015-04-20 14:43:58');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('time_ago_month', 'enUS', 'month(s) ago', 2, 2, '2015-04-18 14:35:52', '2015-04-18 14:35:52');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('time_ago_month', 'frFR', 'mois sont passé', 3, 3, '2015-04-20 14:44:04', '2015-04-20 14:44:04');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('time_ago_month', 'sai_log');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('time_ago_month', 'sai_security');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('time_ago_month', 'sai_todo');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('time_ago_month', 'time');

    DELETE FROM `system_text` WHERE id = 'time_ago_second';
    DELETE FROM `system_text_tag` WHERE id = 'time_ago_second';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('time_ago_second', 'deDE', 'Sekunde(n) zuvor', 2, 2, '2015-04-20 01:36:54', '2015-04-20 01:36:54');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('time_ago_second', 'enUS', 'second(s) ago', 2, 2, '2015-04-18 14:35:25', '2015-04-18 14:35:25');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('time_ago_second', 'frFR', 'seconde(s) sont passé', 3, 3, '2015-04-20 14:38:47', '2015-04-20 14:38:47');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('time_ago_second', 'sai_log');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('time_ago_second', 'sai_security');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('time_ago_second', 'sai_todo');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('time_ago_second', 'time');

    DELETE FROM `system_text` WHERE id = 'time_ago_year';
    DELETE FROM `system_text_tag` WHERE id = 'time_ago_year';
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('time_ago_year', 'deDE', 'Jahr(e) vergangen', 2, 3, '2015-04-20 14:43:34', '2015-04-20 14:43:34');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('time_ago_year', 'enUS', 'year(s) ago', 2, 2, '2015-04-18 14:35:46', '2015-04-18 14:35:46');
    INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('time_ago_year', 'frFR', 'an(s) sont passé', 3, 3, '2015-04-20 14:43:40', '2015-04-20 14:43:40');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('time_ago_year', 'sai_log');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('time_ago_year', 'sai_security');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('time_ago_year', 'sai_todo');
    INSERT INTO `system_text_tag` (`id`, `tag`) VALUES ('time_ago_year', 'time');


-- mail

    REPLACE INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('mail_change_email', 'enUS', 'Hello ${username}${newline}${newline}follow this link to change your Accounts Email-Address to ${email}${newline}${base_url}api.php?call=account&action=confirm&token=${token}${newline}${newline}Sincerely your Admin Team', 10, 10, '2016-06-06 03:32:41', '2016-06-06 03:17:53');
    REPLACE INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('mail_change_email_from', 'enUS', 'admin@mojotrollz.eu', 10, 10, '2016-06-06 03:19:53', '2016-06-06 03:19:53');
    REPLACE INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('mail_change_email_replyto', 'enUS', 'admin@mojotrollz.eu', 10, 10, '2016-06-06 03:20:15', '2016-06-06 03:20:15');
    REPLACE INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('mail_change_email_subject', 'enUS', 'Change Email', 10, 10, '2016-06-06 03:14:38', '2016-06-06 03:14:38');
    REPLACE INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('mail_confirm_email', 'enUS', 'Hello ${username}${newline}${newline}follow this link to confirm your Email-Address ${email}${newline}${base_url}api.php?call=account&action=confirm&token=${token} ${newline}${newline}Sincerely your Admin Team', 10, 10, '2016-06-06 01:44:07', '2016-06-06 01:42:58');
    REPLACE INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('mail_confirm_email_from', 'enUS', 'admin@mojotrollz.eu', 10, 10, '2016-06-06 01:12:32', '2016-06-06 01:12:32');
    REPLACE INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('mail_confirm_email_replyto', 'enUS', 'admin@mojotrollz.eu', 10, 10, '2016-06-06 01:12:51', '2016-06-06 01:12:51');
    REPLACE INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('mail_confirm_email_subject', 'enUS', 'Confirm Email', 10, 10, '2016-06-06 03:14:18', '2016-06-06 03:14:18');
    REPLACE INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('mail_reset_password', 'enUS', 'Hello ${username}${newline}${newline}follow this link to rest Accounts Password to ${pw}${newline}${base_url}api.php?call=account&action=confirm&token=${token}${newline}${newline}Sincerely your Admin Team', 10, 10, '2016-06-06 03:32:55', '2016-06-06 03:19:12');
    REPLACE INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('mail_reset_password_from', 'enUS', 'admin@mojotrollz.eu', 10, 10, '2016-06-06 03:21:14', '2016-06-06 03:21:14');
    REPLACE INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('mail_reset_password_replyto', 'enUS', 'admin@mojotrollz.eu', 10, 10, '2016-06-06 03:21:34', '2016-06-06 03:21:34');
    REPLACE INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('mail_reset_password_subject', 'enUS', 'Reset Password', 10, 10, '2016-06-06 03:20:53', '2016-06-06 03:20:53');
    REPLACE INTO `system_text_tag` (`id`, `tag`) VALUES ('mail_change_email', 'mail');
    REPLACE INTO `system_text_tag` (`id`, `tag`) VALUES ('mail_change_email_from', 'mail');
    REPLACE INTO `system_text_tag` (`id`, `tag`) VALUES ('mail_change_email_replyto', 'mail');
    REPLACE INTO `system_text_tag` (`id`, `tag`) VALUES ('mail_change_email_subject', 'mail');
    REPLACE INTO `system_text_tag` (`id`, `tag`) VALUES ('mail_confirm_email', 'mail');
    REPLACE INTO `system_text_tag` (`id`, `tag`) VALUES ('mail_confirm_email_from', 'mail');
    REPLACE INTO `system_text_tag` (`id`, `tag`) VALUES ('mail_confirm_email_replyto', 'mail');
    REPLACE INTO `system_text_tag` (`id`, `tag`) VALUES ('mail_confirm_email_subject', 'mail');
    REPLACE INTO `system_text_tag` (`id`, `tag`) VALUES ('mail_reset_password', 'mail');
    REPLACE INTO `system_text_tag` (`id`, `tag`) VALUES ('mail_reset_password_from', 'mail');
    REPLACE INTO `system_text_tag` (`id`, `tag`) VALUES ('mail_reset_password_replyto', 'mail');
    REPLACE INTO `system_text_tag` (`id`, `tag`) VALUES ('mail_reset_password_subject', 'mail');