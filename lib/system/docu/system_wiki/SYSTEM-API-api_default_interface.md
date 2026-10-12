SYSTEM\API\api_default_interface
===============

api_default Interface used internally in api_default Class
can be used insted of api_default if hashbang mechanic should not be used.




* Interface name: api_default_interface
* Namespace: SYSTEM\API
* This is an **interface**






Methods
-------


### get_apigroup

    integer SYSTEM\API\api_default_interface::get_apigroup()

API Group function - implement this function and return the Groupnumber



* Visibility: **public**
* This method is **static**.




### get_default_state

    string SYSTEM\API\api_default_interface::get_default_state()

API Default State function - implement this function and return the String of the default-state



* Visibility: **public**
* This method is **static**.




### default_page

    string SYSTEM\API\api_default_interface::default_page(string $_escaped_fragment_)

API Default Page function - implement this function and return the Default Page



* Visibility: **public**
* This method is **static**.


#### Arguments
* $_escaped_fragment_ **string** - &lt;p&gt;Fragment from Hashbang Crawling&lt;/p&gt;


