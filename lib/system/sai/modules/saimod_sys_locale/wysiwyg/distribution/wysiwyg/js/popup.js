// Copyright (C) 2009-2011 Ilya S. Lyubinskiy. All rights reserved. See license.txt

var PopupZIndex = 10000;
var PopupMouseX;
var PopupMouseY;
var PopupMoving;
var PopupTarget;
var PopupOldFunction;


// ***** MouseDown *************************************************************

function PopupMouseDown(e)
{
  if ( PopupMoving) return;

       PopupMouseX = MouseInfo(e).x;
       PopupMouseY = MouseInfo(e).y;
}


// ***** MouseMove *************************************************************

function PopupMouseMove(e)
{
  if (!PopupMoving) return;

       PopupTarget.style.left = (PopupTarget.offsetLeft+MouseInfo(e).x-PopupMouseX)+'px';
       PopupTarget.style.top  = (PopupTarget.offsetTop +MouseInfo(e).y-PopupMouseY)+'px';

       PopupMouseX = MouseInfo(e).x;
       PopupMouseY = MouseInfo(e).y;
}


// ***** MouseUp ***************************************************************

function PopupMouseUp(e)
{
  if (!PopupMoving) return;

       PopupMouseX = MouseInfo(e).x;
       PopupMouseY = MouseInfo(e).y;
       PopupMoving = false;

  if (navigator.appName == 'Microsoft Internet Explorer') document.onselectstart = PopupOldFunction;
  if (navigator.appName != 'Microsoft Internet Explorer') document.onmousedown   = PopupOldFunction;
}


// ***** DragElementMouseDown **************************************************

function PopupDragElementMouseDown(e)
{
  if ( PopupMoving || !MouseInfo(e).leftButton) return;

       PopupMouseX = MouseInfo(e).x;
       PopupMouseY = MouseInfo(e).y;
       PopupMoving = true;
       PopupTarget = this.target;

  if (navigator.appName == 'Microsoft Internet Explorer') PopupOldFunction = document.onselectstart;
  if (navigator.appName != 'Microsoft Internet Explorer') PopupOldFunction = document.onmousedown;

  if (navigator.appName == 'Microsoft Internet Explorer') document.onselectstart = function () { return false; };
  if (navigator.appName != 'Microsoft Internet Explorer') document.onmousedown   = function () { return false; };
}


// ***** ExitElementClick ******************************************************

function PopupExitElementClick(e)
{
  PopupMouseUp(e);
  PopupTarget.style.display = 'none';
}


// ***** Show ******************************************************************

function PopupShow(id, pos, x, y, pos_id)
{
  var main_id = id+'_main';
  var drag_id = id+'_drag';
  var exit_id = id+'_exit';

  var main_element = document.getElementById(main_id);
  var drag_element = document.getElementById(drag_id);
  var exit_element = document.getElementById(exit_id);
  var  pos_element = document.getElementById( pos_id);

  main_element.style.display = 'block';

  if (pos == 'mouse')
  {
    x += document.documentElement.scrollLeft+PopupMouseX;
    y += document.documentElement.scrollTop +PopupMouseY;
  }

  if (pos == 'tag')
  {
    x += ElementPos(pos_element).x;
    y += ElementPos(pos_element).y;
  }

  if (pos == 'tag-right')
  {
    x += ElementPos(pos_element).x+pos_element.clientWidth;
    y += ElementPos(pos_element).y;
  }

  if (pos == 'tag-bottom')
  {
    x += ElementPos(pos_element).x;
    y += ElementPos(pos_element).y+pos_element.clientHeight;
  }

  if (pos == 'window-top-left')
  {
    x += document.documentElement.scrollLeft+(WindowSize().w-main_element.clientWidth )*0/2;
    y += document.documentElement.scrollTop +(WindowSize().h-main_element.clientHeight)*0/2;
  }

  if (pos == 'window-center')
  {
    x += document.documentElement.scrollLeft+(WindowSize().w-main_element.clientWidth )*1/2;
    y += document.documentElement.scrollTop +(WindowSize().h-main_element.clientHeight)*1/2;
  }

  if (pos == 'window-bottom-right')
  {
    x += document.documentElement.scrollLeft+(WindowSize().w-main_element.clientWidth )*2/2;
    y += document.documentElement.scrollTop +(WindowSize().h-main_element.clientHeight)*2/2;
  }

  main_element.style.display = 'block';
  main_element.style.left    =  x+'px';
  main_element.style.top     =  y+'px';
  main_element.style.zIndex  =  PopupZIndex++;

  drag_element.target      = main_element;
  drag_element.onmousedown = PopupDragElementMouseDown;
  exit_element.onclick     = PopupExitElementClick;
}


// ***** Attach Events *********************************************************

if (navigator.appName == 'Microsoft Internet Explorer')
{
  document.attachEvent('onmousedown', PopupMouseDown);
  document.attachEvent('onmousemove', PopupMouseMove);
  document.attachEvent('onmouseup',   PopupMouseUp);
}
else
{
  document.addEventListener('mousedown', PopupMouseDown, false);
  document.addEventListener('mousemove', PopupMouseMove, false);
  document.addEventListener('mouseup',   PopupMouseUp,   false);
}