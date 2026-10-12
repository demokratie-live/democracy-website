SYSTEM\LOG\error_handler
===============

Error handler Interface provided by System to derive your own loghandlers from.




* Interface name: error_handler
* Namespace: SYSTEM\LOG
* This is an **interface**






Methods
-------


### CALL

    boolean SYSTEM\LOG\error_handler::CALL(\Exception $E, boolean $thrown)

Call function to handle exceptions



* Visibility: **public**
* This method is **static**.


#### Arguments
* $E **Exception** - &lt;p&gt;Thrown Execption to be handled&lt;/p&gt;
* $thrown **boolean** - &lt;p&gt;Was the Exception thrown?&lt;/p&gt;


