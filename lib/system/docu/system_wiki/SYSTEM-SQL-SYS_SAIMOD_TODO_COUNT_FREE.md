SYSTEM\SQL\SYS_SAIMOD_TODO_COUNT_FREE
===============

QQ to count all free system_todo entrys




* Class name: SYS_SAIMOD_TODO_COUNT_FREE
* Namespace: SYSTEM\SQL
* Parent class: [SYSTEM\DB\QP](SYSTEM-DB-QP)







Methods
-------


### get_class

    string SYSTEM\SQL\SYS_SAIMOD_TODO_COUNT_FREE::get_class()

Get Classname of the QQ



* Visibility: **public**
* This method is **static**.




### pgsql

    string SYSTEM\SQL\SYS_SAIMOD_TODO_COUNT_FREE::pgsql()

Get QQs PostgreSQL Query String



* Visibility: **public**
* This method is **static**.




### mysql

    string SYSTEM\SQL\SYS_SAIMOD_TODO_COUNT_FREE::mysql()

Get QQs MYSQL Query String



* Visibility: **public**
* This method is **static**.




### QQ

    \SYSTEM\DB\Result SYSTEM\DB\QP::QQ(array $params, \SYSTEM\DB\DBINFO $dbinfo)

Executes stored action and return Database Object



* Visibility: **public**
* This method is **static**.
* This method is defined by [SYSTEM\DB\QP](SYSTEM-DB-QP)


#### Arguments
* $params **array** - &lt;p&gt;Parameter passed to the prepare-query&lt;/p&gt;
* $dbinfo **SYSTEM\DB\DBINFO** - &lt;p&gt;Database Info or Null for Default DB&lt;/p&gt;



### QA

    array SYSTEM\DB\QP::QA(array $params, \SYSTEM\DB\DBINFO $dbinfo)

Executes stored action and return all Data found



* Visibility: **public**
* This method is **static**.
* This method is defined by [SYSTEM\DB\QP](SYSTEM-DB-QP)


#### Arguments
* $params **array** - &lt;p&gt;Parameter passed to the prepare-query&lt;/p&gt;
* $dbinfo **SYSTEM\DB\DBINFO** - &lt;p&gt;Database Info or Null for Default DB&lt;/p&gt;



### Q1

    array SYSTEM\DB\QP::Q1(array $params, \SYSTEM\DB\DBINFO $dbinfo)

Executes stored action and return one line of Data found



* Visibility: **public**
* This method is **static**.
* This method is defined by [SYSTEM\DB\QP](SYSTEM-DB-QP)


#### Arguments
* $params **array** - &lt;p&gt;Parameter passed to the prepare-query&lt;/p&gt;
* $dbinfo **SYSTEM\DB\DBINFO** - &lt;p&gt;Database Info or Null for Default DB&lt;/p&gt;



### QI

    boolean SYSTEM\DB\QP::QI(array $params, \SYSTEM\DB\DBINFO $dbinfo)

Executes stored action and return Database Result Object.

Use this function if the Result is either true or false (update/delete/insert)

* Visibility: **public**
* This method is **static**.
* This method is defined by [SYSTEM\DB\QP](SYSTEM-DB-QP)


#### Arguments
* $params **array** - &lt;p&gt;Parameter passed to the prepare-query&lt;/p&gt;
* $dbinfo **SYSTEM\DB\DBINFO** - &lt;p&gt;Database Info or Null for Default DB&lt;/p&gt;


