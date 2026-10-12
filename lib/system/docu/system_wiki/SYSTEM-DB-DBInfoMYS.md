SYSTEM\DB\DBInfoMYS
===============

DBInfoMYS Class provided by System to hold MYSQL Database Information.




* Class name: DBInfoMYS
* Namespace: SYSTEM\DB
* Parent class: [SYSTEM\DB\DBInfo](SYSTEM-DB-DBInfo)





Properties
----------


### $m_database

    public mixed $m_database = null

string Variable to store Database name



* Visibility: **public**


### $m_user

    public mixed $m_user = null

string Variable to store Database user



* Visibility: **public**


### $m_password

    public mixed $m_password = null

string Variable to store Database password



* Visibility: **public**


### $m_host

    public mixed $m_host = null

string Variable to store Database host



* Visibility: **public**


### $m_port

    public mixed $m_port = null

int Variable to store Database port



* Visibility: **public**


Methods
-------


### __construct

    mixed SYSTEM\DB\DBInfo::__construct(string $database, string $user, string $password, string $host, integer $port)

Store Data upon Construction.



* Visibility: **public**
* This method is **abstract**.
* This method is defined by [SYSTEM\DB\DBInfo](SYSTEM-DB-DBInfo)


#### Arguments
* $database **string** - &lt;p&gt;Database name&lt;/p&gt;
* $user **string** - &lt;p&gt;Database user&lt;/p&gt;
* $password **string** - &lt;p&gt;Database password&lt;/p&gt;
* $host **string** - &lt;p&gt;Database host&lt;/p&gt;
* $port **integer** - &lt;p&gt;Database port&lt;/p&gt;


