SYSTEM\CACHE\cache_scss
===============

SCSS Cache Class provided by System for compiling and caching SCSS in the Database.




* Class name: cache_scss
* Namespace: SYSTEM\CACHE



Constants
----------


### CACHE_SCSS

    const CACHE_SCSS = 1







Methods
-------


### put

    mixed SYSTEM\CACHE\cache_scss::put(\SYSTEM\CACHE\sha1 $file, integer $data)

Put Data into the Cache



* Visibility: **public**
* This method is **static**.


#### Arguments
* $file **SYSTEM\CACHE\sha1** - &lt;p&gt;Filepath of the Content&lt;/p&gt;
* $data **integer** - &lt;p&gt;Data to cache&lt;/p&gt;



### get

    mixed SYSTEM\CACHE\cache_scss::get(\SYSTEM\CACHE\sha1 $file, boolean $header)

Get Data from Cache



* Visibility: **public**
* This method is **static**.


#### Arguments
* $file **SYSTEM\CACHE\sha1** - &lt;p&gt;Filepath for the cached Content&lt;/p&gt;
* $header **boolean** - &lt;p&gt;Send Header&lt;/p&gt;



### ident

    \SYSTEM\CACHE\sha1 SYSTEM\CACHE\cache_scss::ident(string $file)

Calculate Ident for a File



* Visibility: **public**
* This method is **static**.


#### Arguments
* $file **string** - &lt;p&gt;Filepath to be cached&lt;/p&gt;



### url

    \SYSTEM\CACHE\url SYSTEM\CACHE\cache_scss::url(array $file)

Calculate URL for a File



* Visibility: **public**
* This method is **static**.


#### Arguments
* $file **array** - &lt;p&gt;Filepath to be cached&lt;/p&gt;


