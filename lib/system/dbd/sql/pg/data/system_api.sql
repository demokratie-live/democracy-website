INSERT INTO system.api ("ID", "group", type, "parentID", "parentValue", name, verify) VALUES (10, 42, 0, -1, NULL, 'call', NULL);
INSERT INTO system.api ("ID", "group", type, "parentID", "parentValue", name, verify) VALUES (11, 42, 0, 10, NULL, 'action', NULL);

INSERT INTO system.api ("ID", "group", type, "parentID", "parentValue", name, verify) VALUES (20, 42, 2, 11, 'login', 'username', 'STRING');
INSERT INTO system.api ("ID", "group", type, "parentID", "parentValue", name, verify) VALUES (21, 42, 2, 11, 'login', 'password_sha', 'STRING');
INSERT INTO system.api ("ID", "group", type, "parentID", "parentValue", name, verify) VALUES (22, 42, 2, 11, 'login', 'password_md5', 'STRING');

INSERT INTO system.api ("ID", "group", type, "parentID", "parentValue", name, verify) VALUES (23, 42, 2, 11, 'check', 'rightid', 'UINT');

INSERT INTO system.api ("ID", "group", type, "parentID", "parentValue", name, verify) VALUES (24, 42, 2, 11, 'create', 'username', 'STRING');
INSERT INTO system.api ("ID", "group", type, "parentID", "parentValue", name, verify) VALUES (25, 42, 2, 11, 'create', 'password_sha', 'STRING');
INSERT INTO system.api ("ID", "group", type, "parentID", "parentValue", name, verify) VALUES (26, 42, 2, 11, 'create', 'email', 'STRING');
INSERT INTO system.api ("ID", "group", type, "parentID", "parentValue", name, verify) VALUES (27, 42, 2, 11, 'create', 'locale', 'LANG');

INSERT INTO system.api ("ID", "group", type, "parentID", "parentValue", name, verify) VALUES (30, 42, 2, 10, 'files', 'cat', 'STRING');
INSERT INTO system.api ("ID", "group", type, "parentID", "parentValue", name, verify) VALUES (31, 42, 3, 30, 'files', 'id', 'STRING');

-- INSERT INTO system.api ("ID", "group", type, "parentID", "parentValue", name, verify) VALUES (100, 0, 2, 0, 'files', 'cat', 'STRING');
-- INSERT INTO system.api ("ID", "group", type, "parentID", "parentValue", name, verify) VALUES (101, 0, 3, 0, 'files', 'id', 'STRING');