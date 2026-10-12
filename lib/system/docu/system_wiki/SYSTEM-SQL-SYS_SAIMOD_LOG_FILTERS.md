SYSTEM\SQL\SYS_SAIMOD_LOG_FILTERS
===============

QQ to find all classfilters from system_log




* Class name: SYS_SAIMOD_LOG_FILTERS
* Namespace: SYSTEM\SQL
* Parent class: [SYSTEM\DB\QQ](SYSTEM-DB-QQ)







Methods
-------


### get_class

    string SYSTEM\SQL\SYS_SAIMOD_LOG_FILTERS::get_class()

Get Classname of the QQ



* Visibility: **public**
* This method is **static**.




### pgsql

    string SYSTEM\SQL\SYS_SAIMOD_LOG_FILTERS::pgsql()

Get QQs PostgreSQL Query String



* Visibility: **public**
* This method is **static**.




### mysql

    string SYSTEM\SQL\SYS_SAIMOD_LOG_FILTERS::mysql()

Get QQs MYSQL Query String



* Visibility: **public**
* This method is **static**.




### QQ

    \SYSTEM\DB\Result SYSTEM\DB\QQ::QQ(\SYSTEM\DB\DBINFO $dbinfo)

Executes stored action and return Database Object



* Visibility: **public**
* This method is **static**.
* This method is defined by [SYSTEM\DB\QQ](SYSTEM-DB-QQ)


#### Arguments
* $dbinfo **SYSTEM\DB\DBINFO** - &lt;p&gt;Database Info or Null for Default DB&lt;/p&gt;



### QA

    array SYSTEM\DB\QQ::QA(\SYSTEM\DB\DBINFO $dbinfo)

Executes stored action and return all Data found



* Visibility: **public**
* This method is **static**.
* This method is defined by [SYSTEM\DB\QQ](SYSTEM-DB-QQ)


#### Arguments
* $dbinfo **SYSTEM\DB\DBINFO** - &lt;p&gt;Database Info or Null for Default DB&lt;/p&gt;



### Q1

    array SYSTEM\DB\QQ::Q1(\SYSTEM\DB\DBINFO $dbinfo)

Executes stored action and return one line of Data found



* Visibility: **public**
* This method is **static**.
* This method is defined by [SYSTEM\DB\QQ](SYSTEM-DB-QQ)


#### Arguments
* $dbinfo **SYSTEM\DB\DBINFO** - &lt;p&gt;Database Info or Null for Default DB&lt;/p&gt;



### QI

    boolean SYSTEM\DB\QQ::QI(\SYSTEM\DB\DBINFO $dbinfo)

Executes stored action and return Database Result Object.

Use this function if the Result is either true or false (update/delete/insert)

* Visibility: **public**
* This method is **static**.
* This method is defined by [SYSTEM\DB\QQ](SYSTEM-DB-QQ)


#### Arguments
* $dbinfo **SYSTEM\DB\DBINFO** - &lt;p&gt;Database Info or Null for Default DB&lt;/p&gt;


