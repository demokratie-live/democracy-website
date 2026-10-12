SYSTEM\PSAI
===============

System SAI Path Class provided by System.




* Class name: PSAI
* Namespace: SYSTEM
* Parent class: [SYSTEM\PATH](SYSTEM-PATH)





Properties
----------


### $basepath

    private mixed $basepath = NULL

array Variable to store the base path object of the path object



* Visibility: **private**


### $path

    private mixed $path = NULL

array Variable to store the path of the path object



* Visibility: **private**


### $subpath

    private mixed $subpath = NULL

array Variable to store the sub path of the path object



* Visibility: **private**


Methods
-------


### __construct

    mixed SYSTEM\PATH::__construct(\SYSTEM\PATH $basepath, string $path, string $subpath)

Construct the path with given basepath, path and subpath



* Visibility: **public**
* This method is defined by [SYSTEM\PATH](SYSTEM-PATH)


#### Arguments
* $basepath **[SYSTEM\PATH](SYSTEM-PATH)** - &lt;p&gt;Basepath&lt;/p&gt;
* $path **string** - &lt;p&gt;Path&lt;/p&gt;
* $subpath **string** - &lt;p&gt;Subpath&lt;/p&gt;



### SERVERPATH

    string SYSTEM\PATH::SERVERPATH()

Calculate Serverpath of the given pathobject



* Visibility: **public**
* This method is defined by [SYSTEM\PATH](SYSTEM-PATH)




### WEBPATH

    string SYSTEM\PATH::WEBPATH(boolean $mask)

Calculate Webpath of the given pathobject



* Visibility: **public**
* This method is defined by [SYSTEM\PATH](SYSTEM-PATH)


#### Arguments
* $mask **boolean** - &lt;p&gt;Mask the path using System cache functionality&lt;/p&gt;


