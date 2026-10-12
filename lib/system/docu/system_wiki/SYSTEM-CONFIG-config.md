SYSTEM\CONFIG\config
===============

Config Class provided by System for configuration of the System Environment.




* Class name: config
* Namespace: SYSTEM\CONFIG





Properties
----------


### $config

    private mixed $config

array Holding all the Config Data



* Visibility: **private**
* This property is **static**.


Methods
-------


### get

    mixed SYSTEM\CONFIG\config::get(integer $config_id)

Get Config Setting



* Visibility: **public**
* This method is **static**.


#### Arguments
* $config_id **integer** - &lt;p&gt;Config ID to be retrieved&lt;/p&gt;



### set

    NULL SYSTEM\CONFIG\config::set(integer $config_id, mixed $value)

Set Config Setting



* Visibility: **public**
* This method is **static**.


#### Arguments
* $config_id **integer** - &lt;p&gt;Config ID to be written&lt;/p&gt;
* $value **mixed** - &lt;p&gt;Config Value to be written&lt;/p&gt;



### setArray

    NULL SYSTEM\CONFIG\config::setArray(array $id_value_array)

Set Array of Config Settings



* Visibility: **public**
* This method is **static**.


#### Arguments
* $id_value_array **array** - &lt;p&gt;Array containing Config IDs as Key and Value as Value to that Key. array( array(ID, VALUE), array(ID, VALUE))&lt;/p&gt;


