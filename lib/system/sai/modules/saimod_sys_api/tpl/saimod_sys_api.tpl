<div class="row-fluid">
    <div class="col-md-12 sai_padding_off">
        <h4>&nbsp;<span class="glyphicon glyphicon-console" aria-hidden="true"></span>&nbsp;&nbsp;${sai_api_title}</h4>
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
            <ul class="nav nav-tabs" id="tabs_api">
                <li><a href="#!api" id="menu_all">All</a></li>
                ${tabopts}
                <button onClick="system.load('api(new)',true);" class="btn-sm btn btn-success" style="margin-right: 15px; height: 32px; font-size: 13px; float: right;"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span> New</button>
            </ul>
            <div class="tab-content">
                <div class="tab-pane active" id="tab_api"></div>       
            </div>
        </div>
    </div>
</div>