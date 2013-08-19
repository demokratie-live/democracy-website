<?php

// Copyright (C) 2009-2011 Ilya S. Lyubinskiy. All rights reserved. See license.txt

function wysiwyg($id, $name, $value)
{
  global $wysiwyg_root, $wysiwyg_names, $wysiwyg_lists;

  $smarty = new Smarty;

  $smarty->       auto_literal = false;
  $smarty->deprecation_notices = false;

  $smarty->  cachee_dir = dirname(dirname(__FILE__)) . '/temp/cache';
  $smarty-> compile_dir = dirname(dirname(__FILE__)) . '/temp/compile';
  $smarty->template_dir = dirname(dirname(__FILE__)) . '/templates';

  $smarty->assign('id',    $id);
  $smarty->assign('name',  $name);
  $smarty->assign('value', $value);

  $smarty->assign('root',  $wysiwyg_root);
  $smarty->assign('names', $wysiwyg_names);
  $smarty->assign('lists', $wysiwyg_lists);

  return $smarty->fetch('wysiwyg/wysiwyg.html');
}

?>