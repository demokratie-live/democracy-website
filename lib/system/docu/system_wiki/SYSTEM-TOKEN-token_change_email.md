SYSTEM\TOKEN\token_change_email
===============

Email Change Token handler Class provided by System to provide a email-change mechanism.




* Class name: token_change_email
* Namespace: SYSTEM\TOKEN
* This class implements: [SYSTEM\TOKEN\token_handler](SYSTEM-TOKEN-token_handler)






Methods
-------


### token

    string SYSTEM\TOKEN\token_handler::token()

Generate the Token



* Visibility: **public**
* This method is **static**.
* This method is defined by [SYSTEM\TOKEN\token_handler](SYSTEM-TOKEN-token_handler)




### expire

    integer SYSTEM\TOKEN\token_handler::expire()

Expiredate when the Token expires



* Visibility: **public**
* This method is **static**.
* This method is defined by [SYSTEM\TOKEN\token_handler](SYSTEM-TOKEN-token_handler)




### confirm

    boolean SYSTEM\TOKEN\token_handler::confirm($token_data)

Token confirm processing for the token_handler



* Visibility: **public**
* This method is **static**.
* This method is defined by [SYSTEM\TOKEN\token_handler](SYSTEM-TOKEN-token_handler)


#### Arguments
* $token_data **mixed**



### text_fail

    string SYSTEM\TOKEN\token_handler::text_fail(array $token_data)

Callback text_success on success



* Visibility: **public**
* This method is **static**.
* This method is defined by [SYSTEM\TOKEN\token_handler](SYSTEM-TOKEN-token_handler)


#### Arguments
* $token_data **array** - &lt;p&gt;Token Data&lt;/p&gt;



### text_success

    string SYSTEM\TOKEN\token_handler::text_success(array $token_data)

Callback text_success on success



* Visibility: **public**
* This method is **static**.
* This method is defined by [SYSTEM\TOKEN\token_handler](SYSTEM-TOKEN-token_handler)


#### Arguments
* $token_data **array** - &lt;p&gt;Token Data&lt;/p&gt;


