SYSTEM\TOKEN\token
===============

Token Class provided by System to provide unique security tokens.




* Class name: token
* Namespace: SYSTEM\TOKEN





Properties
----------


### $type_handlers

    private mixed $type_handlers = array()

array Variable to store all registred token handlers



* Visibility: **private**
* This property is **static**.


Methods
-------


### check_handler

    boolean SYSTEM\TOKEN\token::check_handler(string $handler)

Check if given class is a valid token handler



* Visibility: **private**
* This method is **static**.


#### Arguments
* $handler **string** - &lt;p&gt;Token_handler Class&lt;/p&gt;



### register

    null SYSTEM\TOKEN\token::register(string $class)

Register given class as token_handler



* Visibility: **public**
* This method is **static**.


#### Arguments
* $class **string** - &lt;p&gt;Token_handler Class&lt;/p&gt;



### request

    string SYSTEM\TOKEN\token::request(string $class, array $data, string $post_script)

Request a token



* Visibility: **public**
* This method is **static**.


#### Arguments
* $class **string** - &lt;p&gt;Token_handler Class&lt;/p&gt;
* $data **array** - &lt;p&gt;Data sved to Database for the token_handler on confirm&lt;/p&gt;
* $post_script **string** - &lt;p&gt;Function to be called after successfull token confirm&lt;/p&gt;



### confirm

    boolean SYSTEM\TOKEN\token::confirm(string $token)

Confirm a token



* Visibility: **public**
* This method is **static**.


#### Arguments
* $token **string** - &lt;p&gt;Token string&lt;/p&gt;



### text_success

    string SYSTEM\TOKEN\token::text_success(string $token)

Call token text_success on success



* Visibility: **public**
* This method is **static**.


#### Arguments
* $token **string** - &lt;p&gt;token_handler Classname&lt;/p&gt;



### text_fail

    string SYSTEM\TOKEN\token::text_fail(string $token)

Call token text_fail on fail



* Visibility: **public**
* This method is **static**.


#### Arguments
* $token **string** - &lt;p&gt;token_handler Classname&lt;/p&gt;



### get

    array SYSTEM\TOKEN\token::get(string $token)

Get a existing token from db



* Visibility: **public**
* This method is **static**.


#### Arguments
* $token **string** - &lt;p&gt;Token string&lt;/p&gt;


