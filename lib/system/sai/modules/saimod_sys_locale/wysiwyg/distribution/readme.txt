PHPDevel Wysiwyg HTML Editor
Copyright (C) 2011 Ilya S. Lyubinskiy
Homepage: http://www.php-development.ru/php-scripts/wysiwyg-html-editor.php

License grant:
1. You may use the script on your website
2. You may use the script in your web application

License limitation:
1. You may not distribute the script except in the case when you distribute it
   as a part of your web application
2. You may not remove, hide or modify Info button, Info popup window, copyright
   notice and homepage link inside Info popup window without permission of
   the author
3. You may not remove or modify copyright notices in script code
4. You may not remove this readme.txt file

Installation:
1. Upload the script to your server
2. Make sure that the following folders are writable:
     a) wysiwyg/temp/cache/
     b) wysiwyg/temp/compile/
   If necessary, set 0777 permissions for these folders.
3. Add the following code to the head section of your html page:
     <?php
     $wysiwyg_root = 'http://www.your-domain.com/path_to_wysiwyg_folder/';
     include 'wysiwyg/php/init.php';
     ?>
   Be sure to enter the correct URL of the wysiwyg folder.
   For demo.php the relative URL "wysiwyg/" is used.
4. Add the following code to your html form:
     <?php echo wysiwyg('wysiwyg_id', 'form_field_name', 'form_field_value'); ?>
   The first parameter is the wysiwyg id.
   If you use several wysiwyg editors on the same html page, they all must have
   unique ids.
   The second parameter is the key in the submitted form.
   The third paremeter is the html code to be displayed in the wysiwyg editor.
5. See demo.php for integration example. Demo page validates as XHTML transitional.