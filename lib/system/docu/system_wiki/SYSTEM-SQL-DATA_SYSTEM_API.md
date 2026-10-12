SYSTEM\SQL\DATA_SYSTEM_API
===============

DATA_SYSTEM_API Class provided by System to install the System apis to the Database




* Class name: DATA_SYSTEM_API
* Namespace: SYSTEM\SQL
* Parent class: [SYSTEM\DB\QI](SYSTEM-DB-QI)







Methods
-------


### get_class

    string SYSTEM\SQL\DATA_SYSTEM_API::get_class()

Get Classname of the QQ



* Visibility: **public**
* This method is **static**.




### files_pgsql

    array SYSTEM\SQL\DATA_SYSTEM_API::files_pgsql()

Get paths of PostgreSQL compatible sql files



* Visibility: **public**
* This method is **static**.




### files_mysql

    array SYSTEM\SQL\DATA_SYSTEM_API::files_mysql()

Get paths of MYSQL compatible sql files



* Visibility: **public**
* This method is **static**.




### QI

    array SYSTEM\DB\QI::QI(\SYSTEM\DB\DBINFO $dbinfo)

Executes stored action by calling either files_pgsql() or files_mysql()
of inherting class



* Visibility: **public**
* This method is **static**.
* This method is defined by [SYSTEM\DB\QI](SYSTEM-DB-QI)


#### Arguments
* $dbinfo **SYSTEM\DB\DBINFO** - &lt;p&gt;Database Info or Null for Default DB&lt;/p&gt;


