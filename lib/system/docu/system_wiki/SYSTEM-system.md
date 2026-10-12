SYSTEM\system
===============

System Class provided by System to start the environment (system clock &amp; config
aswell as optional includes) and handles the Systemwide Database Credentials




* Class name: system
* Namespace: SYSTEM







Methods
-------


### start

    null SYSTEM\system::start(array $config, boolean $short_exc, boolean $short_res, boolean $error_db, boolean $error_json)

Start the System Environment. This Function sums up many things needed to
be done after include of the autoload file.

Flushes given Config values
Starts the internal clock.
Sets Error-reporting level according to config
(opt)Allows to turn off optional includes which pollute global Namespace.
(opt)Register Error-Handler-DB-Writer to log System Events to the Database
(opt)Register Error-Handler-JSON-Output to return Errors as JSON.

Config has following format
array( array(ID, VALUE), array(ID, VALUE))
For IDs @see \SYSTEM\CONFIG\config_ids
Extend this class to define your own.

* Visibility: **public**
* This method is **static**.


#### Arguments
* $config **array** - &lt;p&gt;Configuration Array passed upon Enviroment Start&lt;/p&gt;
* $short_exc **boolean** - &lt;p&gt;Include Shortcut for System Log Classes in global Namespace&lt;/p&gt;
* $short_res **boolean** - &lt;p&gt;Include Shortcut for System Result Classes in global Namespace&lt;/p&gt;
* $error_db **boolean** - &lt;p&gt;Include Shortcut for System Log Classes in global Namespace&lt;/p&gt;
* $error_json **boolean** - &lt;p&gt;Include Shortcut for System Log Classes in global Namespace&lt;/p&gt;



### getSystemDBInfo

    object SYSTEM\system::getSystemDBInfo()

Returns the Database Connection from System Config.

Supports MYSQL and PostgreSQL

* Visibility: **public**
* This method is **static**.




### isSystemDbInfoPG

    boolean SYSTEM\system::isSystemDbInfoPG()

Check if the System-Environment-Wide Database Connection is MYSQL or PostgreSQL



* Visibility: **public**
* This method is **static**.




### register_errorhandler_jsonoutput

    null SYSTEM\system::register_errorhandler_jsonoutput()

Register the JSON Output Error Handle which will print all Errors as JSON
to the caller



* Visibility: **public**
* This method is **static**.




### register_errorhandler_dbwriter

    null SYSTEM\system::register_errorhandler_dbwriter()

Register the Database Writer Error Handle which will write all Catched
SystemExceptions to the Database



* Visibility: **public**
* This method is **static**.



