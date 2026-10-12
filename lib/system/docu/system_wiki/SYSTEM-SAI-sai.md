SYSTEM\SAI\sai
===============

sai Class provided by System to register and manage saimods




* Class name: sai
* Namespace: SYSTEM\SAI





Properties
----------


### $module_start

    private mixed $module_start = '\SYSTEM\SAI\saistart_sys_sai'

string Classname of the Module which should be loaded at start



* Visibility: **private**
* This property is **static**.


### $modules

    private mixed $modules = array()

array Classnames of all registered Sai user Modules



* Visibility: **private**
* This property is **static**.


### $modules_sys

    private mixed $modules_sys = array()

array Classnames of all registered Sai system Modules



* Visibility: **private**
* This property is **static**.


Methods
-------


### check_module

    boolean SYSTEM\SAI\sai::check_module(string $module)

Check if a given SaiModuleClass is valid



* Visibility: **private**
* This method is **static**.


#### Arguments
* $module **string** - &lt;p&gt;Classname of the Module to be checked&lt;/p&gt;



### register_start

    null SYSTEM\SAI\sai::register_start(string $module)

Sets the Sai Startmodule



* Visibility: **public**
* This method is **static**.


#### Arguments
* $module **string** - &lt;p&gt;Classname of the Module to be Startmodule&lt;/p&gt;



### register

    null SYSTEM\SAI\sai::register(string $module)

Register a Sai user Module



* Visibility: **public**
* This method is **static**.


#### Arguments
* $module **string** - &lt;p&gt;Classname of the Module&lt;/p&gt;



### register_sys

    null SYSTEM\SAI\sai::register_sys(string $module)

Register a Sai system Module



* Visibility: **public**
* This method is **static**.


#### Arguments
* $module **string** - &lt;p&gt;Classname of the Module&lt;/p&gt;



### getStartModule

    string SYSTEM\SAI\sai::getStartModule()

Get the classname of the Startmodule



* Visibility: **public**
* This method is **static**.




### getModules

    array SYSTEM\SAI\sai::getModules()

Get all classnames of the registered user saimods



* Visibility: **public**
* This method is **static**.




### getSysModules

    array SYSTEM\SAI\sai::getSysModules()

Get all classnames of the registered system saimods



* Visibility: **public**
* This method is **static**.




### getAllModules

    array SYSTEM\SAI\sai::getAllModules()

Get all classnames of all the registered saimods



* Visibility: **public**
* This method is **static**.



