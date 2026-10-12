SYSTEM\DB\ResultSQLite
===============

Result Class provided by System to hold Database Query Result Ressources of SQLite File Querys.




* Class name: ResultSQLite
* Namespace: SYSTEM\DB
* Parent class: [SYSTEM\DB\Result](SYSTEM-DB-Result)





Properties
----------


### $res

    private mixed $res = NULL

ressource Variable to store Database Result-ressource



* Visibility: **private**


### $stmt

    private mixed $stmt = NULL

ressource Variable to store query statement



* Visibility: **private**


### $current

    private mixed $current = NULL

ressource Variable to store current Line either as array or object



* Visibility: **private**


Methods
-------


### __construct

    mixed SYSTEM\DB\ResultSQLite::__construct(\SYSTEM\DB\ressource $res, string $stmt)

Construct the Resultset with a database ressource



* Visibility: **public**


#### Arguments
* $res **SYSTEM\DB\ressource** - &lt;p&gt;Ressource of the Database Result-Set&lt;/p&gt;
* $stmt **string** - &lt;p&gt;Query Statement which produced the result set&lt;/p&gt;



### __destruct

    mixed SYSTEM\DB\ResultSQLite::__destruct()

Close Resultset upon destruction



* Visibility: **public**




### close

    null SYSTEM\DB\Result::close()

Closes the Resultset



* Visibility: **public**
* This method is **abstract**.
* This method is defined by [SYSTEM\DB\Result](SYSTEM-DB-Result)




### count

    integer SYSTEM\DB\Result::count()

Counts the Lines in the Resultset



* Visibility: **public**
* This method is **abstract**.
* This method is defined by [SYSTEM\DB\Result](SYSTEM-DB-Result)




### affectedRows

    integer SYSTEM\DB\Result::affectedRows()

Counts the affected lines in the Resultset



* Visibility: **public**
* This method is **abstract**.
* This method is defined by [SYSTEM\DB\Result](SYSTEM-DB-Result)




### next

    array SYSTEM\DB\Result::next(boolean $object)

Returns the next line in the Resultset



* Visibility: **public**
* This method is **abstract**.
* This method is defined by [SYSTEM\DB\Result](SYSTEM-DB-Result)


#### Arguments
* $object **boolean** - &lt;p&gt;Determines if the result will be an object or array&lt;/p&gt;



### seek

    boolean SYSTEM\DB\Result::seek(integer $row_number)

Seeks an amount of lines within the Resultset



* Visibility: **public**
* This method is **abstract**.
* This method is defined by [SYSTEM\DB\Result](SYSTEM-DB-Result)


#### Arguments
* $row_number **integer** - &lt;p&gt;Lines to seek over&lt;/p&gt;


