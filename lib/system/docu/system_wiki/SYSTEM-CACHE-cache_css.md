SYSTEM\CACHE\cache_css
===============

CSS Cache Class provided by System for caching CSS in the Database.




* Class name: cache_css
* Namespace: SYSTEM\CACHE



Constants
----------


### CACHE_CSS

    const CACHE_CSS = 10







Methods
-------


### put

    mixed SYSTEM\CACHE\cache_css::put(\SYSTEM\CACHE\sha1 $ident, integer $data)

Put Data into the Cache



* Visibility: **public**
* This method is **static**.


#### Arguments
* $ident **SYSTEM\CACHE\sha1** - &lt;p&gt;String Identifier for the cached Content&lt;/p&gt;
* $data **integer** - &lt;p&gt;Data to cache&lt;/p&gt;



### get

    mixed SYSTEM\CACHE\cache_css::get(\SYSTEM\CACHE\sha1 $ident, boolean $header)

Get Data from Cache



* Visibility: **public**
* This method is **static**.


#### Arguments
* $ident **SYSTEM\CACHE\sha1** - &lt;p&gt;String Identifier for the cached Content&lt;/p&gt;
* $header **boolean** - &lt;p&gt;Send Header&lt;/p&gt;



### ident

    \SYSTEM\CACHE\sha1 SYSTEM\CACHE\cache_css::ident(array $files)

Calculate Ident for a list of Files



* Visibility: **public**
* This method is **static**.


#### Arguments
* $files **array** - &lt;p&gt;List of Files to be cached into one Cacheentry&lt;/p&gt;



### minify

    \SYSTEM\CACHE\url SYSTEM\CACHE\cache_css::minify(array $files)

Minify CSS and calculate URL from it



* Visibility: **public**
* This method is **static**.


#### Arguments
* $files **array** - &lt;p&gt;List of Files to be cached into one Cacheentry&lt;/p&gt;


