-- mail
    REPLACE INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('mail_change_email', 'enUS', 'Hello ${username}${newline}${newline}follow this link to change your Accounts Email-Address to ${email}${newline}${base_url}api.php?call=account&action=confirm&token=${token}${newline}${newline}Sincerely your Admin Team', 10, 10, '2016-06-06 03:32:41', '2016-06-06 03:17:53');
    REPLACE INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('mail_change_email', 'deDE', 'Hallo ${username}${newline}${newline}follow this link to change your Accounts Email-Address to ${email}${newline}${base_url}api.php?call=account&action=confirm&token=${token}${newline}${newline}Sincerely your Admin Team', 10, 10, '2016-06-06 03:32:41', '2016-06-06 03:17:53');
    REPLACE INTO `system_text_tag` (`id`, `tag`) VALUES ('mail_change_email', 'mail');

    REPLACE INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('mail_change_email_from', 'enUS', 'admin@mojotrollz.eu', 10, 10, '2016-06-06 03:19:53', '2016-06-06 03:19:53');
    REPLACE INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('mail_change_email_from', 'deDE', 'admin@mojotrollz.eu', 10, 10, '2016-06-06 03:19:53', '2016-06-06 03:19:53');
    REPLACE INTO `system_text_tag` (`id`, `tag`) VALUES ('mail_change_email_from', 'mail');

    REPLACE INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('mail_change_email_replyto', 'enUS', 'admin@mojotrollz.eu', 10, 10, '2016-06-06 03:20:15', '2016-06-06 03:20:15');
    REPLACE INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('mail_change_email_replyto', 'deDE', 'admin@mojotrollz.eu', 10, 10, '2016-06-06 03:20:15', '2016-06-06 03:20:15');
    REPLACE INTO `system_text_tag` (`id`, `tag`) VALUES ('mail_change_email_replyto', 'mail');

    REPLACE INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('mail_change_email_subject', 'enUS', 'Change Email', 10, 10, '2016-06-06 03:14:38', '2016-06-06 03:14:38');
    REPLACE INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('mail_change_email_subject', 'deDE', 'Change Email', 10, 10, '2016-06-06 03:14:38', '2016-06-06 03:14:38');
    REPLACE INTO `system_text_tag` (`id`, `tag`) VALUES ('mail_change_email_subject', 'mail');

    REPLACE INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('mail_confirm_email', 'enUS', 'Hello ${username}${newline}${newline}follow this link to confirm your Email-Address ${email}${newline}${base_url}api.php?call=account&action=confirm&token=${token} ${newline}${newline}Sincerely your Admin Team', 10, 10, '2016-06-06 01:44:07', '2016-06-06 01:42:58');
    REPLACE INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('mail_confirm_email', 'deDE', 'Hallo ${username}${newline}${newline}Folge diesem Link um deine Email-Address "${email}" zu bestätigen.${newline}${base_url}api.php?call=account&action=confirm&token=${token} ${newline}${newline}Mit freundlichen Grüßen,${newline}dein Admin Team', 10, 10, '2016-06-06 01:44:07', '2016-06-06 01:42:58');
    REPLACE INTO `system_text_tag` (`id`, `tag`) VALUES ('mail_confirm_email', 'mail');

    REPLACE INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('mail_confirm_email_from', 'enUS', 'admin@mojotrollz.eu', 10, 10, '2016-06-06 01:12:32', '2016-06-06 01:12:32');
    REPLACE INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('mail_confirm_email_from', 'deDE', 'admin@mojotrollz.eu', 10, 10, '2016-06-06 01:12:32', '2016-06-06 01:12:32');
    REPLACE INTO `system_text_tag` (`id`, `tag`) VALUES ('mail_confirm_email_from', 'mail');

    REPLACE INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('mail_confirm_email_replyto', 'enUS', 'admin@mojotrollz.eu', 10, 10, '2016-06-06 01:12:51', '2016-06-06 01:12:51');
    REPLACE INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('mail_confirm_email_replyto', 'deDE', 'admin@mojotrollz.eu', 10, 10, '2016-06-06 01:12:51', '2016-06-06 01:12:51');
    REPLACE INTO `system_text_tag` (`id`, `tag`) VALUES ('mail_confirm_email_replyto', 'mail');

    REPLACE INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('mail_confirm_email_subject', 'enUS', 'Confirm Email', 10, 10, '2016-06-06 03:14:18', '2016-06-06 03:14:18');
    REPLACE INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('mail_confirm_email_subject', 'deDE', 'Email bestätigen', 10, 10, '2016-06-06 03:14:18', '2016-06-06 03:14:18');
    REPLACE INTO `system_text_tag` (`id`, `tag`) VALUES ('mail_confirm_email_subject', 'mail');

    REPLACE INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('mail_reset_password', 'enUS', 'Hello ${username}${newline}${newline}follow this link to rest Accounts Password to ${pw}${newline}${base_url}api.php?call=account&action=confirm&token=${token}${newline}${newline}Sincerely your Admin Team', 10, 10, '2016-06-06 03:32:55', '2016-06-06 03:19:12');
    REPLACE INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('mail_reset_password', 'deDE', 'Hallo ${username}${newline}${newline}Folge diesem Link um dein Account-Password auf "${pw}" zu ändern.${newline}${base_url}api.php?call=account&action=confirm&token=${token}${newline}${newline}Sincerely your Admin Team', 10, 10, '2016-06-06 03:32:55', '2016-06-06 03:19:12');
    REPLACE INTO `system_text_tag` (`id`, `tag`) VALUES ('mail_reset_password', 'mail');

    REPLACE INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('mail_reset_password_from', 'enUS', 'admin@mojotrollz.eu', 10, 10, '2016-06-06 03:21:14', '2016-06-06 03:21:14');
    REPLACE INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('mail_reset_password_from', 'deDE', 'admin@mojotrollz.eu', 10, 10, '2016-06-06 03:21:14', '2016-06-06 03:21:14');
    REPLACE INTO `system_text_tag` (`id`, `tag`) VALUES ('mail_reset_password_from', 'mail');

    REPLACE INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('mail_reset_password_replyto', 'enUS', 'admin@mojotrollz.eu', 10, 10, '2016-06-06 03:21:34', '2016-06-06 03:21:34');
    REPLACE INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('mail_reset_password_replyto', 'deDE', 'admin@mojotrollz.eu', 10, 10, '2016-06-06 03:21:34', '2016-06-06 03:21:34');
    REPLACE INTO `system_text_tag` (`id`, `tag`) VALUES ('mail_reset_password_replyto', 'mail');

    REPLACE INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('mail_reset_password_subject', 'enUS', 'Reset Password', 10, 10, '2016-06-06 03:20:53', '2016-06-06 03:20:53');
    REPLACE INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`) VALUES ('mail_reset_password_subject', 'deDE', 'Passwort zurücksetzen', 1, 1, '2017-08-24 10:14:20', '0000-00-00 00:00:00');
    REPLACE INTO `system_text_tag` (`id`, `tag`) VALUES ('mail_reset_password_subject', 'mail');