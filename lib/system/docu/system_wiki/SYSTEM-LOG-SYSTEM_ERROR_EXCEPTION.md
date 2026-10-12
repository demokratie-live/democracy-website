SYSTEM\LOG\SYSTEM_ERROR_EXCEPTION
===============

System Exception Class provided by System for logging all kinds of System Exceptions.

All other error exception Classes are derived from this.


* Class name: SYSTEM_ERROR_EXCEPTION
* Namespace: SYSTEM\LOG
* Parent class: ErrorException





Properties
----------


### $logged

    public mixed $logged = false

bool Variable to store if the Exception was logged already



* Visibility: **public**


Methods
-------


### __construct

    mixed SYSTEM\LOG\SYSTEM_ERROR_EXCEPTION::__construct(string $message, integer $code, integer $severity, string $filename, integer $lineno, \Exception $previous)

Construct the Error



* Visibility: **public**


#### Arguments
* $message **string** - &lt;p&gt;Error Message&lt;/p&gt;
* $code **integer** - &lt;p&gt;Error Code&lt;/p&gt;
* $severity **integer** - &lt;p&gt;Severity of the Error&lt;/p&gt;
* $filename **string** - &lt;p&gt;Filename where the Error occurred&lt;/p&gt;
* $lineno **integer** - &lt;p&gt;Line number where the Error occurred&lt;/p&gt;
* $previous **Exception** - &lt;p&gt;Previous Error leading to this one.&lt;/p&gt;


