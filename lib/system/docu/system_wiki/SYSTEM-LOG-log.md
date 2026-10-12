SYSTEM\LOG\log
===============

Log Class provided by System to manage log handlers.




* Class name: log
* Namespace: SYSTEM\LOG



Constants
----------


### HANDLER_FUNC_CALL

    const HANDLER_FUNC_CALL = 'CALL'





Properties
----------


### $handlers

    private mixed $handlers = array()

array Variable to store all registred log handlers



* Visibility: **private**
* This property is **static**.


Methods
-------


### registerHandler

    null SYSTEM\LOG\log::registerHandler(\SYSTEM\LOG\class $handler)

Register a Log Handler



* Visibility: **public**
* This method is **static**.


#### Arguments
* $handler **SYSTEM\LOG\class** - &lt;p&gt;Classname of the handler to be registered&lt;/p&gt;



### call_handlers

    boolean SYSTEM\LOG\log::call_handlers(\Exception $E, boolean $thrown)

Call handlers function upon error



* Visibility: **private**
* This method is **static**.


#### Arguments
* $E **Exception** - &lt;p&gt;Thrown Execption to be handled&lt;/p&gt;
* $thrown **boolean** - &lt;p&gt;Was the Exception thrown?&lt;/p&gt;



### __exception_handler

    boolean SYSTEM\LOG\log::__exception_handler(\Exception $E, boolean $thrown)

Exception Handler for System-log handling



* Visibility: **public**
* This method is **static**.


#### Arguments
* $E **Exception** - &lt;p&gt;Thrown Execption to be handled&lt;/p&gt;
* $thrown **boolean** - &lt;p&gt;Was the Exception thrown?&lt;/p&gt;



### __error_handler

    boolean SYSTEM\LOG\log::__error_handler(integer $code, string $message, string $file, string $line, boolean $thrown)

Error Handler for System-log handling



* Visibility: **public**
* This method is **static**.


#### Arguments
* $code **integer** - &lt;p&gt;Errorcode&lt;/p&gt;
* $message **string** - &lt;p&gt;Error Message&lt;/p&gt;
* $file **string** - &lt;p&gt;Error File&lt;/p&gt;
* $line **string** - &lt;p&gt;Error File-Line&lt;/p&gt;
* $thrown **boolean** - &lt;p&gt;Was the Error thrown?&lt;/p&gt;



### __shutdown_handler

    boolean SYSTEM\LOG\log::__shutdown_handler(boolean $thrown)

Shutdown Handler for System-log handling



* Visibility: **public**
* This method is **static**.


#### Arguments
* $thrown **boolean** - &lt;p&gt;Was the Error thrown?&lt;/p&gt;



### __fatal_error_handler

    string SYSTEM\LOG\log::__fatal_error_handler(string $bufferContent, boolean $thrown)

Fatal Error Handler for System-log handling
(unused - experimental)



* Visibility: **public**
* This method is **static**.


#### Arguments
* $bufferContent **string** - &lt;p&gt;Website contens before sent to user&lt;/p&gt;
* $thrown **boolean** - &lt;p&gt;Was the Error thrown?&lt;/p&gt;


