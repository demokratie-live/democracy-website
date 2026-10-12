SYSTEM\CRON\crontime
===============

Crontime Class provided by System for Cronjob time calculation.




* Class name: crontime
* Namespace: SYSTEM\CRON







Methods
-------


### next

    \SYSTEM\CRON\time SYSTEM\CRON\crontime::next(\SYSTEM\CRON\time $base_time, integer $min, integer $hour, integer $day, integer $day_week, integer $month)

Determine next time based on a basetime and crontab-style modificators



* Visibility: **public**
* This method is **static**.


#### Arguments
* $base_time **SYSTEM\CRON\time** - &lt;p&gt;Time which the calculation should be based upon&lt;/p&gt;
* $min **integer** - &lt;p&gt;Minutes-Modificator for next run&lt;/p&gt;
* $hour **integer** - &lt;p&gt;Hour-Modificator for next run&lt;/p&gt;
* $day **integer** - &lt;p&gt;Day-Modificator for next run&lt;/p&gt;
* $day_week **integer** - &lt;p&gt;Day-Of-The-Week-Modificator for next run&lt;/p&gt;
* $month **integer** - &lt;p&gt;Month-Modificator for next run&lt;/p&gt;



### last

    \SYSTEM\CRON\time SYSTEM\CRON\crontime::last(\SYSTEM\CRON\time $base_time, integer $min, integer $hour, integer $day, integer $day_week, integer $month)

Determine last time based on a basetime and crontab-style modificators



* Visibility: **public**
* This method is **static**.


#### Arguments
* $base_time **SYSTEM\CRON\time** - &lt;p&gt;Time which the calculation should be based upon&lt;/p&gt;
* $min **integer** - &lt;p&gt;Minutes-Modificator for last run&lt;/p&gt;
* $hour **integer** - &lt;p&gt;Hour-Modificator for last run&lt;/p&gt;
* $day **integer** - &lt;p&gt;Day-Modificator for last run&lt;/p&gt;
* $day_week **integer** - &lt;p&gt;Day-Of-The-Week-Modificator for last run&lt;/p&gt;
* $month **integer** - &lt;p&gt;Month-Modificator for last run&lt;/p&gt;



### check

    boolean SYSTEM\CRON\crontime::check(\SYSTEM\CRON\time $base_time, \SYSTEM\CRON\time $last_run, integer $min, integer $hour, integer $day, integer $day_week, integer $month)

Determine if time for next run lies in the past based on a lastrun,
a basetime and crontab-style modificators



* Visibility: **public**
* This method is **static**.


#### Arguments
* $base_time **SYSTEM\CRON\time** - &lt;p&gt;Time upon which is checked if the calculated time is in the past&lt;/p&gt;
* $last_run **SYSTEM\CRON\time** - &lt;p&gt;Time which the calculation should be based upon&lt;/p&gt;
* $min **integer** - &lt;p&gt;Minutes-Modificator for next run&lt;/p&gt;
* $hour **integer** - &lt;p&gt;Hour-Modificator for next run&lt;/p&gt;
* $day **integer** - &lt;p&gt;Day-Modificator for next run&lt;/p&gt;
* $day_week **integer** - &lt;p&gt;Day-Of-The-Week-Modificator for next run&lt;/p&gt;
* $month **integer** - &lt;p&gt;Month-Modificator for next run&lt;/p&gt;



### check_now

    boolean SYSTEM\CRON\crontime::check_now(\SYSTEM\CRON\time $last_run, integer $min, integer $hour, integer $day, integer $day_week, integer $month)

Determine if time for next run lies in the past based on a lastrun and
crontab-style modificators using system-time as compare-time.



* Visibility: **public**
* This method is **static**.


#### Arguments
* $last_run **SYSTEM\CRON\time** - &lt;p&gt;Time which the calculation should be based upon&lt;/p&gt;
* $min **integer** - &lt;p&gt;Minutes-Modificator for next run&lt;/p&gt;
* $hour **integer** - &lt;p&gt;Hour-Modificator for next run&lt;/p&gt;
* $day **integer** - &lt;p&gt;Day-Modificator for next run&lt;/p&gt;
* $day_week **integer** - &lt;p&gt;Day-Of-The-Week-Modificator for next run&lt;/p&gt;
* $month **integer** - &lt;p&gt;Month-Modificator for next run&lt;/p&gt;



### next_now

    \SYSTEM\CRON\time SYSTEM\CRON\crontime::next_now(integer $min, integer $hour, integer $day, integer $day_week, integer $month)

Determine next time based on the system-time and crontab-style modificators



* Visibility: **public**
* This method is **static**.


#### Arguments
* $min **integer** - &lt;p&gt;Minutes-Modificator for next run&lt;/p&gt;
* $hour **integer** - &lt;p&gt;Hour-Modificator for next run&lt;/p&gt;
* $day **integer** - &lt;p&gt;Day-Modificator for next run&lt;/p&gt;
* $day_week **integer** - &lt;p&gt;Day-Of-The-Week-Modificator for next run&lt;/p&gt;
* $month **integer** - &lt;p&gt;Month-Modificator for next run&lt;/p&gt;



### last_now

    \SYSTEM\CRON\time SYSTEM\CRON\crontime::last_now(integer $min, integer $hour, integer $day, integer $day_week, integer $month)

Determine last time based on system-time and crontab-style modificators



* Visibility: **public**
* This method is **static**.


#### Arguments
* $min **integer** - &lt;p&gt;Minutes-Modificator for last run&lt;/p&gt;
* $hour **integer** - &lt;p&gt;Hour-Modificator for last run&lt;/p&gt;
* $day **integer** - &lt;p&gt;Day-Modificator for last run&lt;/p&gt;
* $day_week **integer** - &lt;p&gt;Day-Of-The-Week-Modificator for last run&lt;/p&gt;
* $month **integer** - &lt;p&gt;Month-Modificator for last run&lt;/p&gt;


