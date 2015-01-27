SYSTEM API
----------

The SYSTEM-Api allows you to validate post/get/jsonpost parameters to function-calls.
This allows you to direct calls to your website to a class which can process those
calls in a typesave maner.

WARNING: This Method breaks inheritance in some use-cases!

How it Works
------------

Mapping of URLs to Functions -> thats it basicly

The URL

    http://mypage.net/api.php?call=test&action=bla&param1=1&param2=abc

maps to

    public static function call_test_action_bla($param1,$param2){}

if you set your database properly:

    INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (1, 0, 0, -1, NULL, 'call', NULL);
    INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (2, 0, 0, 1, 'test', 'action', NULL);
    INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (3, 0, 2, 2, 'bla', 'param1', 'UINT');
    INSERT INTO `system_api` (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (4, 0, 2, 2, 'bla', 'param2', 'STRING');

(note that the params are on the same level of the tree)
now you just need a php class with your function

    <?php
    class my_api {
        public static function call_test_action_bla($param1,$param2){}
    }

and an endpoint

    <?php
    require_once '../system/autoload.inc.php';                                  //SYSTEM Classes
    require_once 'myproject/autoload.inc.php';                                  //Project Classes

    require_once 'config.php';
    SYSTEM\system::start($myproject_config);
    \SYSTEM\system::include_ExceptionShortcut();
    \SYSTEM\system::include_ResultShortcut();
    \SYSTEM\system::register_errorhandler_dbwriter();
    \SYSTEM\system::register_errorhandler_jsonoutput();

    echo \SYSTEM\API\api::run('\SYSTEM\API\verify','my_api',array_merge($_POST,$_GET));
    new \SYSTEM\LOG\COUNTER("API was called sucessfully.");

check out the important line - note the use of the standartverifier - inherit it to make more verifiers available.

    echo \SYSTEM\API\api::run('\SYSTEM\API\verify','my_api',array_merge($_POST,$_GET));

To enable jsonpost use this in your endpoint:

    //Direct JSON Input
    $json = json_decode(file_get_contents("php://input"), true);
    if(!$json){
        $json = array_merge($_POST,$_GET);}

    //Construct the api with the dasense specific ApiVerfy Class verify_dasense and the call handler for da-sense api-calls api_dasense
    //the class api_dasense contains all stuff you would seek in the index -> look there
    echo \SYSTEM\API\api::run('my_verify', 'api_dasense',$json, 25);

note the use of api group 25 - this allows you to construct several apis.