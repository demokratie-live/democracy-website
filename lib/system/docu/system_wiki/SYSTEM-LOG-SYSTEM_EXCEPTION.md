SYSTEM\LOG\SYSTEM_EXCEPTION
===============

System Exception Class provided by System for logging all kinds of System Exceptions.

All other log Classes are derived from this.


* Class name: SYSTEM_EXCEPTION
* Namespace: SYSTEM\LOG
* Parent class: Exception





Properties
----------


### $logged

    public mixed $logged = false

bool Variable to store if the Exception was logged already



* Visibility: **public**


### $todo_logged

    public mixed $todo_logged = false

bool Variable to store if the Exceptions was logged as Todo



* Visibility: **public**


Methods
-------


### __construct

    mixed SYSTEM\LOG\SYSTEM_EXCEPTION::__construct(string $message, integer $code, \Exception $previous)

Construct the Error



* Visibility: **public**


#### Arguments
* $message **string** - &lt;p&gt;Error Message&lt;/p&gt;
* $code **integer** - &lt;p&gt;Error Code&lt;/p&gt;
* $previous **Exception** - &lt;p&gt;Previous Error leading to this one.&lt;/p&gt;


