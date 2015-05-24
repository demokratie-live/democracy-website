<h4>${sai_api_title}</h4>
<hr>  
<div class="tabbable">
    <ul class="nav nav-tabs" id="tabs_api">
        <li><a href="#!api" id="menu_all">All</a></li>
        ${tabopts}
        <button onClick="system.load('api(new)',true);" class="btn-sm btn btn-success" style="margin-right: 15px; height: 32px; font-size: 13px; float: right;"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span> New</button>
    </ul>
    <div class="tab-content">
        <div class="tab-pane active" id="tab_api"></div>       
    </div>
</div>