<div id="truncate_modal" class="modal hide fade">
    <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        <h3>Truncate table system.sys_log</h3>
    </div>
    <div class="modal-body">
        <p>This action will delete all error messages from database. <br /> Are you sure?</p>
        <span id="info_box" />
    </div>
    <div class="modal-footer">
        <a href="#" class="btn" data-dismiss="modal">Cancel</a>
        <a href="#" class="btn btn-danger" id="truncate_table">Yes, delete all!</a>
    </div>
</div>            

<button id="refresh_error_table" class="btn" style="height: 32px; font-size: 13px; float: left">Refresh</button>
<img id="loader" src="${PICPATH}ajax-loader.gif" style="margin-left: 10px; display: none;  float: left"/>
<div id="filter-error" class="btn-group" style="left: 60px; float: left;">
    <button class="btn active" href="#" filter="">All</button>
    ${error_filter}
    <br/><br/>
</div>
<button data-toggle="modal" href="#truncate_modal" class="btn" style="height: 32px; font-size: 13px; float: right;">Truncate Table</button>
<button id="show_visualtization" class="btn"  style="height: 32px; font-size: 13px; float: right;">Show Stats</button>
<br/><br/>
<div id="table-wrapper"></div>
<br/><br/>
<div id="visualization" style="width: 100%; height: 100%; display: none;">
    <div id="visualization1"></div>
    <div id="visualization2"></div>
    <div id="visualization3"></div>
    <div id="visualization4"></div>
    <div id="visualization5"></div>
</div>