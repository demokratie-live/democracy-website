// Copyright (C) 2009-2011 Ilya S. Lyubinskiy. All rights reserved. See license.txt


// ***** ElementPos ************************************************************

function ElementPos(element)
{
  for (var x = 0, p = element; p; p = p.offsetParent) { if (ElementStyle(p).position != 'static') break; x += p.offsetLeft; }
  for (var y = 0, p = element; p; p = p.offsetParent) { if (ElementStyle(p).position != 'static') break; y += p.offsetTop;  }
  return { x : x, y : y };
}


// ***** ElementStyle **********************************************************

function ElementStyle(element)
{
  return element.currentStyle ?
         element.currentStyle : document.defaultView.getComputedStyle(element, null);
}


// ***** FrameWindow ***********************************************************

function FrameWindow(id)
{
  if (navigator.appName == 'Microsoft Internet Explorer')
       return document.        frames[id] ? document.        frames[id]               : null;
  else return document.getElementById(id) ? document.getElementById(id).contentWindow : null;
}


// ***** FrameDocument *********************************************************

function FrameDocument(id)
{
  if (navigator.appName == 'Microsoft Internet Explorer')
       return document.        frames[id] ? document.        frames[id]              .document : null;
  else return document.getElementById(id) ? document.getElementById(id).contentWindow.document : null;
}


// ***** MouseInfo *************************************************************

function MouseInfo(e)
{
  var          x = navigator.appName == 'Microsoft Internet Explorer' ? window.event.clientX     : e.clientX;
  var          y = navigator.appName == 'Microsoft Internet Explorer' ? window.event.clientY     : e.clientY;
  var leftButton = navigator.appName == 'Microsoft Internet Explorer' ? window.event.button == 1 : e.button == 0;
  return { x : x, y : y, leftButton : leftButton };
}


// ***** WindowSize ************************************************************

function WindowSize()
{
  var w = window.innerWidth  ? window.innerWidth  : document.documentElement.clientWidth;
  var h = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight;
  return { w : w, h : h };
}


// ***** XMLHttpRequest ********************************************************

if (!XMLHttpRequest) var XMLHttpRequest = function ()
{
  try { return new ActiveXObject(   'MSXML3.XMLHTTP'    ); } catch(e) {}
  try { return new ActiveXObject(   'MSXML2.XMLHTTP.3.0'); } catch(e) {}
  try { return new ActiveXObject(   'MSXML2.XMLHTTP'    ); } catch(e) {}
  try { return new ActiveXObject('Microsoft.XMLHTTP'    ); } catch(e) {}
}