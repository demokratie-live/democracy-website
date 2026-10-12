-- REPLACE INTO system.api ("ID", "group", "type", "parentID", "parentValue", "name", verify) VALUES (10, 0, 0, -1, NULL, 'call', NULL);
-- REPLACE INTO system.api ("ID", "group", "type", "parentID", "parentValue", "name", verify) VALUES (11, 0, 0, 10, NULL, 'action', NULL);

-- REPLACE INTO system.api ("ID", "group", "type", "parentID", "parentValue", "name", verify) VALUES (20, 0, 2, 11, 'login', 'username', 'STRING');
-- REPLACE INTO system.api ("ID", "group", "type", "parentID", "parentValue", "name", verify) VALUES (21, 0, 2, 11, 'login', 'password_sha', 'STRING');
-- REPLACE INTO system.api ("ID", "group", "type", "parentID", "parentValue", "name", verify) VALUES (22, 0, 2, 11, 'login', 'password_md5', 'STRING');

-- REPLACE INTO system.api ("ID", "group", "type", "parentID", "parentValue", "name", verify) VALUES (23, 0, 2, 11, 'check', 'rightid', 'UINT');

-- REPLACE INTO system.api ("ID", "group", "type", "parentID", "parentValue", "name", verify) VALUES (24, 0, 2, 11, 'create', 'username', 'STRING');
-- REPLACE INTO system.api ("ID", "group", "type", "parentID", "parentValue", "name", verify) VALUES (25, 0, 2, 11, 'create', 'password_sha', 'STRING');
-- REPLACE INTO system.api ("ID", "group", "type", "parentID", "parentValue", "name", verify) VALUES (26, 0, 2, 11, 'create', 'email', 'STRING');
-- REPLACE INTO system.api ("ID", "group", "type", "parentID", "parentValue", "name", verify) VALUES (27, 0, 2, 11, 'create', 'locale', 'LANG');

-- REPLACE INTO system.api ("ID", "group", "type", "parentID", "parentValue", "name", verify) VALUES (30, 0, 2, 10, 'files', 'cat', 'STRING');
-- REPLACE INTO system.api ("ID", "group", "type", "parentID", "parentValue", "name", verify) VALUES (31, 0, 3, 30, 'files', 'id', 'STRING');

-- REPLACE INTO system.api ("ID", "group", "type", "parentID", "parentValue", "name", "verify") VALUES (40, 0, 2, 10, 'text', 'request', 'STRING');
-- REPLACE INTO system.api ("ID", "group", "type", "parentID", "parentValue", "name", "verify") VALUES (41, 0, 2, 10, 'text', 'lang', 'LANG');

-- REPLACE INTO system.api ("ID", "group", "type", "parentID", "parentValue", "name", "verify") VALUES (50, 0, 2, 10, 'pages', 'group', 'UINT');
-- REPLACE INTO system.api ("ID", "group", "type", "parentID", "parentValue", "name", "verify") VALUES (51, 0, 2, 10, 'pages', 'state', 'STRING');
-- REPLACE INTO system.api ("ID", "group", "type", "parentID", "parentValue", "name", "verify") VALUES (52, 0, 1, 50, NULL, 'js', NULL);
-- REPLACE INTO system.api ("ID", "group", "type", "parentID", "parentValue", "name", "verify") VALUES (53, 0, 2, 51, NULL, 'group', 'UINT');
-- REPLACE INTO system.api ("ID", "group", "type", "parentID", "parentValue", "name", "verify") VALUES (55, 0, 1, 50, NULL, 'css', NULL);
-- REPLACE INTO system.api ("ID", "group", "type", "parentID", "parentValue", "name", "verify") VALUES (56, 0, 2, 55, NULL, 'group', 'UINT');

-- REPLACE INTO system.api ("ID", "group", "type", "parentID", "parentValue", "name", "verify") VALUES (60, 0, 2, 10, 'bug', 'message', 'STRING');
-- REPLACE INTO system.api ("ID", "group", "type", "parentID", "parentValue", "name", "verify") VALUES (61, 0, 2, 10, 'bug', 'data', 'JSON');

-- REPLACE INTO system.api ("ID", "group", "type", "parentID", "parentValue", "name", "verify") VALUES (90, 0, 4, -1, NULL, '_lang', 'LANG');
-- REPLACE INTO system.api ("ID", "group", "type", "parentID", "parentValue", "name", "verify") VALUES (91, 0, 4, -1, NULL, '_result', 'RESULT');
-- REPLACE INTO system.api ("ID", "group", "type", "parentID", "parentValue", "name", "verify") VALUES (92, 0, 4, -1, NULL, '_escaped_fragment_', 'STRING');

