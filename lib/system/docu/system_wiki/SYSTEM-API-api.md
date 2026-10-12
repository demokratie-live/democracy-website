SYSTEM\API\api
===============

API Class provided by System for Smart API&#039;s.




* Class name: api
* Namespace: SYSTEM\API



Constants
----------


### ROOT_PARENTID

    const ROOT_PARENTID = -1





### DEFAULT_GROUP

    const DEFAULT_GROUP = 0





### DEFAULT_STRICT

    const DEFAULT_STRICT = true





### DEFAULT_DEFAULT

    const DEFAULT_DEFAULT = false







Methods
-------


### run

    mixed SYSTEM\API\api::run(string $verifyclassname, string $apiclassname, array $params, integer $group, boolean $strict, boolean $default)

Run the API Mechanism with your Data.



* Visibility: **public**
* This method is **static**.


#### Arguments
* $verifyclassname **string** - &lt;p&gt;Your class on which the parameter restriction is parsed upon&lt;/p&gt;
* $apiclassname **string** - &lt;p&gt;Your class which provides your API&lt;/p&gt;
* $params **array** - &lt;p&gt;Parameters given to the API&lt;/p&gt;
* $group **integer** - &lt;p&gt;API Group to be used to parse Call&lt;/p&gt;
* $strict **boolean** - &lt;p&gt;Parse the API in a strict way&lt;/p&gt;
* $default **boolean** - &lt;p&gt;Defaulting to default_page setting&lt;/p&gt;



### getApiTree

    array SYSTEM\API\api::getApiTree(integer $group)

Internal API function to retrive the Databasetree for requested API



* Visibility: **private**
* This method is **static**.


#### Arguments
* $group **integer** - &lt;p&gt;API Group to be read&lt;/p&gt;



### do_statics

    array SYSTEM\API\api::do_statics(array $params, array $tree, string $apiclassname, string $verifyclassname, boolean $default)

Internal API function to parse statics for requested API



* Visibility: **private**
* This method is **static**.


#### Arguments
* $params **array** - &lt;p&gt;Array of Params given to the API&lt;/p&gt;
* $tree **array** - &lt;p&gt;Array of Rules for given API&lt;/p&gt;
* $apiclassname **string** - &lt;p&gt;Classname of the users API class&lt;/p&gt;
* $verifyclassname **string** - &lt;p&gt;Classname of the users Verify Class&lt;/p&gt;
* $default **boolean** - &lt;p&gt;Defaulting to default_page setting&lt;/p&gt;



### do_default

    array SYSTEM\API\api::do_default(boolean $default, string $apiclassname, string $call_funcname)

Internal API function to parse default redirect for requested API



* Visibility: **private**
* This method is **static**.


#### Arguments
* $default **boolean** - &lt;p&gt;Defaulting to default_page setting&lt;/p&gt;
* $apiclassname **string** - &lt;p&gt;Classname of the users API class&lt;/p&gt;
* $call_funcname **string** - &lt;p&gt;Functionname which was called&lt;/p&gt;



### do_strict

    null SYSTEM\API\api::do_strict(boolean $strict, array $params, array $statics, array $commands, array $parameters, array $parameters_opt)

Internal API function to strict parse the API



* Visibility: **private**
* This method is **static**.


#### Arguments
* $strict **boolean** - &lt;p&gt;Strict settings&lt;/p&gt;
* $params **array** - &lt;p&gt;Parameters given to the API&lt;/p&gt;
* $statics **array** - &lt;p&gt;Array with API statics&lt;/p&gt;
* $commands **array** - &lt;p&gt;Array with API commands&lt;/p&gt;
* $parameters **array** - &lt;p&gt;Array with API parameters&lt;/p&gt;
* $parameters_opt **array** - &lt;p&gt;Array with API optional parameters&lt;/p&gt;



### do_commands

    array SYSTEM\API\api::do_commands(array $params, array $tree)

Internal API function to parse commands for requested API



* Visibility: **private**
* This method is **static**.


#### Arguments
* $params **array** - &lt;p&gt;Parameters given to the API&lt;/p&gt;
* $tree **array** - &lt;p&gt;Array with API rules&lt;/p&gt;



### do_parameters

    array SYSTEM\API\api::do_parameters(array $params, array $tree, integer $parentid, string $lastcommandvalue, string $verifyclassname)

Internal API function to parse parameters for requested API



* Visibility: **private**
* This method is **static**.


#### Arguments
* $params **array** - &lt;p&gt;Parameters given to the API&lt;/p&gt;
* $tree **array** - &lt;p&gt;Array with API rules&lt;/p&gt;
* $parentid **integer** - &lt;p&gt;Parentid of last Tree Element&lt;/p&gt;
* $lastcommandvalue **string** - &lt;p&gt;Last value of last Command&lt;/p&gt;
* $verifyclassname **string** - &lt;p&gt;Verify Class given to the API&lt;/p&gt;



### do_parameters_opt

    array SYSTEM\API\api::do_parameters_opt(array $params, array $tree, integer $parentid, string $lastcommandvalue, string $verifyclassname)

Internal API function to parse optional parameters for requested API



* Visibility: **private**
* This method is **static**.


#### Arguments
* $params **array** - &lt;p&gt;Parameters given to the API&lt;/p&gt;
* $tree **array** - &lt;p&gt;Array with API rules&lt;/p&gt;
* $parentid **integer** - &lt;p&gt;Parentid of last Tree Element&lt;/p&gt;
* $lastcommandvalue **string** - &lt;p&gt;Last value of last Command&lt;/p&gt;
* $verifyclassname **string** - &lt;p&gt;Verify Class given to the API&lt;/p&gt;



### do_func_name

    string SYSTEM\API\api::do_func_name(array $commands)

Internal API function to build function name for requested API



* Visibility: **private**
* This method is **static**.


#### Arguments
* $commands **array** - &lt;p&gt;Array of all Commands for the given API call&lt;/p&gt;



### do_func_params

    array SYSTEM\API\api::do_func_params(array $parameters, array $parameters_opt)

Internal API function to build function paramters for requested API



* Visibility: **private**
* This method is **static**.


#### Arguments
* $parameters **array** - &lt;p&gt;Array of all Paramters for the given API call&lt;/p&gt;
* $parameters_opt **array** - &lt;p&gt;Array of all optional Paramters for the given API call&lt;/p&gt;


