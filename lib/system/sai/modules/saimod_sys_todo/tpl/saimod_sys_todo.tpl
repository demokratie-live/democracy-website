<div class="row">
    <div class="col-12 sai_padding_10 bg-primary">
        <h4 class="sai_margin_off">&nbsp;<span class="fa fa-tasks" aria-hidden="true"></span>&nbsp;&nbsp;${sai_todo_title}</h4>
    </div>
    <div class="col-md-2 sai_padding_off">
        <ul class="nav bg-light flex-column" id="tabs_todo">
            <li class="nav-item"><a class="nav-link active" href="#!todo" id="menu_todolist">ToDo</a></li>
                <li class="nav-item"><a class="nav-link" href="#!todo(doto)" id="menu_doto">DoTo</a></li>
                <li class="nav-item"><a class="nav-link" href="#!todo(stats)" id="menu_stats">Statistics</a></li>
                <img id="img_loader" src="./files/sai/ajax-loader.gif" style="margin-left: 10px; margin-top: 10px; display: none;  float: left"/>
                <button id="btn_refresh" class="btn-primary btn btn-sm" onClick="system.load('todo',true);" style="height: 32px; font-size: 13px; float: right;"><span class="glyphicon glyphicon-refresh" aria-hidden="true"></span> ${basic_refresh}</button>
                <button id="btn_close_all" class="btn-danger btn btn-sm" style="margin-right: 15px; height: 32px; font-size: 13px; float: right;"><span class="glyphicon glyphicon-minus-sign" aria-hidden="true"></span> ${basic_close_all}</button>
                <button id="btn_new" class="btn-success btn btn-sm" onClick="system.load('todo(new)');" style="margin-right: 15px; height: 32px; font-size: 13px; float: right;"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span> ${basic_add}</button>
        </ul>
    </div>
    <div class="col-md-10 sai_padding_off sai_border_left" id="tab_todo"></div>
</div>