-- delete old entries of group
DELETE FROM system.api where "group" = 101;
-- get data from group 0 and write it in your group
INSERT INTO system.api ( "ID", "group","type","parentID","parentValue","name","verify" )
	SELECT  "ID",
		'101' as "group", -- target group
		"type",
		"parentID",
		"parentValue",
		"name",
		"verify"
	FROM    system.api
	WHERE 	"group" = 0; -- pattern  group