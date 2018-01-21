<div class="row-fluid">
    <div class="col-md-12 sai_padding_off">
        <h4>&nbsp;<span class="fa fa-list" aria-hidden="true"></span>&nbsp;&nbsp;${sai_log_title}</h4>
    </div>
</div>
<div class="row-fluid">
    <div class="col-md-12 sai_padding_off">
        <hr>
    </div>
</div>
<div class="row-fluid">
    <div class="col-md-12 sai_padding_off">
        <ul class="nav nav-tabs" id="tabs_log">
            <li class="nav-item"><a class="nav-link active" href="#!log" id="menu_loglist">${basic_log}</a></li>
            <li class="nav-item"><a class="nav-link" href="#!log(stats)" id="menu_stats">${basic_analytics}</a></li>
            <img id="loader" src="./files/sai/ajax-loader.gif" style="margin-left: 10px; margin-top: 10px; display: none;  float: left"/>
            <button onClick="system.load('log',true);" class="btn-success btn btn-sm" style="height: 32px; font-size: 13px; float: right;"><span class="fa fa-refresh" aria-hidden="true"></span>&nbsp;${basic_refresh}</button>
        </ul>
        <div class="tab-content">
            <div class="tab-pane active" id="tab_log"></div>
        </div>
    </div>
</div>