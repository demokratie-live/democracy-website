SYSTEM\time
===============

Time Class provided by System for Runtime Clock and time sting operations




* Class name: time
* Namespace: SYSTEM





Properties
----------


### $start_time

    private mixed $start_time

int System time - runtime clock



* Visibility: **private**
* This property is **static**.


Methods
-------


### start

    null SYSTEM\time::start()

Start the Runtime Clock



* Visibility: **public**
* This method is **static**.




### getStartTime

    integer SYSTEM\time::getStartTime()

Retrieve the Runtime Timestamp



* Visibility: **public**
* This method is **static**.




### time_ago_string

    string SYSTEM\time::time_ago_string(integer $time)

Calaculate the time which has passed for given timestamp.

Scaling from seconds to years. Required strings from tag
'time' to be included.

* Visibility: **public**
* This method is **static**.


#### Arguments
* $time **integer** - &lt;p&gt;Unixtimestamp to be converted&lt;/p&gt;



### time_in_string

    string SYSTEM\time::time_in_string(integer $time)

Calaculate the time which has to pass till the given timestamp.

Scaling from seconds to years. Required strings from tag
'time' to be included.

* Visibility: **public**
* This method is **static**.


#### Arguments
* $time **integer** - &lt;p&gt;Unixtimestamp to be converted&lt;/p&gt;


