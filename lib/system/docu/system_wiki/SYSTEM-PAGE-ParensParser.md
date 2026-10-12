SYSTEM\PAGE\ParensParser
===============

ParensParser Class provided by System to parse Statestring.




* Class name: ParensParser
* Namespace: SYSTEM\PAGE





Properties
----------


### $stack

    protected mixed $stack = null

something to keep track of parens nesting



* Visibility: **protected**


### $current

    protected mixed $current = null

current level



* Visibility: **protected**


### $string

    protected mixed $string = null

input string to parse



* Visibility: **protected**


### $position

    protected mixed $position = null

current character offset in string



* Visibility: **protected**


### $buffer_start

    protected mixed $buffer_start = null

start of text-buffer



* Visibility: **protected**


Methods
-------


### parse

    array SYSTEM\PAGE\ParensParser::parse(string $string)

Parse the given string and split by () brackets and |



* Visibility: **public**


#### Arguments
* $string **string** - &lt;p&gt;String to be parsed&lt;/p&gt;



### push

    null SYSTEM\PAGE\ParensParser::push()

Internal Function to push onto the stack



* Visibility: **protected**



