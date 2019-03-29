<div class="row">
    <div class="col-12 sai_padding_10 bg-primary">
        <h4 class="sai_margin_off">&nbsp;<span class="fa fa-book" aria-hidden="true"></span>&nbsp;&nbsp;${sai_docu_title}</h4>
    </div>
    <div class="col-md-2 sai_padding_off">
        <ul class="nav bg-light flex-column" id="tabs_docu">
            ${tabopts}
            <button id="btn_generate" class="btn-primary btn btn-sm" style="height: 32px; font-size: 13px; float: right;"><span class="fa fa-refresh" aria-hidden="true"></span> ${basic_generate} HTML</button>
            <button id="btn_generate_md" class="btn-primary btn btn-sm" style="height: 32px; font-size: 13px; float: right;"><span class="fa fa-refresh" aria-hidden="true"></span> ${basic_generate} MD</button>
        </ul>
    </div>
    <div class="col-md-10 sai_padding_off sai_border_left" id="tab_docu">
        <iframe src="${iframesrc}" style="width: 100%; min-height: 700px; border: 0; height: 100%;"></iframe>
    </div>
</div>