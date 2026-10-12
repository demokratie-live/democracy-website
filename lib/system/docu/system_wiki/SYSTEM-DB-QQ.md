SYSTEM\DB\QQ
===============

QQ Class provided by System to execute quick query statements.




* Class name: QQ
* Namespace: SYSTEM\DB







Methods
-------


### QQ

    \SYSTEM\DB\Result SYSTEM\DB\QQ::QQ(\SYSTEM\DB\DBINFO $dbinfo)

Executes stored action and return Database Object



* Visibility: **public**
* This method is **static**.


#### Arguments
* $dbinfo **SYSTEM\DB\DBINFO** - &lt;p&gt;Database Info or Null for Default DB&lt;/p&gt;



### QA

    array SYSTEM\DB\QQ::QA(\SYSTEM\DB\DBINFO $dbinfo)

Executes stored action and return all Data found



* Visibility: **public**
* This method is **static**.


#### Arguments
* $dbinfo **SYSTEM\DB\DBINFO** - &lt;p&gt;Database Info or Null for Default DB&lt;/p&gt;



### Q1

    array SYSTEM\DB\QQ::Q1(\SYSTEM\DB\DBINFO $dbinfo)

Executes stored action and return one line of Data found



* Visibility: **public**
* This method is **static**.


#### Arguments
* $dbinfo **SYSTEM\DB\DBINFO** - &lt;p&gt;Database Info or Null for Default DB&lt;/p&gt;



### QI

    boolean SYSTEM\DB\QQ::QI(\SYSTEM\DB\DBINFO $dbinfo)

Executes stored action and return Database Result Object.

Use this function if the Result is either true or false (update/delete/insert)

* Visibility: **public**
* This method is **static**.


#### Arguments
* $dbinfo **SYSTEM\DB\DBINFO** - &lt;p&gt;Database Info or Null for Default DB&lt;/p&gt;


