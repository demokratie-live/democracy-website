SYSTEM\LOG\error_handler_dbwriter
===============

Error handler Class provided by System to log to the database.

Register this before every other handler, cuz this will need to handle every single error.


* Class name: error_handler_dbwriter
* Namespace: SYSTEM\LOG
* This class implements: [SYSTEM\LOG\error_handler](SYSTEM-LOG-error_handler)






Methods
-------


### CALL

    boolean SYSTEM\LOG\error_handler::CALL(\Exception $E, boolean $thrown)

Call function to handle exceptions



* Visibility: **public**
* This method is **static**.
* This method is defined by [SYSTEM\LOG\error_handler](SYSTEM-LOG-error_handler)


#### Arguments
* $E **Exception** - &lt;p&gt;Thrown Execption to be handled&lt;/p&gt;
* $thrown **boolean** - &lt;p&gt;Was the Exception thrown?&lt;/p&gt;


