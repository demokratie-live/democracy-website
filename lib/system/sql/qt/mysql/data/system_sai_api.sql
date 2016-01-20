DELETE FROM `system_api` WHERE `group` = 42;

-- basic
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (0, 42, 0, -1, NULL, 'sai_mod', NULL);
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1, 42, 1, 0, NULL, 'js', NULL);
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (2, 42, 1, 0, NULL, 'css', NULL);
-- INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (3, 42, 0, 0, NULL, 'page', NULL);

-- system_api
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (10, 42, 0, -1, NULL, 'call', NULL);
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (11, 42, 0, 10, NULL, 'action', NULL);
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (20, 42, 2, 11, 'login', 'username', 'STRING');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (21, 42, 2, 11, 'login', 'password_sha', 'STRING');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (22, 42, 2, 11, 'login', 'password_md5', 'STRING');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (23, 42, 2, 11, 'check', 'rightid', 'UINT');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (24, 42, 2, 11, 'create', 'username', 'STRING');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (25, 42, 2, 11, 'create', 'password_sha', 'STRING');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (26, 42, 2, 11, 'create', 'email', 'STRING');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (27, 42, 2, 11, 'create', 'locale', 'LANG');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (30, 42, 2, 10, 'files', 'cat', 'STRING');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (31, 42, 3, 10, 'files', 'id', 'STRING');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (40, 42, 2, 10, 'text', 'request', 'STRING');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (41, 42, 2, 40, 'text', 'lang', 'LANG');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (50, 42, 2, 10, 'pages', 'group', 'UINT');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (51, 42, 2, 10, 'pages', 'state', 'STRING');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (52, 42, 1, 50, NULL, 'js', NULL);
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (53, 42, 2, 51, NULL, 'group', 'UINT');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (55, 42, 1, 50, NULL, 'css', NULL);
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (56, 42, 2, 55, NULL, 'group', 'UINT');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (60, 42, 2, 10, 'bug', 'message', 'STRING');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (61, 42, 2, 10, 'bug', 'data', 'JSON');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (70, 42, 2, 10, 'cache', 'id', 'INT');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (71, 42, 2, 10, 'cache', 'ident', 'STRING');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (90, 42, 4, -1, NULL, '_lang', 'LANG');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (91, 42, 4, -1, NULL, '_result', 'RESULT');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (92, 42, 4, -1, NULL, '_escaped_fragment_', 'STRING');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (93, 0, 4, -1, NULL, '_', 'STRING');

-- specific stuff for mods
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (100, 42, 0, 0, '_SYSTEM_SAI_saimod_sys_login', 'action', NULL);
-- 
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (101, 42, 2, 100, 'login', 'username', 'ALL');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (102, 42, 2, 100, 'login', 'password_sha', 'ALL');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (103, 42, 2, 100, 'login', 'password_md5', 'ALL');
--
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (110, 42, 2, 100, 'register', 'username', 'ALL');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (111, 42, 2, 100, 'register', 'password', 'ALL');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (112, 42, 2, 100, 'register', 'email', 'ALL');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (113, 42, 3, 100, 'register', 'locale', 'ALL');


INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (200, 42, 0, 0, '_SYSTEM_SAI_saimod_sys_log', 'action', NULL);
--
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (201, 42, 3, 200, 'filter', 'filter', 'STRING');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (202, 42, 3, 200, 'filter', 'search', 'STRING');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (203, 42, 3, 200, 'filter', 'page', 'UINT0');
--
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (210, 42, 3, 200, 'error', 'error', 'INT');
--
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (220, 42, 0, 200, 'stats', 'name', null);
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (221, 42, 3, 220, null, 'filter', 'UINT');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (222, 42, 3, 220, null, 'db', 'STRING');


INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (300, 42, 0, 0, '_SYSTEM_SAI_saimod_sys_security', 'action', NULL);
--
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (301, 42, 2, 300, 'user', 'username', 'STRING');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (302, 42, 3, 300, 'users', 'filter', 'STRING');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (303, 42, 3, 300, 'users', 'search', 'STRING');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (304, 42, 3, 300, 'users', 'page', 'UINT0');
--
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (310, 42, 2, 300, 'addright', 'id', 'UINT');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (311, 42, 2, 300, 'addright', 'name', 'STRING');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (312, 42, 2, 300, 'addright', 'description', 'STRING');
--
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (320, 42, 2, 300, 'deleteright', 'id', 'UINT');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (321, 42, 2, 300, 'deleterightconfirm', 'id', 'UINT');
--
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (330, 42, 2, 300, 'addrightuser', 'rightid', 'UINT');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (331, 42, 2, 300, 'addrightuser', 'userid', 'UINT');
--
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (340, 42, 2, 300, 'deleterightuser', 'rightid', 'UINT');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (341, 42, 2, 300, 'deleterightuser', 'userid', 'UINT');


INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (400, 42, 0, 0, '_SYSTEM_SAI_saimod_sys_mod', 'action', NULL);


INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (500, 42, 0, 0, '_SYSTEM_SAI_saimod_sys_config', 'action', NULL);


INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (600, 42, 0, 0, '_SYSTEM_SAI_saimod_sys_api', 'action', NULL);
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (601, 42, 2, 600, 'addcall', 'ID', 'INT');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (602, 42, 2, 600, 'addcall', 'group', 'INT');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (603, 42, 2, 600, 'addcall', 'type', 'INT');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (604, 42, 2, 600, 'addcall', 'parentID', 'INT');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (605, 42, 2, 600, 'addcall', 'parentValue', 'STRING');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (606, 42, 2, 600, 'addcall', 'name', 'STRING');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (607, 42, 2, 600, 'addcall', 'verify', 'ALL');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (608, 42, 2, 600, 'deletecall', 'ID', 'INT');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (609, 42, 2, 600, 'deletecall', 'group', 'INT');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (610, 42, 2, 600, 'deletedialog', 'ID', 'INT');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (611, 42, 2, 600, 'deletedialog', 'group', 'INT');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (620, 42, 3, 600, 'list', 'group', 'INT');


INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (700, 42, 0, 0, '_SYSTEM_SAI_saimod_sys_text', 'action', NULL);
--
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (703, 42, 3, 700, 'tag', 'tag', 'STRING');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (704, 42, 3, 700, 'tag', 'filter', 'STRING');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (705, 42, 3, 700, 'tag', 'search', 'STRING');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (706, 42, 3, 700, 'tag', 'page', 'UINT0');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (710, 42, 2, 700, 'loadByTag', 'lang', 'LANG');
--
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (712, 42, 2, 700, 'edittext', 'id', 'STRING');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (713, 42, 2, 700, 'edittext', 'lang', 'LANG');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (715, 42, 2, 700, 'editor', 'id', 'STRING');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (716, 42, 2, 700, 'editor', 'lang', 'LANG');
--
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (720, 42, 2, 700, 'delete', 'id', 'STRING');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (721, 42, 3, 700, 'delete', 'lang', 'LANG');
--
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (730, 42, 2, 700, 'save', 'id', 'STRING');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (731, 42, 2, 700, 'save', 'new_id', 'STRING');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (732, 42, 2, 700, 'save', 'lang', 'LANG');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (733, 42, 2, 700, 'save', 'tags', 'JSON');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (734, 42, 2, 700, 'save', 'text', 'STRING');


INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (800, 42, 0, 0, '_SYSTEM_SAI_saimod_sys_files', 'action', NULL);
--
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (801, 42, 2, 800, 'upload', 'cat', 'STRING');
--
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (810, 42, 2, 800, 'del', 'cat', 'STRING');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (811, 42, 2, 800, 'del', 'id', 'STRING');
--
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (820, 42, 2, 800, 'rn', 'cat', 'STRING');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (821, 42, 2, 800, 'rn', 'id', 'STRING');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (822, 42, 2, 800, 'rn', 'newid', 'STRING');
--
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (830, 42, 3, 800, 'tab', 'name', 'STRING');


-- INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (900, 42, 0, 0, '_SYSTEM_SAI_saimod_sys_cache', 'action', NULL);


INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1000, 42, 0, 0, '_SYSTEM_SAI_saimod_sys_todo', 'action', NULL);
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1001, 42, 2, 1000, 'todo', 'todo', 'INT');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1002, 42, 2, 1000, 'open', 'todo', 'INT');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1003, 42, 2, 1000, 'close', 'todo', 'INT');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1004, 42, 2, 1000, 'add', 'todo', 'STRING');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1005, 42, 2, 1000, 'assign', 'todo', 'INT');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1006, 42, 2, 1000, 'deassign', 'todo', 'INT');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1007, 42, 3, 1000, 'deassign', 'user', 'INT');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1010, 42, 2, 1000, 'edit', 'todo', 'INT');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1011, 42, 2, 1000, 'edit', 'message', 'STRING');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1015, 42, 2, 1000, 'priority_up', 'todo', 'INT');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1016, 42, 2, 1000, 'priority_down', 'todo', 'INT');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1020, 42, 3, 1000, 'todolist', 'filter', 'STRING');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1021, 42, 3, 1000, 'todolist', 'search', 'STRING');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1022, 42, 3, 1000, 'todolist', 'page', 'UINT0');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1025, 42, 3, 1000, 'dotolist', 'filter', 'STRING');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1026, 42, 3, 1000, 'dotolist', 'search', 'STRING');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1027, 42, 3, 1000, 'dotolist', 'page', 'UINT0');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1030, 42, 0, 1000, 'stats', 'name', null);
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1031, 42, 3, 1030, null, 'filter', 'UINT');


INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1100, 42, 0, 0, '_SYSTEM_SAI_saimod_sys_docu', 'action', NULL);
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1101, 42, 3, 1100, 'cat', 'cat', 'STRING');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1110, 42, 3, 1100, 'doc', 'cat', 'STRING');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1111, 42, 3, 1100, 'doc', 'doc', 'STRING');

INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1200, 42, 0, 0, '_SYSTEM_SAI_saimod_sys_cron', 'action', NULL);
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1201, 42, 2, 1200, 'add', 'cls', 'STRING');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1202, 42, 2, 1200, 'add', 'min', 'INT');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1203, 42, 2, 1200, 'add', 'hour', 'INT');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1204, 42, 2, 1200, 'add', 'day', 'INT');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1205, 42, 2, 1200, 'add', 'day_week', 'INT');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1206, 42, 2, 1200, 'add', 'month', 'INT');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1208, 42, 2, 1200, 'del', 'cls', 'STRING');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1209, 42, 2, 1200, 'deldialog', 'cls', 'STRING');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1210, 42, 2, 1200, 'change', 'cls', 'STRING');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1211, 42, 2, 1200, 'change', 'status', 'INT');

INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1300, 42, 0, 0, '_SYSTEM_SAI_saimod_sys_page', 'action', NULL);
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1301, 42, 2, 1300, 'addcall', 'ID', 'INT');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1302, 42, 2, 1300, 'addcall', 'group', 'INT');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1303, 42, 2, 1300, 'addcall', 'type', 'INT');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1304, 42, 2, 1300, 'addcall', 'parentID', 'INT');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1305, 42, 2, 1300, 'addcall', 'parentValue', 'STRING');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1306, 42, 2, 1300, 'addcall', 'name', 'STRING');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1307, 42, 2, 1300, 'addcall', 'verify', 'ALL');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1308, 42, 2, 1300, 'deletecall', 'ID', 'INT');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1309, 42, 2, 1300, 'deletecall', 'group', 'INT');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1310, 42, 2, 1300, 'deletedialog', 'ID', 'INT');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1311, 42, 2, 1300, 'deletedialog', 'group', 'INT');
INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1320, 42, 3, 1300, 'list', 'group', 'INT');