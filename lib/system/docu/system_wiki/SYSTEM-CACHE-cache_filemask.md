SYSTEM\CACHE\cache_filemask
===============

File Cache Class provided by System for hiding Filepaths on the Server.




* Class name: cache_filemask
* Namespace: SYSTEM\CACHE



Constants
----------


### CACHE_FILEMASK

    const CACHE_FILEMASK = 12







Methods
-------


### put

    mixed SYSTEM\CACHE\cache_filemask::put(\SYSTEM\CACHE\sha1 $file)

Put Data into the Cache
Remark: Saves only the path into the Cache, not the File itself



* Visibility: **public**
* This method is **static**.


#### Arguments
* $file **SYSTEM\CACHE\sha1** - &lt;p&gt;String Filepath of Content&lt;/p&gt;



### get

    mixed SYSTEM\CACHE\cache_filemask::get(\SYSTEM\CACHE\sha1 $ident, boolean $header)

Get Data from Cache



* Visibility: **public**
* This method is **static**.


#### Arguments
* $ident **SYSTEM\CACHE\sha1** - &lt;p&gt;String Identifier for the cached Content&lt;/p&gt;
* $header **boolean** - &lt;p&gt;Send Header&lt;/p&gt;



### ident

    \SYSTEM\CACHE\sha1 SYSTEM\CACHE\cache_filemask::ident(array $file)

Calculate Ident for a File



* Visibility: **public**
* This method is **static**.


#### Arguments
* $file **array** - &lt;p&gt;Filepath to be cached&lt;/p&gt;


