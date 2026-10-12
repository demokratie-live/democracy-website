SYSTEM\API\api_system
===============

API System class providing System Functionality.




* Class name: api_system
* Namespace: SYSTEM\API
* Parent class: [SYSTEM\API\api_login](SYSTEM-API-api_login)







Methods
-------


### call_cron

    \SYSTEM\API\JSON SYSTEM\API\api_system::call_cron()

System run Cron Call



* Visibility: **public**
* This method is **static**.




### call_text

    \SYSTEM\API\JSON SYSTEM\API\api_system::call_text(mixed $request, \SYSTEM\API\lang $lang)

System Text Request Call



* Visibility: **public**
* This method is **static**.


#### Arguments
* $request **mixed** - &lt;p&gt;Request String for Text API&lt;/p&gt;
* $lang **SYSTEM\API\lang** - &lt;p&gt;Request Language for given text&lt;/p&gt;



### call_files

    mixed SYSTEM\API\api_system::call_files(string $cat, string $id)

System File Request Call



* Visibility: **public**
* This method is **static**.


#### Arguments
* $cat **string** - &lt;p&gt;File category&lt;/p&gt;
* $id **string** - &lt;p&gt;File name&lt;/p&gt;



### call_pages

    mixed SYSTEM\API\api_system::call_pages(integer $group, string $state)

System State-Pages Request Call



* Visibility: **public**
* This method is **static**.


#### Arguments
* $group **integer** - &lt;p&gt;Page Group for Statesystem&lt;/p&gt;
* $state **string** - &lt;p&gt;Full name of the State.&lt;/p&gt;



### static__lang

    null SYSTEM\API\api_system::static__lang(\SYSTEM\API\lang $lang)

Static Call to change Language for the current Session/User



* Visibility: **public**
* This method is **static**.


#### Arguments
* $lang **SYSTEM\API\lang** - &lt;p&gt;Language requested&lt;/p&gt;



### static__result

    null SYSTEM\API\api_system::static__result(\SYSTEM\API\result $result)

Static Call to change Result-Type for the current Session/User



* Visibility: **public**
* This method is **static**.


#### Arguments
* $result **SYSTEM\API\result** - &lt;p&gt;Resulttype&lt;/p&gt;



### static__

    null SYSTEM\API\api_system::static__(mixed $_)

Static Time-Parameter _ Call to avoid caching and API Errors for JS requests



* Visibility: **public**
* This method is **static**.


#### Arguments
* $_ **mixed** - &lt;p&gt;Anticaching Parameter of some Browsers&lt;/p&gt;



### call_bug

    null SYSTEM\API\api_system::call_bug(string $message, \SYSTEM\API\JSON $data)

API Bug Call to report Bugs



* Visibility: **public**
* This method is **static**.


#### Arguments
* $message **string** - &lt;p&gt;Bugreport Message&lt;/p&gt;
* $data **SYSTEM\API\JSON** - &lt;p&gt;Bugreport Data&lt;/p&gt;



### call_cache

    mixed SYSTEM\API\api_system::call_cache(integer $id, \SYSTEM\API\sha1 $ident)

API Cache Call to request cached Data (usually js and css)



* Visibility: **public**
* This method is **static**.


#### Arguments
* $id **integer** - &lt;p&gt;Cache id to be queried&lt;/p&gt;
* $ident **SYSTEM\API\sha1** - &lt;p&gt;Cache ident to be queried&lt;/p&gt;



### call_account_action_login

    \SYSTEM\API\JSON SYSTEM\API\api_login::call_account_action_login(string $username, \SYSTEM\API\sha1 $password_sha1, \SYSTEM\API\lang $locale)

System Account Login



* Visibility: **public**
* This method is **static**.
* This method is defined by [SYSTEM\API\api_login](SYSTEM-API-api_login)


#### Arguments
* $username **string** - &lt;p&gt;Username&lt;/p&gt;
* $password_sha1 **SYSTEM\API\sha1** - &lt;p&gt;User Password SHA1 String&lt;/p&gt;
* $locale **SYSTEM\API\lang** - &lt;p&gt;Locale which the User wants to login with&lt;/p&gt;



