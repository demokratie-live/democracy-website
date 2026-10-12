SYSTEM\locale
===============

locale Class provided by System to start manage Session Language and check a
language against the languages configured in the configuration




* Class name: locale
* Namespace: SYSTEM



Constants
----------


### SESSION_KEY

    const SESSION_KEY = 'locale'







Methods
-------


### set

    boolean SYSTEM\locale::set(string $lang)

Set the Session language
If the User is logged in it can trigger an Database update



* Visibility: **public**
* This method is **static**.


#### Arguments
* $lang **string** - &lt;p&gt;Language&lt;/p&gt;



### get

    string SYSTEM\locale::get()

Get the Session language
If no language is saved in the Session it is set to the
System-Default-Session defined in the config.



* Visibility: **public**
* This method is **static**.




### isLang

    boolean SYSTEM\locale::isLang(string $lang)

Checks Language against languages defined in the config.



* Visibility: **public**
* This method is **static**.


#### Arguments
* $lang **string** - &lt;p&gt;Language to be checked&lt;/p&gt;


