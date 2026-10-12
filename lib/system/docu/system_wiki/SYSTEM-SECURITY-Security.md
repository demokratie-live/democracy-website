SYSTEM\SECURITY\security
===============

security Class provided by System to manage website user and its attributes




* Class name: security
* Namespace: SYSTEM\SECURITY







Methods
-------


### create

    mixed SYSTEM\SECURITY\security::create(string $username, string $password_sha1, string $email, string $locale, boolean $json_result)

Create a new User. Permanently saved to the Database



* Visibility: **public**
* This method is **static**.


#### Arguments
* $username **string** - &lt;p&gt;Username of the new User&lt;/p&gt;
* $password_sha1 **string** - &lt;p&gt;Hashed Password of the new User&lt;/p&gt;
* $email **string** - &lt;p&gt;Email of the new User&lt;/p&gt;
* $locale **string** - &lt;p&gt;Language of the new User&lt;/p&gt;
* $json_result **boolean** - &lt;p&gt;Return data as JSON or Array&lt;/p&gt;



### login

    mixed SYSTEM\SECURITY\security::login(string $username, string $password_sha1, string $locale, boolean $json_result)

Login a User.



* Visibility: **public**
* This method is **static**.


#### Arguments
* $username **string** - &lt;p&gt;Username of the User&lt;/p&gt;
* $password_sha1 **string** - &lt;p&gt;Hashed Password of the User&lt;/p&gt;
* $locale **string** - &lt;p&gt;Language of the User on login.&lt;/p&gt;
* $json_result **boolean** - &lt;p&gt;Return data as JSON or Array&lt;/p&gt;



### available

    mixed SYSTEM\SECURITY\security::available(string $username, string $email, boolean $json_result)

Determine if username is already in use.



* Visibility: **public**
* This method is **static**.


#### Arguments
* $username **string** - &lt;p&gt;Username to be checked&lt;/p&gt;
* $email **string** - &lt;p&gt;EMail to be checked&lt;/p&gt;
* $json_result **boolean** - &lt;p&gt;Return data as JSON or Array&lt;/p&gt;



### check

    mixed SYSTEM\SECURITY\security::check(integer $rightid, boolean $json_result)

Checks for a right for a logged in user



* Visibility: **public**
* This method is **static**.


#### Arguments
* $rightid **integer** - &lt;p&gt;Right ID to be checked&lt;/p&gt;
* $json_result **boolean** - &lt;p&gt;Return data as JSON or Array&lt;/p&gt;



### change_password

    \SYSTEM\SECURITY\json SYSTEM\SECURITY\security::change_password(string $old_password_sha1, string $new_password_sha1)

Change logged in users Password



* Visibility: **public**
* This method is **static**.


#### Arguments
* $old_password_sha1 **string** - &lt;p&gt;Users old hashed Password&lt;/p&gt;
* $new_password_sha1 **string** - &lt;p&gt;Users new hashed Password&lt;/p&gt;



### change_email

    boolean SYSTEM\SECURITY\security::change_email(string $new_email, string $post_script, string $post_script_data)

Change logged in users Email.

This will facilitate the @see \SYSTEM\TOKEN\token utility to generate
a token and send it to the logged in users email using php mailinc function.

This function can only be invoked if the user is logged in and uses the
function on himself.

This function will fail if the Email of the user is unconfirmed. You can
only change the email of a confirmed account.

* Visibility: **public**
* This method is **static**.


#### Arguments
* $new_email **string** - &lt;p&gt;New Email for the logged in User&lt;/p&gt;
* $post_script **string** - &lt;p&gt;Function to be executed AFTER clicking the EMail Link, BEFORE updating the EMail&lt;/p&gt;
* $post_script_data **string** - &lt;p&gt;Additional Data for the Postscript&lt;/p&gt;



### reset_password

    boolean SYSTEM\SECURITY\security::reset_password($username, string $post_script, string $post_script_data)

Reset given users Password.

This will facilitate the @see \SYSTEM\TOKEN\token utility to generate
a token and send it to the users email using php mailinc function.
A new password is generated on invoke and sent with the email.
After confirming the token the new password given in the email is valid.

