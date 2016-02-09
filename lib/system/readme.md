System
======
System - PHP Framework

Solves common Webdevelopment Problems and presents a Solution to several
reapearing problems in a good ecapsulated modern way.

Software Requirements
=====================

    PHP 5.6+ (new CLASS())->func() must be possible
    Mysql/Postgressql

Installation
============

System is not a standalone Software, it is used within php Projects.
If you are not familiar with SYSTEM, please checkout the demo project
git@github.com:webcraftmedia/demo_basic.git and follow instructions there.

Features
========

    Ecapsulation of Code
    
Seperation by Language, Seperation by Access, Seperation by Meaning.
System ecapsulates the following languages in different Files:
    
    PHP
    SQL
    JS
    HTML
    CSS

Depending on how you access the Page you are redirectd in diferent Parts of a Project.
System distiquishes between
    
    index.php - serve webpages
    api.php - returns json results, ajax-calls normally go here
    sai.php - serves a secure extendable environment to administer your Page

The Autoload-Feature which is used within System allows you to seperate your Project
further into several subfolders - normally one for every single page you server.   

Feature API
    Url parameter mapping to php classes in a modern way

Feature Cache
    Cache any data into the database to server content without recalculating it.
    By default its cleaned once a day via cronjob. Write your own Cache handler
    to put and pull from cache

Feature Config
    Extendable config, by default contains paths, default database connection,
    project name & language etc.

Feature Cron
    Php Cron processing. Needs to be pinged by the systems cron job.
    Allows as many cronjobs as needed.

Feature DB
    Persistent Database Connection, multiple Connections, SQL Ecapsulation,
    Automatic Injection Protection, Easy access, almost zero code

Feature Docu
    Documentation system relying on markdown

Feature Files
    Serve Files from where you want, dont expose your server structure.

Feature Html
    Html definitions(minimal)

Feature Lib
    Includes Several Libs, Lib Interface to bind your Projcts libs easily

Feature log
    Log from anywhere in your Project, Analysis of Log, Easy debugging

Feature page
    Simple Template system, able to replace ${var} placeholders in text and files.
    Hashbang compatibility, Modern ajax technologies to not relog the page,
    but load content on demand.

Feature sai
    Admin Interface reachable under sai.php, extenable, many system Modules to
    manage system features from a webui.

Feature security
    Login, Register etc in a secure manner. Not SAML compatible yet.

Feature sql
    Extendable Installtion System, to run sql scripts for the Project.

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