<div class="row-fluid">
    <div class="col-md-12 sai_padding_off">
        <h4>&nbsp;<span class="glyphicon glyphicon-list" aria-hidden="true"></span>&nbsp;&nbsp;${sai_todo_title}</h4>
    </div>
</div>
<div class="row-fluid">
    <div class="col-md-12 sai_padding_off">
        <hr>
    </div>
</div>
<div class="row-fluid">
    <div class="col-md-12 sai_padding_off">
        <div class="tabbable">
            <ul class="nav nav-tabs" id="tabs_todo">
                <li class="nav-item"><a class="nav-link active" href="#!todo" id="menu_todolist">ToDo</a></li>
                <li class="nav-item"><a class="nav-link" href="#!todo(doto)" id="menu_doto">DoTo</a></li>
                <li class="nav-item"><a class="nav-link" href="#!todo(stats)" id="menu_stats">Statistics</a></li>
                <img id="img_loader" src="./files/sai/ajax-loader.gif" style="margin-left: 10px; margin-top: 10px; display: none;  float: left"/>
                <button id="btn_refresh" class="btn-primary btn btn-sm" onClick="system.load('todo',true);" style="height: 32px; font-size: 13px; float: right;"><span class="glyphicon glyphicon-refresh" aria-hidden="true"></span> ${basic_refresh}</button>
                <button id="btn_close_all" class="btn-danger btn btn-sm" style="margin-right: 15px; height: 32px; font-size: 13px; float: right;"><span class="glyphicon glyphicon-minus-sign" aria-hidden="true"></span> ${basic_close_all}</button>
                <button id="btn_new" class="btn-success btn btn-sm" onClick="system.load('todo(new)');" style="margin-right: 15px; height: 32px; font-size: 13px; float: right;"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span> ${basic_add}</button>
            </ul>
            <div class="tab-content sai_margin_top_10">        
                <div class="tab-pane active" id="tab_todo"></div>
            </div>
        </div>
    </div>
</div>