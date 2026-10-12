SYSTEM\SAI\saimod_sys_todo
===============

saimod_sys_todo Class provided by System as saimod to manage the system_todo, system_todo_assign table




* Class name: saimod_sys_todo
* Namespace: SYSTEM\SAI
* Parent class: [SYSTEM\SAI\SaiModule](SYSTEM-SAI-SaiModule)





Properties
----------


### $stats

    private mixed $stats = array()

array Variable to store all registred todo_stats



* Visibility: **private**
* This property is **static**.


Methods
-------


### check_stats

    boolean SYSTEM\SAI\saimod_sys_todo::check_stats(string $stats)

Check if a todo_stats is valid



* Visibility: **private**
* This method is **static**.


#### Arguments
* $stats **string** - &lt;p&gt;Classname of the todo_stats&lt;/p&gt;



### register

    null SYSTEM\SAI\saimod_sys_todo::register(string $stats)

Register a todo_stats



* Visibility: **public**
* This method is **static**.


#### Arguments
* $stats **string** - &lt;p&gt;Classname of the todo_stats&lt;/p&gt;



### sai_mod__SYSTEM_SAI_saimod_sys_todo_action_assign

    \SYSTEM\SAI\JSON SYSTEM\SAI\saimod_sys_todo::sai_mod__SYSTEM_SAI_saimod_sys_todo_action_assign(integer $todo)

Assign a Todo to the User



* Visibility: **public**
* This method is **static**.


#### Arguments
* $todo **integer** - &lt;p&gt;Id of the Todo&lt;/p&gt;



### sai_mod__SYSTEM_SAI_saimod_sys_todo_action_deassign

    \SYSTEM\SAI\JSON SYSTEM\SAI\saimod_sys_todo::sai_mod__SYSTEM_SAI_saimod_sys_todo_action_deassign(integer $todo)

Deassign a Todo from the User



* Visibility: **public**
* This method is **static**.


#### Arguments
* $todo **integer** - &lt;p&gt;Id of the Todo&lt;/p&gt;



### sai_mod__SYSTEM_SAI_saimod_sys_todo_action_close

    \SYSTEM\SAI\JSON SYSTEM\SAI\saimod_sys_todo::sai_mod__SYSTEM_SAI_saimod_sys_todo_action_close(integer $todo)

Close a Todo



* Visibility: **public**
* This method is **static**.


#### Arguments
* $todo **integer** - &lt;p&gt;Id of the Todo&lt;/p&gt;



### sai_mod__SYSTEM_SAI_saimod_sys_todo_action_open

    \SYSTEM\SAI\JSON SYSTEM\SAI\saimod_sys_todo::sai_mod__SYSTEM_SAI_saimod_sys_todo_action_open(integer $todo)

Open a Todo



* Visibility: **public**
* This method is **static**.


#### Arguments
* $todo **integer** - &lt;p&gt;Id of the Todo&lt;/p&gt;



### sai_mod__SYSTEM_SAI_saimod_sys_todo_action_add

    \SYSTEM\SAI\JSON SYSTEM\SAI\saimod_sys_todo::sai_mod__SYSTEM_SAI_saimod_sys_todo_action_add(string $todo)

Add a new Todo



* Visibility: **public**
* This method is **static**.


#### Arguments
* $todo **string** - &lt;p&gt;text of the Todo&lt;/p&gt;



### sai_mod__SYSTEM_SAI_saimod_sys_todo_action_priority_up

    \SYSTEM\SAI\JSON SYSTEM\SAI\saimod_sys_todo::sai_mod__SYSTEM_SAI_saimod_sys_todo_action_priority_up(integer $todo)

Increase the Priority of a Todo



* Visibility: **public**
* This method is **static**.


#### Arguments
* $todo **integer** - &lt;p&gt;Id of the Todo&lt;/p&gt;



