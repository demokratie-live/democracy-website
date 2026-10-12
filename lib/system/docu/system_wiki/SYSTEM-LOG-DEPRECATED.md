SYSTEM\LOG\DEPRECATED
===============

Deprecated Log Class provided by System for marking code as Deprecated.

All other log Classes are derived from this.


* Class name: DEPRECATED
* Namespace: SYSTEM\LOG
* Parent class: [SYSTEM\LOG\TODO](SYSTEM-LOG-TODO)





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
* This method is defined by [SYSTEM\LOG\SYSTEM_EXCEPTION](SYSTEM-LOG-SYSTEM_EXCEPTION)


#### Arguments
* $message **string** - &lt;p&gt;Error Message&lt;/p&gt;
* $code **integer** - &lt;p&gt;Error Code&lt;/p&gt;
* $previous **Exception** - &lt;p&gt;Previous Error leading to this one.&lt;/p&gt;


