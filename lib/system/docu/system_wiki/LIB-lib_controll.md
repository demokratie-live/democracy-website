LIB\lib_controll
===============

lib_controll Class provided by System to register libs.




* Class name: lib_controll
* Namespace: LIB





Properties
----------


### $libs

    private mixed $libs = array()

array Variable to store all registred libs



* Visibility: **private**
* This property is **static**.


Methods
-------


### check_lib

    boolean LIB\lib_controll::check_lib(string $lib)

Check if given class is a valid lib



* Visibility: **private**
* This method is **static**.


#### Arguments
* $lib **string** - &lt;p&gt;Lib Class&lt;/p&gt;



### register

    null LIB\lib_controll::register(string $classname)

Register given class as lib



* Visibility: **public**
* This method is **static**.


#### Arguments
* $classname **string** - &lt;p&gt;Lib Class&lt;/p&gt;



### all

    array LIB\lib_controll::all()

Get all registered libs available



* Visibility: **public**
* This method is **static**.



