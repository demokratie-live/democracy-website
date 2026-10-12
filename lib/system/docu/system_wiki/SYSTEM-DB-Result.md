SYSTEM\DB\Result
===============

Result Class provided by System to hold Database Query Result Ressources.




* Class name: Result
* Namespace: SYSTEM\DB
* This is an **abstract** class







Methods
-------


### count

    integer SYSTEM\DB\Result::count()

Counts the Lines in the Resultset



* Visibility: **public**
* This method is **abstract**.




### affectedRows

    integer SYSTEM\DB\Result::affectedRows()

Counts the affected lines in the Resultset



* Visibility: **public**
* This method is **abstract**.




### next

    array SYSTEM\DB\Result::next(boolean $object)

Returns the next line in the Resultset



* Visibility: **public**
* This method is **abstract**.


#### Arguments
* $object **boolean** - &lt;p&gt;Determines if the result will be an object or array&lt;/p&gt;



### seek

    boolean SYSTEM\DB\Result::seek(integer $row_number)

Seeks an amount of lines within the Resultset



* Visibility: **public**
* This method is **abstract**.


#### Arguments
* $row_number **integer** - &lt;p&gt;Lines to seek over&lt;/p&gt;



### close

    null SYSTEM\DB\Result::close()

Closes the Resultset



* Visibility: **public**
* This method is **abstract**.