### call_account_action_logout

    \SYSTEM\API\JSON SYSTEM\API\api_login::call_account_action_logout()

System Account Logout



* Visibility: **public**
* This method is **static**.
* This method is defined by [SYSTEM\API\api_login](SYSTEM-API-api_login)




### call_account_action_isloggedin

    \SYSTEM\API\JSON SYSTEM\API\api_login::call_account_action_isloggedin()

System Account isloggedin check



* Visibility: **public**
* This method is **static**.
* This method is defined by [SYSTEM\API\api_login](SYSTEM-API-api_login)




### call_account_action_check

    \SYSTEM\API\JSON SYSTEM\API\api_login::call_account_action_check(integer $rightid)

System Account Right Check



* Visibility: **public**
* This method is **static**.
* This method is defined by [SYSTEM\API\api_login](SYSTEM-API-api_login)


#### Arguments
* $rightid **integer** - &lt;p&gt;RightID of the right to be checked&lt;/p&gt;



### call_account_action_create

    \SYSTEM\API\JSON SYSTEM\API\api_login::call_account_action_create(string $username, \SYSTEM\API\sha1 $password_sha1, \SYSTEM\API\email $email, \SYSTEM\API\lang $locale)

System Account Create



* Visibility: **public**
* This method is **static**.
* This method is defined by [SYSTEM\API\api_login](SYSTEM-API-api_login)


#### Arguments
* $username **string** - &lt;p&gt;Username&lt;/p&gt;
* $password_sha1 **SYSTEM\API\sha1** - &lt;p&gt;User Password SHA1 String&lt;/p&gt;
* $email **SYSTEM\API\email** - &lt;p&gt;Email of the new User&lt;/p&gt;
* $locale **SYSTEM\API\lang** - &lt;p&gt;Locale which the User wants to register or null for default language&lt;/p&gt;



### call_account_action_confirm_email

    \SYSTEM\API\JSON SYSTEM\API\api_login::call_account_action_confirm_email()

System Account Request Confirm EMail Token



* Visibility: **public**
* This method is **static**.
* This method is defined by [SYSTEM\API\api_login](SYSTEM-API-api_login)




### call_account_action_confirm

    \SYSTEM\API\JSON SYSTEM\API\api_login::call_account_action_confirm(string $token)

System Account Confirm Tokens



* Visibility: **public**
* This method is **static**.
* This method is defined by [SYSTEM\API\api_login](SYSTEM-API-api_login)


#### Arguments
* $token **string** - &lt;p&gt;Token to do specifics with your Account&lt;/p&gt;



### call_account_action_reset_password

    \SYSTEM\API\JSON SYSTEM\API\api_login::call_account_action_reset_password(string $username)

System Account Request Reset Password Token



* Visibility: **public**
* This method is **static**.
* This method is defined by [SYSTEM\API\api_login](SYSTEM-API-api_login)


#### Arguments
* $username **string** - &lt;p&gt;Username&lt;/p&gt;



### call_account_action_change_password

    \SYSTEM\API\JSON SYSTEM\API\api_login::call_account_action_change_password(string $old_password_sha1, string $new_password_sha1)

System Account Change Password



* Visibility: **public**
* This method is **static**.
* This method is defined by [SYSTEM\API\api_login](SYSTEM-API-api_login)


#### Arguments
* $old_password_sha1 **string** - &lt;p&gt;Users Old Password SHA1 String&lt;/p&gt;
* $new_password_sha1 **string** - &lt;p&gt;Users New Password SHA1 String&lt;/p&gt;



### call_account_action_change_email

    \SYSTEM\API\JSON SYSTEM\API\api_login::call_account_action_change_email(string $new_email)

System Account Request Change EMail Token



* Visibility: **public**
* This method is **static**.
* This method is defined by [SYSTEM\API\api_login](SYSTEM-API-api_login)


#### Arguments
* $new_email **string** - &lt;p&gt;Users new EMail Address&lt;/p&gt;


