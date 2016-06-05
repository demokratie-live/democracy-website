DELETE FROM `system_api` WHERE `group` = 42;

-- basic
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (0, 42, 0, -1, NULL, 'sai_mod', NULL);
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1, 42, 1, 0, NULL, 'js', NULL);
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (2, 42, 1, 0, NULL, 'css', NULL);
-- REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (3, 42, 0, 0, NULL, 'page', NULL);

-- system_api
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (10, 42, 0, -1, NULL, 'call', NULL);
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (11, 42, 0, 10, NULL, 'action', NULL);
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (20, 42, 2, 11, 'login', 'username', 'STRING');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (21, 42, 2, 11, 'login', 'password_sha1', 'STRING');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (22, 42, 3, 11, 'login', 'locale', 'LANG');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (23, 42, 2, 11, 'check', 'rightid', 'UINT');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (24, 42, 2, 11, 'create', 'username', 'STRING');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (25, 42, 2, 11, 'create', 'password_sha1', 'STRING');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (26, 42, 2, 11, 'create', 'email', 'STRING');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (27, 42, 2, 11, 'create', 'locale', 'LANG');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (30, 42, 2, 10, 'files', 'cat', 'STRING');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (31, 42, 3, 10, 'files', 'id', 'STRING');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (40, 42, 2, 10, 'text', 'request', 'STRING');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (41, 42, 2, 40, 'text', 'lang', 'LANG');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (50, 42, 2, 10, 'pages', 'group', 'UINT');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (51, 42, 2, 10, 'pages', 'state', 'STRING');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (52, 42, 1, 50, NULL, 'js', NULL);
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (53, 42, 2, 51, NULL, 'group', 'UINT');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (55, 42, 1, 50, NULL, 'css', NULL);
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (56, 42, 2, 55, NULL, 'group', 'UINT');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (60, 42, 2, 10, 'bug', 'message', 'STRING');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (61, 42, 2, 10, 'bug', 'data', 'JSON');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (70, 42, 2, 10, 'cache', 'id', 'INT');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (71, 42, 2, 10, 'cache', 'ident', 'STRING');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (90, 42, 4, -1, NULL, '_lang', 'LANG');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (91, 42, 4, -1, NULL, '_result', 'RESULT');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (92, 42, 4, -1, NULL, '_escaped_fragment_', 'STRING');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (93, 42, 4, -1, NULL, '_', 'STRING');

-- specific stuff for mods
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (100, 42, 0, 0, '_SYSTEM_SAI_saimod_sys_login', 'action', NULL);
-- 
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (101, 42, 2, 100, 'login', 'username', 'ALL');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (102, 42, 2, 100, 'login', 'password_sha', 'ALL');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (103, 42, 2, 100, 'login', 'password_md5', 'ALL');
--
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (110, 42, 2, 100, 'register', 'username', 'ALL');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (111, 42, 2, 100, 'register', 'password', 'ALL');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (112, 42, 2, 100, 'register', 'email', 'ALL');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (113, 42, 3, 100, 'register', 'locale', 'ALL');


REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (200, 42, 0, 0, '_SYSTEM_SAI_saimod_sys_log', 'action', NULL);
--
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (201, 42, 3, 200, 'filter', 'filter', 'STRING');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (202, 42, 3, 200, 'filter', 'search', 'STRING');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (203, 42, 3, 200, 'filter', 'page', 'UINT0');
--
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (210, 42, 3, 200, 'error', 'error', 'INT');
--
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (220, 42, 0, 200, 'stats', 'name', null);
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (221, 42, 3, 220, null, 'filter', 'UINT');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (222, 42, 3, 220, null, 'db', 'STRING');


REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (300, 42, 0, 0, '_SYSTEM_SAI_saimod_sys_security', 'action', NULL);
--
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (301, 42, 2, 300, 'user', 'username', 'STRING');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (302, 42, 3, 300, 'users', 'filter', 'STRING');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (303, 42, 3, 300, 'users', 'search', 'STRING');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (304, 42, 3, 300, 'users', 'page', 'UINT0');
--
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (310, 42, 2, 300, 'addright', 'id', 'UINT');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (311, 42, 2, 300, 'addright', 'name', 'STRING');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (312, 42, 2, 300, 'addright', 'description', 'STRING');
--
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (320, 42, 2, 300, 'deleteright', 'id', 'UINT');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (321, 42, 2, 300, 'deleterightconfirm', 'id', 'UINT');
--
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (330, 42, 2, 300, 'addrightuser', 'rightid', 'UINT');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (331, 42, 2, 300, 'addrightuser', 'userid', 'UINT');
--
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (340, 42, 2, 300, 'deleterightuser', 'rightid', 'UINT');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (341, 42, 2, 300, 'deleterightuser', 'userid', 'UINT');


REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (400, 42, 0, 0, '_SYSTEM_SAI_saimod_sys_mod', 'action', NULL);


REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (500, 42, 0, 0, '_SYSTEM_SAI_saimod_sys_config', 'action', NULL);


REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (600, 42, 0, 0, '_SYSTEM_SAI_saimod_sys_api', 'action', NULL);
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (601, 42, 2, 600, 'addcall', 'ID', 'INT');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (602, 42, 2, 600, 'addcall', 'group', 'INT');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (603, 42, 2, 600, 'addcall', 'type', 'INT');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (604, 42, 2, 600, 'addcall', 'parentID', 'INT');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (605, 42, 2, 600, 'addcall', 'parentValue', 'STRING');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (606, 42, 2, 600, 'addcall', 'name', 'STRING');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (607, 42, 2, 600, 'addcall', 'verify', 'ALL');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (608, 42, 2, 600, 'deletecall', 'ID', 'INT');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (609, 42, 2, 600, 'deletecall', 'group', 'INT');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (610, 42, 2, 600, 'deletedialog', 'ID', 'INT');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (611, 42, 2, 600, 'deletedialog', 'group', 'INT');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (620, 42, 3, 600, 'list', 'group', 'INT');


REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (700, 42, 0, 0, '_SYSTEM_SAI_saimod_sys_text', 'action', NULL);
--
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (703, 42, 3, 700, 'tag', 'tag', 'STRING');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (704, 42, 3, 700, 'tag', 'filter', 'STRING');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (705, 42, 3, 700, 'tag', 'search', 'STRING');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (706, 42, 3, 700, 'tag', 'page', 'UINT0');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (710, 42, 2, 700, 'loadByTag', 'lang', 'LANG');
--
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (712, 42, 2, 700, 'edittext', 'id', 'STRING');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (713, 42, 2, 700, 'edittext', 'lang', 'LANG');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (715, 42, 2, 700, 'editor', 'id', 'STRING');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (716, 42, 2, 700, 'editor', 'lang', 'LANG');
--
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (720, 42, 2, 700, 'delete', 'id', 'STRING');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (721, 42, 3, 700, 'delete', 'lang', 'LANG');
--
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (730, 42, 2, 700, 'save', 'id', 'STRING');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (731, 42, 2, 700, 'save', 'new_id', 'STRING');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (732, 42, 2, 700, 'save', 'lang', 'LANG');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (733, 42, 2, 700, 'save', 'tags', 'JSON');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (734, 42, 2, 700, 'save', 'text', 'STRING');


REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (800, 42, 0, 0, '_SYSTEM_SAI_saimod_sys_files', 'action', NULL);
--
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (801, 42, 2, 800, 'upload', 'cat', 'STRING');
--
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (810, 42, 2, 800, 'del', 'cat', 'STRING');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (811, 42, 2, 800, 'del', 'id', 'STRING');
--
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (820, 42, 2, 800, 'rn', 'cat', 'STRING');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (821, 42, 2, 800, 'rn', 'id', 'STRING');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (822, 42, 2, 800, 'rn', 'newid', 'STRING');
--
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (830, 42, 3, 800, 'tab', 'name', 'STRING');


REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (900, 42, 0, 0, '_SYSTEM_SAI_saimod_sys_cache', 'action', NULL);


REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1000, 42, 0, 0, '_SYSTEM_SAI_saimod_sys_todo', 'action', NULL);
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1001, 42, 2, 1000, 'todo', 'todo', 'INT');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1002, 42, 2, 1000, 'open', 'todo', 'INT');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1003, 42, 2, 1000, 'close', 'todo', 'INT');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1004, 42, 2, 1000, 'add', 'todo', 'STRING');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1005, 42, 2, 1000, 'assign', 'todo', 'INT');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1006, 42, 2, 1000, 'deassign', 'todo', 'INT');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1007, 42, 3, 1000, 'deassign', 'user', 'INT');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1010, 42, 2, 1000, 'edit', 'todo', 'INT');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1011, 42, 2, 1000, 'edit', 'message', 'STRING');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1015, 42, 2, 1000, 'priority_up', 'todo', 'INT');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1016, 42, 2, 1000, 'priority_down', 'todo', 'INT');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1020, 42, 3, 1000, 'todolist', 'filter', 'STRING');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1021, 42, 3, 1000, 'todolist', 'search', 'STRING');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1022, 42, 3, 1000, 'todolist', 'page', 'UINT0');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1025, 42, 3, 1000, 'dotolist', 'filter', 'STRING');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1026, 42, 3, 1000, 'dotolist', 'search', 'STRING');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1027, 42, 3, 1000, 'dotolist', 'page', 'UINT0');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1030, 42, 0, 1000, 'stats', 'name', null);
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1031, 42, 3, 1030, null, 'filter', 'UINT');


REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1100, 42, 0, 0, '_SYSTEM_SAI_saimod_sys_docu', 'action', NULL);
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1101, 42, 3, 1100, 'cat', 'cat', 'STRING');
-- REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1110, 42, 3, 1100, 'doc', 'cat', 'STRING');
-- REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1111, 42, 3, 1100, 'doc', 'doc', 'STRING');

REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1200, 42, 0, 0, '_SYSTEM_SAI_saimod_sys_cron', 'action', NULL);
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1201, 42, 2, 1200, 'add', 'cls', 'STRING');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1202, 42, 2, 1200, 'add', 'min', 'INT');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1203, 42, 2, 1200, 'add', 'hour', 'INT');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1204, 42, 2, 1200, 'add', 'day', 'INT');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1205, 42, 2, 1200, 'add', 'day_week', 'INT');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1206, 42, 2, 1200, 'add', 'month', 'INT');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1208, 42, 2, 1200, 'del', 'cls', 'STRING');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1209, 42, 2, 1200, 'deldialog', 'cls', 'STRING');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1210, 42, 2, 1200, 'change', 'cls', 'STRING');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1211, 42, 2, 1200, 'change', 'status', 'INT');

REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1300, 42, 0, 0, '_SYSTEM_SAI_saimod_sys_page', 'action', NULL);
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1301, 42, 2, 1300, 'addcall', 'ID', 'INT');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1302, 42, 2, 1300, 'addcall', 'group', 'INT');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1303, 42, 2, 1300, 'addcall', 'type', 'INT');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1304, 42, 2, 1300, 'addcall', 'parentID', 'INT');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1305, 42, 2, 1300, 'addcall', 'parentValue', 'STRING');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1306, 42, 2, 1300, 'addcall', 'name', 'STRING');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1307, 42, 2, 1300, 'addcall', 'verify', 'ALL');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1308, 42, 2, 1300, 'deletecall', 'ID', 'INT');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1309, 42, 2, 1300, 'deletecall', 'group', 'INT');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1310, 42, 2, 1300, 'deletedialog', 'ID', 'INT');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1311, 42, 2, 1300, 'deletedialog', 'group', 'INT');
REPLACE INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1320, 42, 3, 1300, 'list', 'group', 'INT');