### sai_mod__SYSTEM_SAI_saimod_sys_todo_action_priority_down

    \SYSTEM\SAI\JSON SYSTEM\SAI\saimod_sys_todo::sai_mod__SYSTEM_SAI_saimod_sys_todo_action_priority_down(integer $todo)

Decrease the Priority of a Todo



* Visibility: **public**
* This method is **static**.


#### Arguments
* $todo **integer** - &lt;p&gt;Id of the Todo&lt;/p&gt;



### sai_mod__SYSTEM_SAI_saimod_sys_todo

    string SYSTEM\SAI\saimod_sys_todo::sai_mod__SYSTEM_SAI_saimod_sys_todo()

Generate the HTML for the Saimods startpage



* Visibility: **public**
* This method is **static**.




### sai_mod__SYSTEM_SAI_saimod_sys_todo_action_new

    string SYSTEM\SAI\saimod_sys_todo::sai_mod__SYSTEM_SAI_saimod_sys_todo_action_new()

Generate the HTML for the form to add a new Todo



* Visibility: **public**
* This method is **static**.




### sai_mod__SYSTEM_SAI_saimod_sys_todo_action_todolist

    string SYSTEM\SAI\saimod_sys_todo::sai_mod__SYSTEM_SAI_saimod_sys_todo_action_todolist(string $filter, string $search, integer $page)

Generate the HTML for the list of open Todos



* Visibility: **public**
* This method is **static**.


#### Arguments
* $filter **string** - &lt;p&gt;Category Filter&lt;/p&gt;
* $search **string** - &lt;p&gt;Search Parameter&lt;/p&gt;
* $page **integer** - &lt;p&gt;Page Number (returns only 100)&lt;/p&gt;



### sai_mod__SYSTEM_SAI_saimod_sys_todo_action_dotolist

    string SYSTEM\SAI\saimod_sys_todo::sai_mod__SYSTEM_SAI_saimod_sys_todo_action_dotolist(string $filter, string $search, integer $page)

Generate the HTML for the list of closed Todos



* Visibility: **public**
* This method is **static**.


#### Arguments
* $filter **string** - &lt;p&gt;Category Filter&lt;/p&gt;
* $search **string** - &lt;p&gt;Search Parameter&lt;/p&gt;
* $page **integer** - &lt;p&gt;Page Number (returns only 100)&lt;/p&gt;



### generate_list

    string SYSTEM\SAI\saimod_sys_todo::generate_list(integer $state, string $filter, string $search, integer $page)

Internal Function to generate the HTML for the todo list



* Visibility: **private**
* This method is **static**.


#### Arguments
* $state **integer** - &lt;p&gt;Todo State&lt;/p&gt;
* $filter **string** - &lt;p&gt;Category Filter&lt;/p&gt;
* $search **string** - &lt;p&gt;Search Parameter&lt;/p&gt;
* $page **integer** - &lt;p&gt;Page Number (returns only 100)&lt;/p&gt;



### statistics

    array SYSTEM\SAI\saimod_sys_todo::statistics()

Generates an array with values from all registered Todo Stats and Summary



* Visibility: **public**
* This method is **static**.




### sai_mod__SYSTEM_SAI_saimod_sys_todo_action_stats

    string SYSTEM\SAI\saimod_sys_todo::sai_mod__SYSTEM_SAI_saimod_sys_todo_action_stats()

Generate the HTML for the statistics of the ToDos



* Visibility: **public**
* This method is **static**.




### state

    string SYSTEM\SAI\saimod_sys_todo::state(integer $state)

Internal Function to generate the text for Todo Status Open & Closed



* Visibility: **private**
* This method is **static**.


#### Arguments
* $state **integer** - &lt;p&gt;State of the Todo&lt;/p&gt;



### statebtn

    string SYSTEM\SAI\saimod_sys_todo::statebtn(integer $state)

Internal Function to generate the Buttons for Todo Status Open & Closed



* Visibility: **private**
* This method is **static**.


#### Arguments
* $state **integer** - &lt;p&gt;State of the Todo&lt;/p&gt;



