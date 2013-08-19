// Copyright (C) 2009-2011 Ilya S. Lyubinskiy. All rights reserved. See license.txt

var WysiwygRangeInfo = new Array();


// ***** Range *****************************************************************

function WysiwygRange(wysiwyg)
{
  if (document.activeElement.id == wysiwyg)
  if (navigator.appName == 'Microsoft Internet Explorer')
       WysiwygRangeInfo[wysiwyg] = FrameDocument(wysiwyg).selection.createRange();
  else WysiwygRangeInfo[wysiwyg] = FrameDocument(wysiwyg).          createRange();

  document.getElementById(wysiwyg+'_input').value = FrameDocument(wysiwyg).body.innerHTML;

  setTimeout('WysiwygRange("'+wysiwyg+'")', 100);
}


// ***** Init ******************************************************************

function WysiwygInit(wysiwyg, html)
{
  FrameDocument(wysiwyg).write(html);
  FrameDocument(wysiwyg).close();
  FrameDocument(wysiwyg).body.contentEditable = 'true';
   WysiwygRange(wysiwyg);
}


// ***** Cmd *******************************************************************

function WysiwygCmd(wysiwyg, command, value)
{
  FrameDocument(wysiwyg).body.focus();
  FrameDocument(wysiwyg).execCommand(command, false, value);
}


// ***** CmdColorBack **********************************************************
// ***** CmdColorFore **********************************************************

function WysiwygCmdColorBack(wysiwyg, color) { WysiwygCmd(wysiwyg, 'backcolor', color); return false; }
function WysiwygCmdColorFore(wysiwyg, color) { WysiwygCmd(wysiwyg, 'forecolor', color); return false; }


// ***** Ins *******************************************************************

function WysiwygIns(wysiwyg, tag)
{
  FrameDocument(wysiwyg).body.focus();

  if (!WysiwygRangeInfo[wysiwyg])
  if (navigator.appName == 'Microsoft Internet Explorer')
       WysiwygRangeInfo[wysiwyg] = FrameDocument(wysiwyg).selection.createRange();
  else WysiwygRangeInfo[wysiwyg] = FrameDocument(wysiwyg).          createRange();

  if (navigator.appName == 'Microsoft Internet Explorer')
  {
    var tmp = document.createElement('div');
        tmp.appendChild(tag);
    WysiwygRangeInfo[wysiwyg].select();
    WysiwygRangeInfo[wysiwyg].pasteHTML(tmp.innerHTML);
  }
  else
  {
            var selection = FrameWindow(wysiwyg).getSelection();
    for(var i = selection.rangeCount-1; i >= 0; i--)
                selection.getRangeAt(i).deleteContents();
                selection.getRangeAt(0).insertNode(tag);
                selection.removeAllRanges();
                                   WysiwygRangeInfo[wysiwyg].setStartAfter(tag);
                                   WysiwygRangeInfo[wysiwyg].setEndAfter(tag);
                selection.addRange(WysiwygRangeInfo[wysiwyg]);
	}
}


// ***** InsHyperlink **********************************************************

function WysiwygInsHyperlink(wysiwyg)
{
  if    ('' == document.getElementById(wysiwyg+'_hyperlink_text' ).value) return;
  if    ('' == document.getElementById(wysiwyg+'_hyperlink_url'  ).value) return;

  var text   = document.getElementById(wysiwyg+'_hyperlink_text' ).value;
  var url    = document.getElementById(wysiwyg+'_hyperlink_url'  ).value;
  var title  = document.getElementById(wysiwyg+'_hyperlink_title').value;

               document.getElementById(wysiwyg+'_hyperlink_main' ).style.display = 'none';
               document.getElementById(wysiwyg+'_hyperlink_text' ).value = '';
               document.getElementById(wysiwyg+'_hyperlink_url'  ).value = '';
               document.getElementById(wysiwyg+'_hyperlink_title').value = '';

                  var tag = FrameDocument(wysiwyg).createElement('a');
                      tag.innerHTML = text;
                      tag.href      = url;
                      tag.title     = title;
  WysiwygIns(wysiwyg, tag);
}


