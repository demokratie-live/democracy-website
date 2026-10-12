SYSTEM\PAGE\text
===============

Text Class provided by System to get Texts from the Database.




* Class name: text
* Namespace: SYSTEM\PAGE



Constants
----------


### NEW_ENTRY

    const NEW_ENTRY = 'new_text_entry'







Methods
-------


### id_tags

    array SYSTEM\PAGE\text::id_tags(string $id)

Get the tags of a textid



* Visibility: **public**
* This method is **static**.


#### Arguments
* $id **string** - &lt;p&gt;textid to be checked upon&lt;/p&gt;



### tag

    array SYSTEM\PAGE\text::tag(string $tag, string $lang, boolean $fallback)

Get the texts with certain tag and language



* Visibility: **public**
* This method is **static**.


#### Arguments
* $tag **string** - &lt;p&gt;tag to be checked upon&lt;/p&gt;
* $lang **string** - &lt;p&gt;Language for the requested texts&lt;/p&gt;
* $fallback **boolean** - &lt;p&gt;Fallback to default language if certain id is not found for the specified language.&lt;/p&gt;



### tag_adv

    array SYSTEM\PAGE\text::tag_adv(string $tag, string $lang, boolean $fallback)

Get the texts with certain tag and language plus creation user info etc



* Visibility: **public**
* This method is **static**.


#### Arguments
* $tag **string** - &lt;p&gt;tag to be checked upon&lt;/p&gt;
* $lang **string** - &lt;p&gt;Language for the requested texts&lt;/p&gt;
* $fallback **boolean** - &lt;p&gt;Fallback to default language if certain id is not found for the specified language.&lt;/p&gt;



### get

    string SYSTEM\PAGE\text::get(string $id, string $lang, boolean $fallback)

Get a text with certain id and language



* Visibility: **public**
* This method is **static**.


#### Arguments
* $id **string** - &lt;p&gt;Id of the text requested&lt;/p&gt;
* $lang **string** - &lt;p&gt;Language for the requested text&lt;/p&gt;
* $fallback **boolean** - &lt;p&gt;Fallback to default language if textid is not found for the specified language.&lt;/p&gt;



### get_adv

    \SYSTEM\PAGE\Databaseresult SYSTEM\PAGE\text::get_adv(string $id, string $lang, boolean $fallback)

Get a text with certain id and language plus creation user info etc



* Visibility: **public**
* This method is **static**.


#### Arguments
* $id **string** - &lt;p&gt;Id of the text requested&lt;/p&gt;
* $lang **string** - &lt;p&gt;Language for the requested text&lt;/p&gt;
* $fallback **boolean** - &lt;p&gt;Fallback to default language if textid is not found for the specified language.&lt;/p&gt;



### get_tags

    array SYSTEM\PAGE\text::get_tags(string $id, integer $limit)

Get a tags of a text with certain id and limit the results



* Visibility: **public**
* This method is **static**.


#### Arguments
* $id **string** - &lt;p&gt;Id of the text requested&lt;/p&gt;
* $limit **integer** - &lt;p&gt;Amount of Tags to be requested&lt;/p&gt;



### get_latest

    array SYSTEM\PAGE\text::get_latest(string $tag, integer $limit)

Get latest texts from database by tag and limit



* Visibility: **public**
* This method is **static**.


#### Arguments
* $tag **string** - &lt;p&gt;Id of the tag requested&lt;/p&gt;
* $limit **integer** - &lt;p&gt;Amount of Texts to be requested&lt;/p&gt;



### search

    array SYSTEM\PAGE\text::search(string $search, string $tag)

Search with content of texts with given tag



* Visibility: **public**
* This method is **static**.


#### Arguments
* $search **string** - &lt;p&gt;Searchstring &quot;%&quot; are added inside&lt;/p&gt;
* $tag **string** - &lt;p&gt;Search only texts with given tag&lt;/p&gt;



### save

    boolean SYSTEM\PAGE\text::save(string $id, string $new_id, string $lang, array $tags, string $text)

Save a text into the Database. Works like rename



* Visibility: **public**
* This method is **static**.


#### Arguments
* $id **string** - &lt;p&gt;Id of the text&lt;/p&gt;
* $new_id **string** - &lt;p&gt;New Id of the text&lt;/p&gt;
* $lang **string** - &lt;p&gt;Language of the text&lt;/p&gt;
* $tags **array** - &lt;p&gt;Array with tags for that text&lt;/p&gt;
* $text **string** - &lt;p&gt;Text to be saved&lt;/p&gt;



### delete

    boolean SYSTEM\PAGE\text::delete(string $id, string $lang)

Delete a text from the Database.



* Visibility: **public**
* This method is **static**.


#### Arguments
* $id **string** - &lt;p&gt;Id of the text&lt;/p&gt;
* $lang **string** - &lt;p&gt;Language of the text&lt;/p&gt;


