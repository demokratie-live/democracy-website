SYSTEM\HEADER
===============

HEADER Class provided by System Send HTML Headers




* Class name: HEADER
* Namespace: SYSTEM







Methods
-------


### checkHeader

    boolean SYSTEM\HEADER::checkHeader()

Check if Header was already sent
Writes Warning into Database on failure if Database logging is enabled.



* Visibility: **private**
* This method is **static**.




### available

    boolean SYSTEM\HEADER::available(string $datatype)

Check if a given Datatype has a handler within this class.

Not Case sensitive.

* Visibility: **public**
* This method is **static**.


#### Arguments
* $datatype **string** - &lt;p&gt;Datatype to be checked eg. &#039;jpg&#039;&lt;/p&gt;



### JSON

    null SYSTEM\HEADER::JSON()

Send JSON Headers, if Header was not sent yet



* Visibility: **public**
* This method is **static**.




### PNG

    null SYSTEM\HEADER::PNG()

Send PNG Headers, if Header was not sent yet



* Visibility: **public**
* This method is **static**.




### JPG

    null SYSTEM\HEADER::JPG()

Send JPG Headers, if Header was not sent yet



* Visibility: **public**
* This method is **static**.




### JPEG

    null SYSTEM\HEADER::JPEG()

Send JPEG Headers, if Header was not sent yet



* Visibility: **public**
* This method is **static**.




### GIF

    null SYSTEM\HEADER::GIF()

Send GIF Headers, if Header was not sent yet



* Visibility: **public**
* This method is **static**.




### JS

    null SYSTEM\HEADER::JS()

Send JS Headers, if Header was not sent yet



* Visibility: **public**
* This method is **static**.




### CSS

    null SYSTEM\HEADER::CSS()

Send CSS Headers, if Header was not sent yet



* Visibility: **public**
* This method is **static**.




### LESS

    null SYSTEM\HEADER::LESS()

Send LESS Headers, if Header was not sent yet



* Visibility: **public**
* This method is **static**.




### FILE

    null SYSTEM\HEADER::FILE(string $filename)

Send FILE(download) Headers, if Header was not sent yet



* Visibility: **public**
* This method is **static**.


#### Arguments
* $filename **string** - &lt;p&gt;Filename which should be transmitted with the Filetransfere&lt;/p&gt;


