<?php

// Copyright (C) 2009-2011 Ilya S. Lyubinskiy. All rights reserved. See license.txt


$wysiwyg_names['submit'         ] = 'Submit';
$wysiwyg_names['hyperlink'      ] = 'Hyperlink';
$wysiwyg_names['picture'        ] = 'Picture';
$wysiwyg_names['table'          ] = 'Table';
$wysiwyg_names['smileys'        ] = 'Smileys';
$wysiwyg_names['colorback'      ] = 'Background color';
$wysiwyg_names['colorfore'      ] = 'Foreground color';
$wysiwyg_names['info'           ] = 'Info';

$wysiwyg_names['hyperlink_text' ] = 'Text';
$wysiwyg_names['hyperlink_url'  ] = 'URL';
$wysiwyg_names['hyperlink_title'] = 'Title';
$wysiwyg_names['picture_url'    ] = 'URL';
$wysiwyg_names['picture_alt'    ] = 'Alt attribute';
$wysiwyg_names['picture_width'  ] = 'Width';
$wysiwyg_names['picture_height' ] = 'Height';
$wysiwyg_names['table_rows'     ] = 'Rows';
$wysiwyg_names['table_cols'     ] = 'Columns';
$wysiwyg_names['table_border'   ] = 'Border';

$wysiwyg_lists['fonts'] = array(
  ''                       => 'Font name',
  'Arial, Sans-Serif'      => 'Arial',
  'Comic Sans MS'          => 'Comic Sans MS',
  'Courier New, Monospace' => 'Courier New',
  'Georgia, Serif'         => 'Georgia',
  'Impact, Sans-Serif'     => 'Impact',
  'Tahoma, Sans-Serif'     => 'Tahoma',
  'Times New Roman, Serif' => 'Times New Roman',
  'Verdana, Sans-Serif'    => 'Verdana');


$wysiwyg_lists['smileys'] = array();

$handle = opendir(dirname(dirname(__FILE__)) . '/images/smileys/');
if (is_resource($handle))
{
  while (true)
  {
    $name = readdir($handle);
    if (!is_string($name)) break;
    if ($name ===  '.') continue;
    if ($name === '..') continue;
    $wysiwyg_lists['smileys'][] = $name;
  }
  closedir($handle);
}


$wysiwyg_lists['sizes'] = array(
  ''  => 'Font size',
  '1' => '1',
  '2' => '2',
  '3' => '3',
  '4' => '4',
  '5' => '5',
  '6' => '6',
  '7' => '7');


$wysiwyg_lists['colors'] = array();

     $x = 0;
     $y = 0;
for ($r = 0; $r < 6; $r++)
for ($g = 0; $g < 6; $g++)
for ($b = 0; $b < 6; $b++)
{
  $wysiwyg_lists['colors'][] = array(
    'x1' => $x*8+2,
    'y1' => $y*8+2,
    'x2' => $x*8+8,
    'y2' => $y*8+8,
    'color' => str_pad(dechex((int)(0xFF*$r/5)*0x100*0x100+
                              (int)(0xFF*$g/5)*0x100+
                              (int)(0xFF*$b/5)), 6, 0, STR_PAD_LEFT));
  if ($x == 17) $y++;
  if ($x != 17) $x++; else $x = 0;
}


?>