// ***** InsPicture ************************************************************

function WysiwygInsPicture(wysiwyg)
{
  if    ('' == document.getElementById(wysiwyg+'_picture_url'    ).value) return;

  var url    = document.getElementById(wysiwyg+'_picture_url'    ).value;
  var alt    = document.getElementById(wysiwyg+'_picture_alt'    ).value;
  var width  = document.getElementById(wysiwyg+'_picture_width'  ).value;
  var height = document.getElementById(wysiwyg+'_picture_height' ).value;

               document.getElementById(wysiwyg+'_picture_main'   ).style.display = 'none';
               document.getElementById(wysiwyg+'_picture_url'    ).value = '';
               document.getElementById(wysiwyg+'_picture_alt'    ).value = '';
               document.getElementById(wysiwyg+'_picture_width'  ).value = '';
               document.getElementById(wysiwyg+'_picture_height' ).value = '';

                  var tag = FrameDocument(wysiwyg).createElement('img');
                      tag.src    = url;
                      tag.alt    = alt;
         if (width)   tag.width  = width;
         if (height)  tag.height = height;
  WysiwygIns(wysiwyg, tag);
}


// ***** InsTable **************************************************************

function WysiwygInsTable(wysiwyg)
{
  if    ('' == document.getElementById(wysiwyg+'_table_rows'     ).value) return;
  if    ('' == document.getElementById(wysiwyg+'_table_cols'     ).value) return;

  var rows   = document.getElementById(wysiwyg+'_table_rows'     ).value;
  var cols   = document.getElementById(wysiwyg+'_table_cols'     ).value;
  var border = document.getElementById(wysiwyg+'_table_border'   ).value;

               document.getElementById(wysiwyg+'_table_main'     ).style.display = 'none';

                                   var tag = FrameDocument(wysiwyg).createElement('table'); tag.border = border;
  for (var i = 0; i < rows; i++) { var trN = FrameDocument(wysiwyg).createElement('tr'   ); tag.appendChild(trN);
  for (var j = 0; j < cols; j++) { var tdN = FrameDocument(wysiwyg).createElement('td'   ); trN.appendChild(tdN); tdN.innerHTML = 'Item'+' '+i+':'+j; } }
                                                WysiwygIns(wysiwyg, tag);
}


// ***** InsSmiley *************************************************************

function WysiwygInsSmiley(wysiwyg, url)
{
                  var tag = FrameDocument(wysiwyg).createElement('img');
                      tag.src    = url;
                      tag.alt    = '';
                      tag.width  = 20;
                      tag.height = 20;
  WysiwygIns(wysiwyg, tag);
}


// ***** UploadAsHyperlink *****************************************************

function WysiwygUploadAsHyperlink(wysiwyg, url)
{
  document.getElementById(wysiwyg+'_hyperlink_text' ).value = '';
  document.getElementById(wysiwyg+'_hyperlink_url'  ).value = url;
  document.getElementById(wysiwyg+'_hyperlink_title').value = '';
                PopupShow(wysiwyg+'_hyperlink',
      'tag-bottom', 0, 3, wysiwyg+'_hyperlink');
}


// ***** UploadAsPicture *******************************************************

function WysiwygUploadAsPicture(wysiwyg, url)
{
  document.getElementById(wysiwyg+'_picture_url'    ).value = url;
  document.getElementById(wysiwyg+'_picture_alt'    ).value = '';
  document.getElementById(wysiwyg+'_picture_width'  ).value = '';
  document.getElementById(wysiwyg+'_picture_height' ).value = '';
                PopupShow(wysiwyg+'_picture',
      'tag-bottom', 0, 3, wysiwyg+'_picture');
}