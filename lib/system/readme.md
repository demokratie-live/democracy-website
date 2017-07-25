System
======
System - PHP Framework

Solves common Webdevelopment Problems and presents a Solution to several
reapearing problems in a good ecapsulated modern way.

Software Requirements
=====================

    PHP 5.6+
    Mysql (Postgressql (deprecated))

Installation
============

System is not a standalone Software, it is used within php Projects.
If you are not familiar with SYSTEM, please checkout the demo project
git@github.com:webcraftmedia/demo_basic.git and follow instructions there.

Features
========

SYSTEM offers diferent Features - a few are described in this readme

Ecapsulation of Code
--------------------
    
Seperation by Language, Seperation by Access, Seperation by Meaning.
System ecapsulates the following languages in different Files:
    
* PHP
* SQL
* JS
* HTML
* CSS

Depending on how you access the Page you are redirectd to diferent Endpoints of your Project.
System distiquishes between
    
* index.php - serve webpages
* api.php - returns json results, ajax-calls normally go to this endpoint
* sai.php - serves a secure extendable environment to administer your Page

The Autoload-Feature which is used within System allows you to seperate your Project
further into several subfolders - normally one for every single page you serve.   

API
---

Url parameter mapping to php classes in a modern way. Calls to your Page or API are
directly mapped to a class of your choice, serving the diferent calls you implement.

Cache
-----

Cache any data you want to cache. Typical things cached are Javascript and CSS.
By default the cache is cleaned once a day via internal cronjob mechanism.
Write your own Cache handler to put and pull from cache.

Config
------

Extendable config, by default contains paths, default database connection, project name & language etc.

Cron
----

Php Cron processing. Needs to be called by the underlying systems cron job.
Allows as many cronjobs as needed, with just one cronjob registered in the
Operating System.

DB
--

Persistent Database Connection, multiple Connections, SQL Ecapsulation,
Automatic Injection Protection, Easy access, almost zero code, one class per
Query and therefore high reusability.

Docu
----

Integrated PHPDocumentor including HTML and MD output. Register what code you want
to document and a button will generate you your documentation.

Files
-----

Serve Files from where you want, dont expose your server file structure.

Html
----

Html definitions(minimal)

Lib
---

Includes Several Libs, Minimal Lib Interface to bind your Projcts libraries easily

Log
---

Log from anywhere in your Project, Analysis of Log, Easy debugging, Visitor statistics

Page
----

Simple Template system, able to replace ${var} placeholders in text and files.
Hashbang compatibility, Modern ajax technologies to not reload the page,
but load content on demand including a caching meachanism to not load content
twice.

SAI
---

Admin Interface to manage SYSTEM features of your Page from a webui.  SAI is extenable,
so you can write your own Modules to manage your Page-Content as you prefere to do it.

Security
--------

Login, Register etc in a secure manner via API. Includes Password-Reset via
EMail Confirmation.

SQL
---

Extendable Database Installtion System, to run sql scripts for the Project upon
update or install.

License
=======
Copyright (c) 2013-2016 Ulf Gebhardt, Webcraft-Media.de

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.