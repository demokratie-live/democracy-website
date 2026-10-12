JsonResult
===============

JsonResult Class provided by System to return Data as JSON or MSGPACK.




* Class name: JsonResult
* Namespace: 
* Parent class: [SYSTEM\LOG\JsonResult](SYSTEM-LOG-JsonResult)







Methods
-------


### toString

    string SYSTEM\LOG\JsonResult::toString(array $json_array, boolean $status, integer $start_time)

Retun JsonResult with data given by array



* Visibility: **public**
* This method is **static**.
* This method is defined by [SYSTEM\LOG\JsonResult](SYSTEM-LOG-JsonResult)


#### Arguments
* $json_array **array** - &lt;p&gt;Data which should be included in the JSOn Result.&lt;/p&gt;
* $status **boolean** - &lt;p&gt;true or false depending on success&lt;/p&gt;
* $start_time **integer** - &lt;p&gt;To calculate Querytime - if Null System time is used.&lt;/p&gt;



### error

    string SYSTEM\LOG\JsonResult::error(\Exception $e)

Retun JsonResult for given Exception



* Visibility: **public**
* This method is **static**.
* This method is defined by [SYSTEM\LOG\JsonResult](SYSTEM-LOG-JsonResult)


#### Arguments
* $e **Exception** - &lt;p&gt;Exception to be convered.&lt;/p&gt;



### ok

    string SYSTEM\LOG\JsonResult::ok()

Retun JsonResult with success status



* Visibility: **public**
* This method is **static**.
* This method is defined by [SYSTEM\LOG\JsonResult](SYSTEM-LOG-JsonResult)




### fail

    string SYSTEM\LOG\JsonResult::fail()

Retun JsonResult with failure status



* Visibility: **public**
* This method is **static**.
* This method is defined by [SYSTEM\LOG\JsonResult](SYSTEM-LOG-JsonResult)



