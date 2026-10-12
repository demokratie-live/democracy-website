SYSTEM\SQL\DATA_DEFAULT
===============

DATA_SYSTEM_TEXT Class provided by System to install the Page Defaults e.g meta tags to the Database(includes Tags)




* Class name: DATA_DEFAULT
* Namespace: SYSTEM\SQL
* Parent class: [SYSTEM\DB\QI](SYSTEM-DB-QI)







Methods
-------


### get_class

    string SYSTEM\SQL\DATA_DEFAULT::get_class()

Get Classname of the QQ



* Visibility: **public**
* This method is **static**.




### files_pgsql

    array SYSTEM\SQL\DATA_DEFAULT::files_pgsql()

Get paths of PostgreSQL compatible sql files



* Visibility: **public**
* This method is **static**.




### files_mysql

    array SYSTEM\SQL\DATA_DEFAULT::files_mysql()

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


