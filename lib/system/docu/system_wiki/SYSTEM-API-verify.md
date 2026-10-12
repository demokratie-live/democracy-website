SYSTEM\API\verify
===============

API default verify Class for Parameter validation




* Class name: verify
* Namespace: SYSTEM\API







Methods
-------


### ALL

    boolean SYSTEM\API\verify::ALL(mixed $param)

Verify All - everything is allowed



* Visibility: **public**
* This method is **static**.


#### Arguments
* $param **mixed** - &lt;p&gt;Input Paramter&lt;/p&gt;



### UINT

    boolean SYSTEM\API\verify::UINT(mixed $param)

Verify UINT - Positive Integer excluding 0



* Visibility: **public**
* This method is **static**.


#### Arguments
* $param **mixed** - &lt;p&gt;Input Paramter&lt;/p&gt;



### UINT0

    boolean SYSTEM\API\verify::UINT0(mixed $param)

Verify UINT0 - Positive Integer including 0



* Visibility: **public**
* This method is **static**.


#### Arguments
* $param **mixed** - &lt;p&gt;Input Paramter&lt;/p&gt;



### INT

    boolean SYSTEM\API\verify::INT(mixed $param)

Verify INT - all integers



* Visibility: **public**
* This method is **static**.


#### Arguments
* $param **mixed** - &lt;p&gt;Input Paramter&lt;/p&gt;



### TIMEUNIX

    boolean SYSTEM\API\verify::TIMEUNIX(mixed $param)

Verify TIMEUNIX - unixtimestamp number



* Visibility: **public**
* This method is **static**.


#### Arguments
* $param **mixed** - &lt;p&gt;Input Paramter&lt;/p&gt;



### DATE

    boolean SYSTEM\API\verify::DATE(mixed $param)

Verify DATE - string parseable as date



* Visibility: **public**
* This method is **static**.


#### Arguments
* $param **mixed** - &lt;p&gt;Input Paramter&lt;/p&gt;



### STRING

    boolean SYSTEM\API\verify::STRING(mixed $param)

Verify STRING - allow every string - thats all



* Visibility: **public**
* This method is **static**.


#### Arguments
* $param **mixed** - &lt;p&gt;Input Paramter&lt;/p&gt;



### BOOL

    boolean SYSTEM\API\verify::BOOL(mixed $param)

Verify BOOL - allow booleans



* Visibility: **public**
* This method is **static**.


#### Arguments
* $param **mixed** - &lt;p&gt;Input Paramter&lt;/p&gt;



### FLOAT

    boolean SYSTEM\API\verify::FLOAT(mixed $param)

Verify FLOAT - every float value



* Visibility: **public**
* This method is **static**.


#### Arguments
* $param **mixed** - &lt;p&gt;Input Paramter&lt;/p&gt;



### JSON

    boolean SYSTEM\API\verify::JSON(mixed $param)

Verify JSON - JSON format check



* Visibility: **public**
* This method is **static**.


#### Arguments
* $param **mixed** - &lt;p&gt;Input Paramter&lt;/p&gt;



### ARY

    boolean SYSTEM\API\verify::ARY(mixed $param)

Verify ARY - array check



* Visibility: **public**
* This method is **static**.


#### Arguments
* $param **mixed** - &lt;p&gt;Input Paramter&lt;/p&gt;



### LANG

    boolean SYSTEM\API\verify::LANG(mixed $param)

Verify LANG - verify supported languages



* Visibility: **public**
* This method is **static**.


#### Arguments
* $param **mixed** - &lt;p&gt;Input Paramter&lt;/p&gt;



### RESULT

    boolean SYSTEM\API\verify::RESULT(mixed $param)

Verify RESULT - verify possible resulttypes



* Visibility: **public**
* This method is **static**.


#### Arguments
* $param **mixed** - &lt;p&gt;Input Paramter&lt;/p&gt;



### EMAIL

    boolean SYSTEM\API\verify::EMAIL(mixed $param)

Verify EMAIL - verify email



* Visibility: **public**
* This method is **static**.


#### Arguments
* $param **mixed** - &lt;p&gt;Input Paramter&lt;/p&gt;