### trclass

    string SYSTEM\SAI\saimod_sys_todo::trclass(integer $type, string $class, integer $assignee, integer $userid)

Internal Function to generate the Trclass(color) for the Todo



* Visibility: **private**
* This method is **static**.


#### Arguments
* $type **integer** - &lt;p&gt;Type of the Todo&lt;/p&gt;
* $class **string** - &lt;p&gt;Class of the Todo&lt;/p&gt;
* $assignee **integer** - &lt;p&gt;Userid of the assigned for this Todo&lt;/p&gt;
* $userid **integer** - &lt;p&gt;Userid of the Current logged in User&lt;/p&gt;



### sai_mod__SYSTEM_SAI_saimod_sys_todo_action_close_all

    \SYSTEM\SAI\JSON SYSTEM\SAI\saimod_sys_todo::sai_mod__SYSTEM_SAI_saimod_sys_todo_action_close_all()

Close all Generated ToDos



* Visibility: **public**
* This method is **static**.




### sai_mod__SYSTEM_SAI_saimod_sys_todo_action_edit

    \SYSTEM\SAI\JSON SYSTEM\SAI\saimod_sys_todo::sai_mod__SYSTEM_SAI_saimod_sys_todo_action_edit(integer $todo, string $message)

Edit the message of a Todo



* Visibility: **public**
* This method is **static**.


#### Arguments
* $todo **integer** - &lt;p&gt;Id of the Todo&lt;/p&gt;
* $message **string** - &lt;p&gt;Message for the Todo&lt;/p&gt;



### sai_mod__SYSTEM_SAI_saimod_sys_todo_action_stats_name_closed

    \SYSTEM\SAI\JSON SYSTEM\SAI\saimod_sys_todo::sai_mod__SYSTEM_SAI_saimod_sys_todo_action_stats_name_closed(string $filter)

Calculate the Stats of closed ToDos



* Visibility: **public**
* This method is **static**.


#### Arguments
* $filter **string** - &lt;p&gt;Filter for the Calculation&lt;/p&gt;



### sai_mod__SYSTEM_SAI_saimod_sys_todo_action_stats_name_assigned

    \SYSTEM\SAI\JSON SYSTEM\SAI\saimod_sys_todo::sai_mod__SYSTEM_SAI_saimod_sys_todo_action_stats_name_assigned(string $filter)

Calculate the Stats of assigned ToDos



* Visibility: **public**
* This method is **static**.


#### Arguments
* $filter **string** - &lt;p&gt;Filter for the Calculation&lt;/p&gt;



### sai_mod__SYSTEM_SAI_saimod_sys_todo_action_todo

    string SYSTEM\SAI\saimod_sys_todo::sai_mod__SYSTEM_SAI_saimod_sys_todo_action_todo(integer $todo)

Returns the HTML for a ToDo



* Visibility: **public**
* This method is **static**.


#### Arguments
* $todo **integer** - &lt;p&gt;Id of the Todo&lt;/p&gt;



### html_li_menu

    string SYSTEM\SAI\SaiModule::html_li_menu()

Generate the <li> menu for the Saimod
Override this



* Visibility: **public**
* This method is **static**.
* This method is defined by [SYSTEM\SAI\SaiModule](SYSTEM-SAI-SaiModule)




### right_public

    boolean SYSTEM\SAI\SaiModule::right_public()

Check public state for the Saimod.

Override this

* Visibility: **public**
* This method is **static**.
* This method is defined by [SYSTEM\SAI\SaiModule](SYSTEM-SAI-SaiModule)




### right_right

    boolean SYSTEM\SAI\SaiModule::right_right()

Check rights for the Saimod.

Override this

* Visibility: **public**
* This method is **static**.
* This method is defined by [SYSTEM\SAI\SaiModule](SYSTEM-SAI-SaiModule)




### js

    array SYSTEM\SAI\saimod_sys_todo::js()

