<h4>System ToDo</h4>
<hr>
<div class="tabbable">
    <ul class="nav nav-tabs" id="tabs_todo">
        <li class="active"><a href="#tab_todo" action="todolist">ToDo</a></li>
        <li><a href="#tab_todo" action="dotolist">DoTo</a></li>
        <li><a href="#tab_todo" action="stats">Statistics</a></li>
        <img id="img_loader" src="${PICPATH}ajax-loader.gif" style="margin-left: 10px; margin-top: 10px; display: none;  float: left"/>
        <button id="btn_refresh" class="btn-primary" style="margin-right: 15px; height: 32px; font-size: 13px; float: right;">Refresh</button>
        <button id="btn_new" class="btn-success" style="margin-right: 15px; height: 32px; font-size: 13px; float: right;">Add</button>
    </ul>
    <div class="tab-content">        
        <div class="tab-pane active" id="tab_todo"></div>
    </div>
</div>