* Visibility: **public**
* This method is **static**.


#### Arguments
* $username **mixed**
* $post_script **string** - &lt;p&gt;Function to be executed AFTER clicking the EMail Link, BEFORE updating the Password&lt;/p&gt;
* $post_script_data **string** - &lt;p&gt;Additional Data for the Postscript&lt;/p&gt;



### confirm_email

    boolean SYSTEM\SECURITY\security::confirm_email(string $post_script, string $post_script_data)

Request an Confirm-Email for logged in User.

This will facilitate the @see \SYSTEM\TOKEN\token utility to generate
a token and send it to the users email using php mailinc function.

This function can only be invoked if the user is logged in and uses the
function on himself.

* Visibility: **public**
* This method is **static**.


#### Arguments
* $post_script **string** - &lt;p&gt;Function to be executed AFTER clicking the EMail Link, BEFORE updating the Confirmation Status&lt;/p&gt;
* $post_script_data **string** - &lt;p&gt;Additional Data for the Postscript&lt;/p&gt;



### confirm_email_admin

    boolean SYSTEM\SECURITY\security::confirm_email_admin($user, string $post_script, string $post_script_data)

Request an Confirm-Email for an User.

This will facilitate the @see \SYSTEM\TOKEN\token utility to generate
a token and send it to the users email using php mailinc function..

* Visibility: **public**
* This method is **static**.


#### Arguments
* $user **mixed**
* $post_script **string** - &lt;p&gt;Function to be executed AFTER clicking the EMail Link, BEFORE updating the Confirmation Status&lt;/p&gt;
* $post_script_data **string** - &lt;p&gt;Additional Data for the Postscript&lt;/p&gt;



### confirm

    boolean SYSTEM\SECURITY\security::confirm(string $token)

Confirm a token sent using @see \SYSTEM\TOKEN\token utility
(email confirm, email change, password reset)



* Visibility: **public**
* This method is **static**.


#### Arguments
* $token **string** - &lt;p&gt;Token given in eg an email.&lt;/p&gt;



### getUser

    \SYSTEM\SECURITY\User SYSTEM\SECURITY\security::getUser()

Get Userinfo stored in the current Session.



* Visibility: **public**
* This method is **static**.




### logout

    mixed SYSTEM\SECURITY\security::logout(boolean $json_result)

End the current Session and logout the User



* Visibility: **public**
* This method is **static**.


#### Arguments
* $json_result **boolean** - &lt;p&gt;Return data as JSON or Array&lt;/p&gt;



### save

    null SYSTEM\SECURITY\security::save(string $key, mixed $value)

Save a key=>value into the current session(not preserved)



* Visibility: **public**
* This method is **static**.


#### Arguments
* $key **string** - &lt;p&gt;key for the given value&lt;/p&gt;
* $value **mixed** - &lt;p&gt;Value for the given Key to be saved&lt;/p&gt;



### load

    mixed SYSTEM\SECURITY\security::load(string $key)

Save the value of a key from the current session(not preserved)



* Visibility: **public**
* This method is **static**.


#### Arguments
* $key **string** - &lt;p&gt;key to be queried&lt;/p&gt;



### isLoggedIn

    mixed SYSTEM\SECURITY\security::isLoggedIn(boolean $json_result)

Check if the current session is a logged in user



* Visibility: **public**
* This method is **static**.


#### Arguments
* $json_result **boolean** - &lt;p&gt;Return data as JSON or Array&lt;/p&gt;



### startSession

    null SYSTEM\SECURITY\security::startSession()

State the Session for the current request



* Visibility: **protected**
* This method is **static**.




### update_session_data

    null SYSTEM\SECURITY\security::update_session_data($data, $session_id)

Update Sessiondata upon user infos change



* Visibility: **public**
* This method is **static**.


#### Arguments
* $data **mixed** - &lt;p&gt;Data which has changed&lt;/p&gt;
* $session_id **mixed** - &lt;p&gt;Session ID to be changed or null&lt;/p&gt;


