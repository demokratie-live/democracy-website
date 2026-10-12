SYSTEM\TOKEN\token_handler
===============

Abstract token_handler Class provided by System to provide API for any token mechanism.




* Interface name: token_handler
* Namespace: SYSTEM\TOKEN
* This is an **interface**






Methods
-------


### token

    string SYSTEM\TOKEN\token_handler::token()

Generate the Token



* Visibility: **public**
* This method is **static**.




### expire

    integer SYSTEM\TOKEN\token_handler::expire()

Expiredate when the Token expires



* Visibility: **public**
* This method is **static**.




### confirm

    boolean SYSTEM\TOKEN\token_handler::confirm($token_data)

Token confirm processing for the token_handler



* Visibility: **public**
* This method is **static**.


#### Arguments
* $token_data **mixed**



### text_success

    string SYSTEM\TOKEN\token_handler::text_success(array $token_data)

Callback text_success on success



* Visibility: **public**
* This method is **static**.


#### Arguments
* $token_data **array** - &lt;p&gt;Token Data&lt;/p&gt;



### text_fail

    string SYSTEM\TOKEN\token_handler::text_fail(array $token_data)

Callback text_success on success



* Visibility: **public**
* This method is **static**.


#### Arguments
* $token_data **array** - &lt;p&gt;Token Data&lt;/p&gt;