INSERT INTO system.api ("ID", "group", "type", "parentID", "parentValue", "name", "verify") VALUES (10, 0, 0, -1, NULL, 'call', NULL);
INSERT INTO system.api ("ID", "group", "type", "parentID", "parentValue", "name", "verify") VALUES (11, 0, 0, 10, NULL, 'action', NULL);

INSERT INTO system.api ("ID", "group", "type", "parentID", "parentValue", "name", "verify") VALUES (20, 0, 2, 11, 'login', 'username', 'STRING');
INSERT INTO system.api ("ID", "group", "type", "parentID", "parentValue", "name", "verify") VALUES (21, 0, 2, 11, 'login', 'password_sha', 'STRING');
INSERT INTO system.api ("ID", "group", "type", "parentID", "parentValue", "name", "verify") VALUES (22, 0, 2, 11, 'login', 'password_md5', 'STRING');

INSERT INTO system.api ("ID", "group", "type", "parentID", "parentValue", "name", "verify") VALUES (23, 0, 2, 11, 'check', 'rightid', 'UINT');

INSERT INTO system.api ("ID", "group", "type", "parentID", "parentValue", "name", "verify") VALUES (24, 0, 2, 11, 'create', 'username', 'STRING');
INSERT INTO system.api ("ID", "group", "type", "parentID", "parentValue", "name", "verify") VALUES (25, 0, 2, 11, 'create', 'password_sha', 'STRING');
INSERT INTO system.api ("ID", "group", "type", "parentID", "parentValue", "name", "verify") VALUES (26, 0, 2, 11, 'create', 'email', 'STRING');
INSERT INTO system.api ("ID", "group", "type", "parentID", "parentValue", "name", "verify") VALUES (27, 0, 2, 11, 'create', 'locale', 'LANG');

INSERT INTO system.api ("ID", "group", "type", "parentID", "parentValue", "name", "verify") VALUES (30, 0, 2, 10, 'files', 'cat', 'STRING');
INSERT INTO system.api ("ID", "group", "type", "parentID", "parentValue", "name", "verify") VALUES (31, 0, 3, 10, 'files', 'id', 'STRING');

INSERT INTO system.api ("ID", "group", "type", "parentID", "parentValue", "name", "verify") VALUES (40, 0, 2, 10, 'text', 'request', 'STRING');
INSERT INTO system.api ("ID", "group", "type", "parentID", "parentValue", "name", "verify") VALUES (41, 0, 2, 10, 'text', 'lang', 'LANG');

INSERT INTO system.api ("ID", "group", "type", "parentID", "parentValue", "name", "verify") VALUES (50, 0, 2, 10, 'pages', 'group', 'UINT');
INSERT INTO system.api ("ID", "group", "type", "parentID", "parentValue", "name", "verify") VALUES (51, 0, 2, 10, 'pages', 'state', 'STRING');
INSERT INTO system.api ("ID", "group", "type", "parentID", "parentValue", "name", "verify") VALUES (52, 0, 1, 50, NULL, 'js', NULL);
INSERT INTO system.api ("ID", "group", "type", "parentID", "parentValue", "name", "verify") VALUES (53, 0, 2, 51, NULL, 'group', 'UINT');
INSERT INTO system.api ("ID", "group", "type", "parentID", "parentValue", "name", "verify") VALUES (55, 0, 1, 50, NULL, 'css', NULL);
INSERT INTO system.api ("ID", "group", "type", "parentID", "parentValue", "name", "verify") VALUES (56, 0, 2, 55, NULL, 'group', 'UINT');

INSERT INTO system.api ("ID", "group", "type", "parentID", "parentValue", "name", "verify") VALUES (60, 0, 2, 10, 'bug', 'message', 'STRING');
INSERT INTO system.api ("ID", "group", "type", "parentID", "parentValue", "name", "verify") VALUES (61, 0, 2, 10, 'bug', 'data', 'JSON');

INSERT INTO system.api ("ID", "group", "type", "parentID", "parentValue", "name", "verify") VALUES (70, 0, 2, 10, 'cache', 'id', 'INT');
INSERT INTO system.api ("ID", "group", "type", "parentID", "parentValue", "name", "verify") VALUES (71, 0, 2, 10, 'cache', 'ident', 'STRING');

INSERT INTO system.api ("ID", "group", "type", "parentID", "parentValue", "name", "verify") VALUES (90, 0, 4, -1, NULL, '_lang', 'LANG');
INSERT INTO system.api ("ID", "group", "type", "parentID", "parentValue", "name", "verify") VALUES (91, 0, 4, -1, NULL, '_result', 'RESULT');
INSERT INTO system.api ("ID", "group", "type", "parentID", "parentValue", "name", "verify") VALUES (92, 0, 4, -1, NULL, '_escaped_fragment_', 'STRING');
INSERT INTO system.api ("ID", "group", "type", "parentID", "parentValue", "name", "verify") VALUES (93, 0, 4, -1, NULL, '_', 'STRING');