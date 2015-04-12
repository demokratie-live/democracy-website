<h4>System Log</h4>
<hr>
<div class="tabbable">
    <ul class="nav nav-tabs" id="tabs_log">
        <li class="active"><a href="#!log" id="menu_loglist">Log</a></li>
        <li><a href="#!log(stats)" id="menu_stats">Statistics</a></li>
        <img id="loader" src="${PICPATH}ajax-loader.gif" style="margin-left: 10px; margin-top: 10px; display: none;  float: left"/>
        <button onClick="system.load('log',true);" class="btn-success" style="margin-right: 15px; height: 32px; font-size: 13px; float: right;">Refresh</button>
    </ul>
    <div class="tab-content">        
        <div class="tab-pane active" id="tab_log"></div>
    </div>
</div>