Get all js System Paths required for this Saimod



* Visibility: **public**
* This method is **static**.




### report

    \SYSTEM\SAI\JSON SYSTEM\SAI\saimod_sys_todo::report(string $message, \SYSTEM\SAI\array/JSON $data)

Save a Report to the ToDo Database



* Visibility: **public**
* This method is **static**.


#### Arguments
* $message **string** - &lt;p&gt;Message of the Report&lt;/p&gt;
* $data **SYSTEM\SAI\array/JSON** - &lt;p&gt;Data for the Report&lt;/p&gt;



### exception

    boolean SYSTEM\SAI\saimod_sys_todo::exception(\Exception $E, boolean $thrown, integer $type)

Save a Exception as ToDo in the Database
This is used as Errorhandler in some form.



* Visibility: **public**
* This method is **static**.


#### Arguments
* $E **Exception** - &lt;p&gt;Exception to be saved&lt;/p&gt;
* $thrown **boolean** - &lt;p&gt;Was the Exception thrown?&lt;/p&gt;
* $type **integer** - &lt;p&gt;Type of the Todo(Exception)&lt;/p&gt;



### get_apigroup

    integer SYSTEM\API\api_default_interface::get_apigroup()

API Group function - implement this function and return the Groupnumber



* Visibility: **public**
* This method is **static**.
* This method is defined by [SYSTEM\API\api_default_interface](SYSTEM-API-api_default_interface)




### get_default_state

    string SYSTEM\API\api_default_interface::get_default_state()

API Default State function - implement this function and return the String of the default-state



* Visibility: **public**
* This method is **static**.
* This method is defined by [SYSTEM\API\api_default_interface](SYSTEM-API-api_default_interface)




### get_class

    string SYSTEM\API\api_default::get_class()

API Class function - implement this function and return the Classname



* Visibility: **public**
* This method is **static**.
* This method is defined by [SYSTEM\API\api_default](SYSTEM-API-api_default)




### get_params

    array SYSTEM\SAI\SaiModule::get_params(array $params)

Fixes Classnames for sai postfield



* Visibility: **public**
* This method is **static**.
* This method is defined by [SYSTEM\SAI\SaiModule](SYSTEM-SAI-SaiModule)


#### Arguments
* $params **array** - &lt;p&gt;Params to be corrected&lt;/p&gt;



### default_page

    string SYSTEM\API\api_default_interface::default_page(string $_escaped_fragment_)

API Default Page function - implement this function and return the Default Page



* Visibility: **public**
* This method is **static**.
* This method is defined by [SYSTEM\API\api_default_interface](SYSTEM-API-api_default_interface)


#### Arguments
* $_escaped_fragment_ **string** - &lt;p&gt;Fragment from Hashbang Crawling&lt;/p&gt;



### static__escaped_fragment_

    string SYSTEM\API\api_default::static__escaped_fragment_(string $_escaped_fragment_)

Static Call handler for Hashbang-Crawling Requests



* Visibility: **public**
* This method is **static**.
* This method is defined by [SYSTEM\API\api_default](SYSTEM-API-api_default)


#### Arguments
* $_escaped_fragment_ **string** - &lt;p&gt;Hashbang-Encoded State&lt;/p&gt;



### call_cron

    \SYSTEM\API\JSON SYSTEM\API\api_system::call_cron()

System run Cron Call



* Visibility: **public**
* This method is **static**.
* This method is defined by [SYSTEM\API\api_system](SYSTEM-API-api_system)




### call_text

    \SYSTEM\API\JSON SYSTEM\API\api_system::call_text(mixed $request, \SYSTEM\API\lang $lang)

System Text Request Call



* Visibility: **public**
* This method is **static**.
* This method is defined by [SYSTEM\API\api_system](SYSTEM-API-api_system)


#### Arguments
* $request **mixed** - &lt;p&gt;Request String for Text API&lt;/p&gt;
* $lang **SYSTEM\API\lang** - &lt;p&gt;Request Language for given text&lt;/p&gt;



