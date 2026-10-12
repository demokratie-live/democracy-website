SYSTEM\autoload
===============

autoload Class provided by System to Autoload Classes




* Class name: autoload
* Namespace: SYSTEM





Properties
----------


### $files

    private mixed $files = array()

array Registered Files Format array(class, namespace, file)



* Visibility: **private**
* This property is **static**.


### $folders

    private mixed $folders = array()

array Registered Folders Format array(class, namespace, folder)



* Visibility: **private**
* This property is **static**.


### $func

    private mixed $func = array()

string Registered Func Format array(namespace, func)



* Visibility: **private**
* This property is **static**.


Methods
-------


### getClassFromFile

    string SYSTEM\autoload::getClassFromFile(string $file)

Get the Classname of a File by removing its extension and containing folders.



* Visibility: **private**
* This method is **static**.


#### Arguments
* $file **string** - &lt;p&gt;Filepath to be reduced to classname&lt;/p&gt;



### getClassNamespaceFromClass

    array SYSTEM\autoload::getClassNamespaceFromClass(string $class)

Seperates Class and Namespace of a combined string.



* Visibility: **private**
* This method is **static**.


#### Arguments
* $class **string** - &lt;p&gt;Class including possible Namespaces&lt;/p&gt;



### autoload_

    boolean SYSTEM\autoload::autoload_(string $class, string $namespace)

The autoload Feature. Searches within all registered file, folders and
functions if a matching class can be found, respecting namespaces in the
process.



* Visibility: **private**
* This method is **static**.


#### Arguments
* $class **string** - &lt;p&gt;Class to be autoloaded&lt;/p&gt;
* $namespace **string** - &lt;p&gt;Namespace of the Request&lt;/p&gt;



### registerFile

    null SYSTEM\autoload::registerFile(string $file, string $namespace)

Registers a file to the autoload feature
The file has to be named class.php



* Visibility: **public**
* This method is **static**.


#### Arguments
* $file **string** - &lt;p&gt;Filepath to be autoloaded from&lt;/p&gt;
* $namespace **string** - &lt;p&gt;Namespace of the File&lt;/p&gt;



### registerFolder

    null SYSTEM\autoload::registerFolder(string $folder, string $namespace)

Registers a folder to the autoload feature
All Classes within that Folder can  be loaded if
the file is named: class.php



* Visibility: **public**
* This method is **static**.


#### Arguments
* $folder **string** - &lt;p&gt;Folderpath to be autoloaded from&lt;/p&gt;
* $namespace **string** - &lt;p&gt;Namespace of the Folder&lt;/p&gt;



### registerFunc

    null SYSTEM\autoload::registerFunc(string $func, string $namespace)

Registers a function to the autoload feature



* Visibility: **public**
* This method is **static**.


#### Arguments
* $func **string** - &lt;p&gt;Function to be &quot;autoloaded&quot;&lt;/p&gt;
* $namespace **string** - &lt;p&gt;Namespace of the Function&lt;/p&gt;



### register_autoload

    null SYSTEM\autoload::register_autoload()

Registers the Autoload Handler against the PHP Environment



* Visibility: **public**
* This method is **static**.




### autoload

    boolean SYSTEM\autoload::autoload(string $class)

Autoloads a class. This function is registered against the PHP Environment.

It is called from PHP if a new class is required.

* Visibility: **public**
* This method is **static**.


#### Arguments
* $class **string** - &lt;p&gt;Class to be autoloaded&lt;/p&gt;


