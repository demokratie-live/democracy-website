REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (10, 0, 0, -1, NULL, 'call', NULL);
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (11, 0, 0, 10, NULL, 'action', NULL);

REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (12, 0, 2, 11, 'reset_password', 'username', 'STRING');
-- REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (13, 0, 2, 11, 'change_password', 'username', 'STRING');
DELETE FROM `system_api` WHERE `ID` = 13 AND `group` = 0;
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (14, 0, 2, 11, 'change_password', 'old_password_sha1', 'STRING');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (15, 0, 3, 11, 'change_password', 'new_password_sha1', 'STRING');
-- REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (16, 0, 2, 11, 'confirm_email', 'username', 'STRING');
DELETE FROM `system_api` WHERE `ID` = 16 AND `group` = 0;
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (17, 0, 2, 11, 'confirm', 'token', 'STRING');
-- REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (18, 0, 2, 11, 'change_email', 'username', 'STRING');
DELETE FROM `system_api` WHERE `ID` = 18 AND `group` = 0;
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (19, 0, 2, 11, 'change_email', 'new_email', 'EMAIL');

REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (20, 0, 2, 11, 'login', 'username', 'STRING');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (21, 0, 2, 11, 'login', 'password_sha1', 'STRING');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (22, 0, 3, 11, 'login', 'locale', 'LANG');

REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (23, 0, 2, 11, 'check', 'rightid', 'UINT');

REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (24, 0, 2, 11, 'create', 'username', 'STRING');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (25, 0, 2, 11, 'create', 'password_sha1', 'STRING');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (26, 0, 2, 11, 'create', 'email', 'EMAIL');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (27, 0, 3, 11, 'create', 'locale', 'LANG');

REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (30, 0, 2, 10, 'files', 'cat', 'STRING');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (31, 0, 3, 10, 'files', 'id', 'STRING');

REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (40, 0, 2, 10, 'text', 'request', 'STRING');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (41, 0, 2, 10, 'text', 'lang', 'LANG');

REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (50, 0, 2, 10, 'pages', 'group', 'UINT');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (51, 0, 2, 10, 'pages', 'state', 'STRING');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (52, 0, 1, 50, NULL, 'js', NULL);
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (53, 0, 2, 51, NULL, 'group', 'UINT');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (55, 0, 1, 50, NULL, 'css', NULL);
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (56, 0, 2, 55, NULL, 'group', 'UINT');

REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (60, 0, 2, 10, 'bug', 'message', 'STRING');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (61, 0, 2, 10, 'bug', 'data', 'JSON');

REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (70, 0, 2, 10, 'cache', 'id', 'INT');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (71, 0, 2, 10, 'cache', 'ident', 'STRING');

REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (90, 0, 4, -1, NULL, '_lang', 'LANG');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (91, 0, 4, -1, NULL, '_result', 'RESULT');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (92, 0, 4, -1, NULL, '_escaped_fragment_', 'STRING');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (93, 0, 4, -1, NULL, '_', 'STRING');