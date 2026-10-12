SYSTEM\CRON\cron
===============

Cron Class provided by System for Tasks occurring repeateadly.




* Class name: cron
* Namespace: SYSTEM\CRON







Methods
-------


### check

    boolean SYSTEM\CRON\cron::check(\SYSTEM\CRON\class $class)

Check if given Class is a compatible Cronjob



* Visibility: **public**
* This method is **static**.


#### Arguments
* $class **SYSTEM\CRON\class** - &lt;p&gt;Cronclass extending cronjob&lt;/p&gt;



### run

    \SYSTEM\CRON\JSON SYSTEM\CRON\cron::run()

Run all registered Cronjobs if its time to do so.



* Visibility: **public**
* This method is **static**.




### run_class

    \SYSTEM\CRON\JSON SYSTEM\CRON\cron::run_class($class)

Run a specific registered Cronjob by classname if its time to do so.



* Visibility: **public**
* This method is **static**.


#### Arguments
* $class **mixed**



### next

    \SYSTEM\CRON\time SYSTEM\CRON\cron::next(\SYSTEM\CRON\class $class)

Determine next run of a given Cronjob



* Visibility: **public**
* This method is **static**.


#### Arguments
* $class **SYSTEM\CRON\class** - &lt;p&gt;Cronjob class&lt;/p&gt;



### last

    \SYSTEM\CRON\time SYSTEM\CRON\cron::last(\SYSTEM\CRON\class $class)

Determine last run of a given Cronjob



* Visibility: **public**
* This method is **static**.


#### Arguments
* $class **SYSTEM\CRON\class** - &lt;p&gt;Cronjob class&lt;/p&gt;



### status

    boolean SYSTEM\CRON\cron::status(\SYSTEM\CRON\class $class, integer $status)

Updates the Status of a Cronjob



* Visibility: **private**
* This method is **static**.


#### Arguments
* $class **SYSTEM\CRON\class** - &lt;p&gt;Cronjob class&lt;/p&gt;
* $status **integer** - &lt;p&gt;Status to be written&lt;/p&gt;



### last_visit

    \SYSTEM\CRON\time SYSTEM\CRON\cron::last_visit()

Determines the time when the System-Cronjobs were executed the last time.



* Visibility: **public**
* This method is **static**.



