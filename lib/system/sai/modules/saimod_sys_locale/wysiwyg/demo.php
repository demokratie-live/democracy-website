<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html  xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>

<title>PHPDevel Wysiwyg HTML Editor</title>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta       name="description"  content="" />
<meta       name="keywords"     content="" />

<?php $wysiwyg_root = 'wysiwyg/'; include 'wysiwyg/php/init.php'; ?>

</head>
<body>

<?php

if (get_magic_quotes_gpc()) $_POST = array_map('stripslashes', $_POST);

$subject = isset($_POST['subject']) ? $_POST['subject'] : 'Subject';
$message = isset($_POST['message']) ? $_POST['message'] : 'Message';

?>

<form action="demo.php" method="post">
<table>
<tr><td><input type="text" name="subject" value="<?=htmlspecialchars($subject);?>" /></td></tr>
<tr><td><?php echo wysiwyg('wysiwyg_id', 'message', $message); ?></td></tr>
<tr><td><input type="submit" value="Submit" /></td></tr>
</table>
</form>

</body>
</html>