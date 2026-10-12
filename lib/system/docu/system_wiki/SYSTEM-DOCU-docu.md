SYSTEM\DOCU\docu
===============

Docu Class provided by System to register docu_packages.




* Class name: docu
* Namespace: SYSTEM\DOCU





Properties
----------


### $docu_packages

    private mixed $docu_packages = array()

array Variable to store all registred docu_package classes



* Visibility: **private**
* This property is **static**.


Methods
-------


### register

    null SYSTEM\DOCU\docu::register(string $docu_package)

Register a docu package



* Visibility: **public**
* This method is **static**.


#### Arguments
* $docu_package **string** - &lt;p&gt;Classname of Docu Package to be registered&lt;/p&gt;



### getAll

    array SYSTEM\DOCU\docu::getAll()

Get all registered docu packages



* Visibility: **public**
* This method is **static**.




### get

    array SYSTEM\DOCU\docu::get(string $id)

Get a specific docu package by classname



* Visibility: **public**
* This method is **static**.


#### Arguments
* $id **string** - &lt;p&gt;Class name of the package to be found&lt;/p&gt;



### generate

    array SYSTEM\DOCU\docu::generate(string $id)

Generate HTML Docu by docu classname



* Visibility: **public**
* This method is **static**.


#### Arguments
* $id **string** - &lt;p&gt;Classname of Docu Package to generated&lt;/p&gt;



### generate_md

    array SYSTEM\DOCU\docu::generate_md(string $id)

Generate Markdown Docu by docu classname



* Visibility: **public**
* This method is **static**.


#### Arguments
* $id **string** - &lt;p&gt;Classname of Docu Package to generated&lt;/p&gt;


