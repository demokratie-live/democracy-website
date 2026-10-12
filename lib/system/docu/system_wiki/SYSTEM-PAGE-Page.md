SYSTEM\PAGE\Page
===============

Page Interface provided by System to describe page functions.




* Interface name: Page
* Namespace: SYSTEM\PAGE
* This is an **interface**






Methods
-------


### html

    string SYSTEM\PAGE\Page::html()

Html content of the page



* Visibility: **public**




### js

    array SYSTEM\PAGE\Page::js()

Js files to be loaded for this page



* Visibility: **public**
* This method is **static**.




### css

    array SYSTEM\PAGE\Page::css()

Css files to be loaded for this page



* Visibility: **public**
* This method is **static**.




### title

    string SYSTEM\PAGE\Page::title()

Tile of the page



* Visibility: **public**
* This method is **static**.




### meta

    array SYSTEM\PAGE\Page::meta()

Meta of the page
Array Key is used as Meta to be written. The string is Split by the last
"_". meta_samplepage_description will resolve to meta['description']



* Visibility: **public**
* This method is **static**.



