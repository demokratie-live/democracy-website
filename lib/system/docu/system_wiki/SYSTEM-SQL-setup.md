SYSTEM\SQL\setup
===============

Setup Class provided by System to execute QIs defining sql files to be setup on the database




* Class name: setup
* Namespace: SYSTEM\SQL





Properties
----------


### $qis

    private mixed $qis = array()

array Registered QIs to be executed on setup



* Visibility: **private**
* This property is **static**.


Methods
-------


### check_qi

    boolean SYSTEM\SQL\setup::check_qi(string $qi)

Check if a given QI classname is a valid QI



* Visibility: **private**
* This method is **static**.


#### Arguments
* $qi **string** - &lt;p&gt;Classname of the QI&lt;/p&gt;



### register

    null SYSTEM\SQL\setup::register(string $qi)

Register a given QI classname



* Visibility: **public**
* This method is **static**.


#### Arguments
* $qi **string** - &lt;p&gt;Classname of the QI&lt;/p&gt;



### install

    array SYSTEM\SQL\setup::install()

Execute all registered QIs installing the Database



* Visibility: **public**
* This method is **static**.



