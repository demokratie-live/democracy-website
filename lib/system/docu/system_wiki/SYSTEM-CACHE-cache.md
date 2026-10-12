SYSTEM\CACHE\cache
===============

Cache Class provided by System for caching in the Database.




* Class name: cache
* Namespace: SYSTEM\CACHE







Methods
-------


### get

    mixed SYSTEM\CACHE\cache::get(integer $cache, \SYSTEM\CACHE\sha1 $ident, boolean $header)

Get Data from Cache



* Visibility: **public**
* This method is **static**.


#### Arguments
* $cache **integer** - &lt;p&gt;Cache Group to query&lt;/p&gt;
* $ident **SYSTEM\CACHE\sha1** - &lt;p&gt;String Identifier for the cached Content&lt;/p&gt;
* $header **boolean** - &lt;p&gt;Send Header&lt;/p&gt;



### put

    mixed SYSTEM\CACHE\cache::put(integer $cache, \SYSTEM\CACHE\sha1 $ident, string $type, string $data, boolean $fail_on_exist)

Put Data into the Cache



* Visibility: **public**
* This method is **static**.


#### Arguments
* $cache **integer** - &lt;p&gt;Cache Group to put Data to&lt;/p&gt;
* $ident **SYSTEM\CACHE\sha1** - &lt;p&gt;String Identifier for the Content&lt;/p&gt;
* $type **string** - &lt;p&gt;String representing the Header-Type which will be sent with the content eg. JS for javascript&lt;/p&gt;
* $data **string** - &lt;p&gt;Content to be cached&lt;/p&gt;
* $fail_on_exist **boolean** - &lt;p&gt;Fail on existing record&lt;/p&gt;



### del

    boolean SYSTEM\CACHE\cache::del(integer $cache, \SYSTEM\CACHE\sha1 $ident)

Delete Data from Cache



* Visibility: **public**
* This method is **static**.


#### Arguments
* $cache **integer** - &lt;p&gt;Cache Group to delete Data from&lt;/p&gt;
* $ident **SYSTEM\CACHE\sha1** - &lt;p&gt;String Identifier for the Content&lt;/p&gt;