### call_files

    mixed SYSTEM\API\api_system::call_files(string $cat, string $id)

System File Request Call



* Visibility: **public**
* This method is **static**.
* This method is defined by [SYSTEM\API\api_system](SYSTEM-API-api_system)


#### Arguments
* $cat **string** - &lt;p&gt;File category&lt;/p&gt;
* $id **string** - &lt;p&gt;File name&lt;/p&gt;



### call_pages

    mixed SYSTEM\API\api_system::call_pages(integer $group, string $state)

System State-Pages Request Call



* Visibility: **public**
* This method is **static**.
* This method is defined by [SYSTEM\API\api_system](SYSTEM-API-api_system)


#### Arguments
* $group **integer** - &lt;p&gt;Page Group for Statesystem&lt;/p&gt;
* $state **string** - &lt;p&gt;Full name of the State.&lt;/p&gt;



### static__lang

    null SYSTEM\API\api_system::static__lang(\SYSTEM\API\lang $lang)

Static Call to change Language for the current Session/User



* Visibility: **public**
* This method is **static**.
* This method is defined by [SYSTEM\API\api_system](SYSTEM-API-api_system)


#### Arguments
* $lang **SYSTEM\API\lang** - &lt;p&gt;Language requested&lt;/p&gt;



### static__result

    null SYSTEM\API\api_system::static__result(\SYSTEM\API\result $result)

Static Call to change Result-Type for the current Session/User



* Visibility: **public**
* This method is **static**.
* This method is defined by [SYSTEM\API\api_system](SYSTEM-API-api_system)


#### Arguments
* $result **SYSTEM\API\result** - &lt;p&gt;Resulttype&lt;/p&gt;



### static__

    null SYSTEM\API\api_system::static__(mixed $_)

Static Time-Parameter _ Call to avoid caching and API Errors for JS requests



* Visibility: **public**
* This method is **static**.
* This method is defined by [SYSTEM\API\api_system](SYSTEM-API-api_system)


#### Arguments
* $_ **mixed** - &lt;p&gt;Anticaching Parameter of some Browsers&lt;/p&gt;



### call_bug

    null SYSTEM\API\api_system::call_bug(string $message, \SYSTEM\API\JSON $data)

API Bug Call to report Bugs



* Visibility: **public**
* This method is **static**.
* This method is defined by [SYSTEM\API\api_system](SYSTEM-API-api_system)


#### Arguments
* $message **string** - &lt;p&gt;Bugreport Message&lt;/p&gt;
* $data **SYSTEM\API\JSON** - &lt;p&gt;Bugreport Data&lt;/p&gt;



### call_cache

    mixed SYSTEM\API\api_system::call_cache(integer $id, \SYSTEM\API\sha1 $ident)

API Cache Call to request cached Data (usually js and css)



* Visibility: **public**
* This method is **static**.
* This method is defined by [SYSTEM\API\api_system](SYSTEM-API-api_system)


#### Arguments
* $id **integer** - &lt;p&gt;Cache id to be queried&lt;/p&gt;
* $ident **SYSTEM\API\sha1** - &lt;p&gt;Cache ident to be queried&lt;/p&gt;



### call_account_action_login

    \SYSTEM\API\JSON SYSTEM\API\api_login::call_account_action_login(string $username, \SYSTEM\API\sha1 $password_sha1, \SYSTEM\API\lang $locale)

System Account Login



* Visibility: **public**
* This method is **static**.
* This method is defined by [SYSTEM\API\api_login](SYSTEM-API-api_login)


#### Arguments
* $username **string** - &lt;p&gt;Username&lt;/p&gt;
* $password_sha1 **SYSTEM\API\sha1** - &lt;p&gt;User Password SHA1 String&lt;/p&gt;
* $locale **SYSTEM\API\lang** - &lt;p&gt;Locale which the User wants to login with&lt;/p&gt;



