SYSTEM\FILES\files
===============

Files Class provided by System to register folders and serve files.




* Class name: files
* Namespace: SYSTEM\FILES





Properties
----------


### $folders

    private mixed $folders = array()

array Variable to store all registred file folders



* Visibility: **private**
* This property is **static**.


Methods
-------


### registerFolder

    null SYSTEM\FILES\files::registerFolder(string $path, string $cat)

Register a filefolder



* Visibility: **public**
* This method is **static**.


#### Arguments
* $path **string** - &lt;p&gt;Path of the Folder&lt;/p&gt;
* $cat **string** - &lt;p&gt;Category to register that folder to&lt;/p&gt;



### get

    mixed SYSTEM\FILES\files::get(string $cat, string $id, boolean $returnasjson)

Retrieve a File



* Visibility: **public**
* This method is **static**.


#### Arguments
* $cat **string** - &lt;p&gt;Category to query or null&lt;/p&gt;
* $id **string** - &lt;p&gt;File to query or null&lt;/p&gt;
* $returnasjson **boolean** - &lt;p&gt;Determines if you recieve Arrays or JSON results&lt;/p&gt;



### put

    boolean SYSTEM\FILES\files::put(string $cat, string $id, \SYSTEM\FILES\ressource $contents)

Move a uploaded File into a Directtory



* Visibility: **public**
* This method is **static**.


#### Arguments
* $cat **string** - &lt;p&gt;Category for the File&lt;/p&gt;
* $id **string** - &lt;p&gt;ID for the File&lt;/p&gt;
* $contents **SYSTEM\FILES\ressource** - &lt;p&gt;Uploaded File Ressource&lt;/p&gt;



### delete

    boolean SYSTEM\FILES\files::delete(string $cat, string $id)

Delete a File



* Visibility: **public**
* This method is **static**.


#### Arguments
* $cat **string** - &lt;p&gt;Category of the File&lt;/p&gt;
* $id **string** - &lt;p&gt;ID of the File&lt;/p&gt;



### rename

    boolean SYSTEM\FILES\files::rename(string $cat, string $id, string $newid)

Rename a File



* Visibility: **public**
* This method is **static**.


#### Arguments
* $cat **string** - &lt;p&gt;Category of the File&lt;/p&gt;
* $id **string** - &lt;p&gt;ID of the File&lt;/p&gt;
* $newid **string** - &lt;p&gt;ID of the renamed File&lt;/p&gt;



### getFolder

    array SYSTEM\FILES\files::getFolder(string $folder)

Returns the contents of a Folder



* Visibility: **private**
* This method is **static**.


#### Arguments
* $folder **string** - &lt;p&gt;Path to the Folder&lt;/p&gt;



### getURL

    string SYSTEM\FILES\files::getURL(string $cat, string $id)

Returns a URL for a File



* Visibility: **public**
* This method is **static**.


#### Arguments
* $cat **string** - &lt;p&gt;Category of the File&lt;/p&gt;
* $id **string** - &lt;p&gt;ID of the File&lt;/p&gt;



### file_get_contents_chunked

    boolean SYSTEM\FILES\files::file_get_contents_chunked(string $file, integer $chunk_size, \SYSTEM\FILES\function $callback)

Returns Chunks of a File
Callback: function($chunk,&$handle,$iteration)



* Visibility: **private**
* This method is **static**.


#### Arguments
* $file **string** - &lt;p&gt;Path of the File&lt;/p&gt;
* $chunk_size **integer** - &lt;p&gt;Size of the Chunks&lt;/p&gt;
* $callback **SYSTEM\FILES\function** - &lt;p&gt;Callback function which is called for every chunk&lt;/p&gt;


