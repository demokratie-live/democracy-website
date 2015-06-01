<h4>${sai_todo_title}</h4>
<hr>
<div class="tabbable">
    <ul class="nav nav-tabs" id="tabs_todo">
        <li class="active"><a href="#!todo" id="menu_todolist">ToDo</a></li>
        <li><a href="#!todo(doto)" id="menu_doto">DoTo</a></li>
        <li><a href="#!todo(stats)" id="menu_stats">Statistics</a></li>
        <img id="img_loader" src="${PICPATH}ajax-loader.gif" style="margin-left: 10px; margin-top: 10px; display: none;  float: left"/>
        <button id="btn_refresh" class="btn-primary btn btn-sm" onClick="system.load('todo',true);" style="margin-right: 15px; height: 32px; font-size: 13px; float: right;"><span class="glyphicon glyphicon-refresh" aria-hidden="true"></span> ${basic_refresh}</button>
        <button id="btn_close_all" class="btn-danger btn btn-sm" style="margin-right: 15px; height: 32px; font-size: 13px; float: right;"><span class="glyphicon glyphicon-minus-sign" aria-hidden="true"></span> ${basic_close_all}</button>
        <button id="btn_new" class="btn-success btn btn-sm" onClick="system.load('todo(new)');" style="margin-right: 15px; height: 32px; font-size: 13px; float: right;"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span> ${basic_add}</button>
    </ul>
    <div class="tab-content">        
        <div class="tab-pane active" id="tab_todo"></div>
    </div>
</div>