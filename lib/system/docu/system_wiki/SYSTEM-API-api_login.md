SYSTEM\API\api_login
===============

API Login class providing System Account Functionality.




* Class name: api_login
* Namespace: SYSTEM\API







Methods
-------


### call_account_action_login

    \SYSTEM\API\JSON SYSTEM\API\api_login::call_account_action_login(string $username, \SYSTEM\API\sha1 $password_sha1, \SYSTEM\API\lang $locale)

System Account Login



* Visibility: **public**
* This method is **static**.


#### Arguments
* $username **string** - &lt;p&gt;Username&lt;/p&gt;
* $password_sha1 **SYSTEM\API\sha1** - &lt;p&gt;User Password SHA1 String&lt;/p&gt;
* $locale **SYSTEM\API\lang** - &lt;p&gt;Locale which the User wants to login with&lt;/p&gt;



### call_account_action_logout

    \SYSTEM\API\JSON SYSTEM\API\api_login::call_account_action_logout()

System Account Logout



* Visibility: **public**
* This method is **static**.




### call_account_action_isloggedin

    \SYSTEM\API\JSON SYSTEM\API\api_login::call_account_action_isloggedin()

System Account isloggedin check



* Visibility: **public**
* This method is **static**.




### call_account_action_check

    \SYSTEM\API\JSON SYSTEM\API\api_login::call_account_action_check(integer $rightid)

System Account Right Check



* Visibility: **public**
* This method is **static**.


#### Arguments
* $rightid **integer** - &lt;p&gt;RightID of the right to be checked&lt;/p&gt;



### call_account_action_create

    \SYSTEM\API\JSON SYSTEM\API\api_login::call_account_action_create(string $username, \SYSTEM\API\sha1 $password_sha1, \SYSTEM\API\email $email, \SYSTEM\API\lang $locale)

System Account Create



* Visibility: **public**
* This method is **static**.


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




### call_account_action_confirm

    \SYSTEM\API\JSON SYSTEM\API\api_login::call_account_action_confirm(string $token)

System Account Confirm Tokens



* Visibility: **public**
* This method is **static**.


#### Arguments
* $token **string** - &lt;p&gt;Token to do specifics with your Account&lt;/p&gt;



### call_account_action_reset_password

    \SYSTEM\API\JSON SYSTEM\API\api_login::call_account_action_reset_password(string $username)

System Account Request Reset Password Token



* Visibility: **public**
* This method is **static**.


#### Arguments
* $username **string** - &lt;p&gt;Username&lt;/p&gt;



### call_account_action_change_password

    \SYSTEM\API\JSON SYSTEM\API\api_login::call_account_action_change_password(string $old_password_sha1, string $new_password_sha1)

System Account Change Password



* Visibility: **public**
* This method is **static**.


#### Arguments
* $old_password_sha1 **string** - &lt;p&gt;Users Old Password SHA1 String&lt;/p&gt;
* $new_password_sha1 **string** - &lt;p&gt;Users New Password SHA1 String&lt;/p&gt;



### call_account_action_change_email

    \SYSTEM\API\JSON SYSTEM\API\api_login::call_account_action_change_email(string $new_email)

System Account Request Change EMail Token



* Visibility: **public**
* This method is **static**.


#### Arguments
* $new_email **string** - &lt;p&gt;Users new EMail Address&lt;/p&gt;


