SYSTEM\PAGE\replace
===============

Replace Class provided by System to replace placeholders in text and files ${placeholder}.




* Class name: replace
* Namespace: SYSTEM\PAGE







Methods
-------


### replace

    string SYSTEM\PAGE\replace::replace(string $text, array $vars)

Replace all placeholders in a text.

Array Key of Placeholders represents the name of the placeholder.
The value to the key is filled in.

"Text ${textplaceholder}"
array('textplaceholder' => 'test')
resolves to: "Text test"

* Visibility: **public**
* This method is **static**.


#### Arguments
* $text **string** - &lt;p&gt;text to be subject of replacements&lt;/p&gt;
* $vars **array** - &lt;p&gt;Array with Placeholders.&lt;/p&gt;



### replaceFile

    string SYSTEM\PAGE\replace::replaceFile(string $path, array $vars)

Replace all placeholders in a file.

Array Key of Placeholders represents the name of the placeholder.
The value to the key is filled in.

"Text ${textplaceholder}"
array('textplaceholder' => 'test')
resolves to: "Text test"

* Visibility: **public**
* This method is **static**.


#### Arguments
* $path **string** - &lt;p&gt;Filepath of file to be subject of replacements&lt;/p&gt;
* $vars **array** - &lt;p&gt;Array with Placeholders.&lt;/p&gt;



### clean

    string SYSTEM\PAGE\replace::clean(string $text)

Replace all placeholders in a text with null.

Effectively removing all Placeholders

* Visibility: **public**
* This method is **static**.


#### Arguments
* $text **string** - &lt;p&gt;text to be subject of replacements&lt;/p&gt;


