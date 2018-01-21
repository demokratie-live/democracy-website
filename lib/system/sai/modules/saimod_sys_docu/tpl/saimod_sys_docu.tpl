<div class="row-fluid">
    <div class="col-md-12 sai_padding_off">
        <h4>&nbsp;<span class="fa fa-book" aria-hidden="true"></span>&nbsp;&nbsp;${sai_docu_title}</h4>
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
            <ul class="nav nav-tabs" id="tabs_docu">
                ${tabopts}
                <button id="btn_generate" class="btn-primary btn btn-sm" style="height: 32px; font-size: 13px; float: right;"><span class="fa fa-refresh" aria-hidden="true"></span> ${basic_generate} HTML</button>
                <button id="btn_generate_md" class="btn-primary btn btn-sm" style="margin-right: 15px; height: 32px; font-size: 13px; float: right;"><span class="fa fa-refresh" aria-hidden="true"></span> ${basic_generate} MD</button>
            </ul>
            <div class="tab-content">
                <div class="tab-pane active" id="tab_docu">
                    <iframe src="${iframesrc}" style="width: 100%; min-height: 700px;"></iframe>
                </div>
            </div>
        </div>
    </div>
</div>