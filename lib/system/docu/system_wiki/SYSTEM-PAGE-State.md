SYSTEM\PAGE\State
===============

State Class provided by System to get State information.




* Class name: State
* Namespace: SYSTEM\PAGE







Methods
-------


### get

    \SYSTEM\PAGE\json SYSTEM\PAGE\State::get(integer $group, string $state, boolean $returnasjson)

Get a State



* Visibility: **public**
* This method is **static**.


#### Arguments
* $group **integer** - &lt;p&gt;Group ID of the State requested.&lt;/p&gt;
* $state **string** - &lt;p&gt;Name of the state(including all substates and params.&lt;/p&gt;
* $returnasjson **boolean** - &lt;p&gt;Return the result as Json or Array&lt;/p&gt;



### parse_substate

    array SYSTEM\PAGE\State::parse_substate(string $substate)

Get Substates out of State string



* Visibility: **private**
* This method is **static**.


#### Arguments
* $substate **string** - &lt;p&gt;Substate string.&lt;/p&gt;



### is_loaded

    boolean SYSTEM\PAGE\State::is_loaded(array $row, array $substate, string $state_name, integer $parent_id)

Is the substate loaded alrdy(for result set)
(recursive)



* Visibility: **private**
* This method is **static**.


#### Arguments
* $row **array** - &lt;p&gt;Substate Database row.&lt;/p&gt;
* $substate **array** - &lt;p&gt;Array with substates&lt;/p&gt;
* $state_name **string** - &lt;p&gt;Name of the main state&lt;/p&gt;
* $parent_id **integer** - &lt;p&gt;Id of parent&lt;/p&gt;


