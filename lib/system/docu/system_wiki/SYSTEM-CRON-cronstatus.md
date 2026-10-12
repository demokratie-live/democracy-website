SYSTEM\CRON\cronstatus
===============

Cronstatus Class provided by System for Cronjob stati.




* Class name: cronstatus
* Namespace: SYSTEM\CRON



Constants
----------


### CRON_STATUS_SUCCESFULLY

    const CRON_STATUS_SUCCESFULLY = 0





### CRON_STATUS_RUNNING

    const CRON_STATUS_RUNNING = 1





### CRON_STATUS_FAIL

    const CRON_STATUS_FAIL = 2





### CRON_STATUS_FAIL_CLASS

    const CRON_STATUS_FAIL_CLASS = 3





### CRON_STATUS_USER_STATES

    const CRON_STATUS_USER_STATES = 99







Methods
-------


### text

    string SYSTEM\CRON\cronstatus::text(integer $status)

Convert Cron Status to a text value.



* Visibility: **public**
* This method is **static**.


#### Arguments
* $status **integer** - &lt;p&gt;Value from this Class&lt;/p&gt;