### call_account_action_logout

    \SYSTEM\API\JSON SYSTEM\API\api_login::call_account_action_logout()

System Account Logout



* Visibility: **public**
* This method is **static**.
* This method is defined by [SYSTEM\API\api_login](SYSTEM-API-api_login)




### call_account_action_isloggedin

    \SYSTEM\API\JSON SYSTEM\API\api_login::call_account_action_isloggedin()

System Account isloggedin check



* Visibility: **public**
* This method is **static**.
* This method is defined by [SYSTEM\API\api_login](SYSTEM-API-api_login)




### call_account_action_check

    \SYSTEM\API\JSON SYSTEM\API\api_login::call_account_action_check(integer $rightid)

System Account Right Check



* Visibility: **public**
* This method is **static**.
* This method is defined by [SYSTEM\API\api_login](SYSTEM-API-api_login)


#### Arguments
* $rightid **integer** - &lt;p&gt;RightID of the right to be checked&lt;/p&gt;



### call_account_action_create

    \SYSTEM\API\JSON SYSTEM\API\api_login::call_account_action_create(string $username, \SYSTEM\API\sha1 $password_sha1, \SYSTEM\API\email $email, \SYSTEM\API\lang $locale)

System Account Create



* Visibility: **public**
* This method is **static**.
* This method is defined by [SYSTEM\API\api_login](SYSTEM-API-api_login)


#### Arguments
* $username **string** - &lt;p&gt;Username&lt;/p&gt;
* $password_sha1 **SYSTEM\API\sha1** - &lt;p&gt;User Password SHA1 String&lt;/p&gt;
* $email **SYSTEM\API\email** - &lt;p&gt;Email of the new User&lt;/p&gt;
* $locale **SYSTEM\API\lang** - &lt;p&gt;Locale which the User wants to register or null for default language&lt;/p&gt;



### call_account_action_confirm_email

    \SYSTEM\API\JSON SYSTEM\API\api_login::call_account_action_confirm_email()

System Account Request Confirm EMail Token



* Visibility: **public**
* This method is **static**.
* This method is defined by [SYSTEM\API\api_login](SYSTEM-API-api_login)




### call_account_action_confirm

    \SYSTEM\API\JSON SYSTEM\API\api_login::call_account_action_confirm(string $token)

System Account Confirm Tokens



* Visibility: **public**
* This method is **static**.
* This method is defined by [SYSTEM\API\api_login](SYSTEM-API-api_login)


#### Arguments
* $token **string** - &lt;p&gt;Token to do specifics with your Account&lt;/p&gt;



### call_account_action_reset_password

    \SYSTEM\API\JSON SYSTEM\API\api_login::call_account_action_reset_password(string $username)

System Account Request Reset Password Token



* Visibility: **public**
* This method is **static**.
* This method is defined by [SYSTEM\API\api_login](SYSTEM-API-api_login)


#### Arguments
* $username **string** - &lt;p&gt;Username&lt;/p&gt;



### call_account_action_change_password

    \SYSTEM\API\JSON SYSTEM\API\api_login::call_account_action_change_password(string $old_password_sha1, string $new_password_sha1)

System Account Change Password



* Visibility: **public**
* This method is **static**.
* This method is defined by [SYSTEM\API\api_login](SYSTEM-API-api_login)


#### Arguments
* $old_password_sha1 **string** - &lt;p&gt;Users Old Password SHA1 String&lt;/p&gt;
* $new_password_sha1 **string** - &lt;p&gt;Users New Password SHA1 String&lt;/p&gt;



### call_account_action_change_email

    \SYSTEM\API\JSON SYSTEM\API\api_login::call_account_action_change_email(string $new_email)

System Account Request Change EMail Token



* Visibility: **public**
* This method is **static**.
* This method is defined by [SYSTEM\API\api_login](SYSTEM-API-api_login)


#### Arguments
* $new_email **string** - &lt;p&gt;Users new EMail Address&lt;/p&gt;


