SYSTEM\DB\ConnectionPG
===============

PostgreSQL Connection Class provided by System to connect to PostgreSQL Database.




* Class name: ConnectionPG
* Namespace: SYSTEM\DB
* Parent class: [SYSTEM\DB\ConnectionAbstr](SYSTEM-DB-ConnectionAbstr)





Properties
----------


### $connection

    private mixed $connection = NULL

ressource Variable to store then open Connection



* Visibility: **private**


Methods
-------


### __construct

    mixed SYSTEM\DB\ConnectionAbstr::__construct(\SYSTEM\DB\DBINFO $dbinfo)

Connect to the DB upon Construction.



* Visibility: **public**
* This method is **abstract**.
* This method is defined by [SYSTEM\DB\ConnectionAbstr](SYSTEM-DB-ConnectionAbstr)


#### Arguments
* $dbinfo **SYSTEM\DB\DBINFO** - &lt;p&gt;Database Information Object&lt;/p&gt;



### __destruct

    mixed SYSTEM\DB\ConnectionAbstr::__destruct()

Destruct the Database Connection upon Destruction.



* Visibility: **public**
* This method is **abstract**.
* This method is defined by [SYSTEM\DB\ConnectionAbstr](SYSTEM-DB-ConnectionAbstr)




### close

    boolean SYSTEM\DB\ConnectionAbstr::close()

Close the Database Connection.



* Visibility: **public**
* This method is **abstract**.
* This method is defined by [SYSTEM\DB\ConnectionAbstr](SYSTEM-DB-ConnectionAbstr)




### prepare

    \SYSTEM\DB\Result SYSTEM\DB\ConnectionAbstr::prepare(string $stmtName, string $stmt, array $values, string $types)

Query the Connection using Prepare Statement



* Visibility: **public**
* This method is **abstract**.
* This method is defined by [SYSTEM\DB\ConnectionAbstr](SYSTEM-DB-ConnectionAbstr)


#### Arguments
* $stmtName **string** - &lt;p&gt;Name of the Statement - espec for PostgreSQL important&lt;/p&gt;
* $stmt **string** - &lt;p&gt;SQL string of the Statement&lt;/p&gt;
* $values **array** - &lt;p&gt;Array of Prepare Values&lt;/p&gt;
* $types **string** - &lt;p&gt;types sql prepare string&lt;/p&gt;



### query

    \SYSTEM\DB\Result SYSTEM\DB\ConnectionAbstr::query(string $query)

Query the Connection using normal Query Statement



* Visibility: **public**
* This method is **abstract**.
* This method is defined by [SYSTEM\DB\ConnectionAbstr](SYSTEM-DB-ConnectionAbstr)


#### Arguments
* $query **string** - &lt;p&gt;SQL string of the Statement&lt;/p&gt;



### trans

    boolean SYSTEM\DB\ConnectionAbstr::trans()

Open a Transaction on the Database Connection



* Visibility: **public**
* This method is **abstract**.
* This method is defined by [SYSTEM\DB\ConnectionAbstr](SYSTEM-DB-ConnectionAbstr)




### commit

    boolean SYSTEM\DB\ConnectionAbstr::commit()

Commit a Transaction on the Database Connection



* Visibility: **public**
* This method is **abstract**.
* This method is defined by [SYSTEM\DB\ConnectionAbstr](SYSTEM-DB-ConnectionAbstr)




### exec

    \SYSTEM\DB\Result SYSTEM\DB\ConnectionAbstr::exec(string $query)

Exec Query on Database



* Visibility: **public**
* This method is **abstract**.
* This method is defined by [SYSTEM\DB\ConnectionAbstr](SYSTEM-DB-ConnectionAbstr)


#### Arguments
* $query **string** - &lt;p&gt;SQL string of the Statement&lt;/p&gt;



### getPrepareValueType

    string SYSTEM\DB\ConnectionAbstr::getPrepareValueType(string $value)

Helperfunction to convert Prepared Values to SQL Type identifiers



* Visibility: **protected**
* This method is **static**.
* This method is defined by [SYSTEM\DB\ConnectionAbstr](SYSTEM-DB-ConnectionAbstr)


#### Arguments
* $value **string** - &lt;p&gt;Value to be examined regarding Type&lt;/p&gt;


