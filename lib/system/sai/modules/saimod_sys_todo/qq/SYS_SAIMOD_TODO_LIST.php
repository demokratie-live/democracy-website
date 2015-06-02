<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_TODO_LIST extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'TODO',
//mys
'SELECT * FROM('.
    ' SELECT todo.'.\SYSTEM\DBD\system_todo::FIELD_ID.' as todo_id,'.
        ' todo.'.\SYSTEM\DBD\system_todo::FIELD_TYPE.', todo.'.\SYSTEM\DBD\system_todo::FIELD_CLASS.', todo.'.\SYSTEM\DBD\system_todo::FIELD_TIME.', todo.'.\SYSTEM\DBD\system_todo::FIELD_COUNT.', todo.'.\SYSTEM\DBD\system_todo::FIELD_MESSAGE.', todo.'.\SYSTEM\DBD\system_todo::FIELD_REQUEST_URI.', todo.'.\SYSTEM\DBD\system_todo::FIELD_FILE.', todo.'.\SYSTEM\DBD\system_todo::FIELD_LINE.', todo.'.\SYSTEM\DBD\system_todo::FIELD_SERVER_NAME.', todo.'.\SYSTEM\DBD\system_todo::FIELD_SERVER_PORT.', todo.'.\SYSTEM\DBD\system_todo::FIELD_QUERYTIME.', todo.'.\SYSTEM\DBD\system_todo::FIELD_IP.','.
        ' creator.'.\SYSTEM\DBD\system_user::FIELD_ID.' as creator_id,'.
        ' creator.'.\SYSTEM\DBD\system_user::FIELD_USERNAME.','.
        ' asignee.'.\SYSTEM\DBD\system_user::FIELD_USERNAME.' as asignee,'.
        ' asignee.'.\SYSTEM\DBD\system_user::FIELD_ID.' as asignee_id'.
    ' FROM '.\SYSTEM\DBD\system_todo::NAME_MYS.' as todo'.
    ' LEFT JOIN '.\SYSTEM\DBD\system_todo_asign::NAME_MYS.' as asign ON todo.'.\SYSTEM\DBD\system_todo::FIELD_ID.'=asign.'.\SYSTEM\DBD\system_todo_asign::FIELD_TODO.
    ' LEFT JOIN '.\SYSTEM\DBD\system_user::NAME_MYS.' as creator ON todo.'.\SYSTEM\DBD\system_todo::FIELD_USER.'=creator.'.\SYSTEM\DBD\system_user::FIELD_ID.
    ' LEFT JOIN '.\SYSTEM\DBD\system_user::NAME_MYS.' as asignee ON asign.'.\SYSTEM\DBD\system_todo_asign::FIELD_USER.'=asignee.'.\SYSTEM\DBD\system_user::FIELD_ID.
    ' WHERE todo.'.\SYSTEM\DBD\system_todo::FIELD_STATE.' = ?'.
    ' ORDER BY case when asign.'.\SYSTEM\DBD\system_todo_asign::FIELD_USER.' = ? then 1 else 2 end'.
    ' LIMIT 100'.
') as a'.
' GROUP BY a.todo_id'.
' ORDER BY a.'.\SYSTEM\DBD\system_todo::FIELD_TYPE.' DESC, a.'.\SYSTEM\DBD\system_todo::FIELD_COUNT.' DESC, a.'.\SYSTEM\DBD\system_todo::FIELD_TIME.' DESC'
);}}