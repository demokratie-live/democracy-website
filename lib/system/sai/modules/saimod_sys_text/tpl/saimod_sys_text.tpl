<div class="row-fluid">
    <div class="col-md-12 sai_padding_off">
        <h4>&nbsp;<span class="fa fa-edit" aria-hidden="true"></span>&nbsp;&nbsp;${sai_text_title}</h4>
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
            <ul class="nav nav-tabs" id="tabs_text">
                <li class="nav-item"><a class="nav-link" href="#!text" id="menu_tag_all">${basic_all}</a></li>
                <li class="nav-item"><a class="nav-link" href="#!text;tag.notag" id="menu_tag_notag">${basic_no_tag}</a></li>
                ${tabopts}
                <button class="btn-sm btn btn-success content_add" onClick="system.load('text(edittext(editor));id.${new_id};lang.${new_lang}');" style="margin-left: 15px; float: right;"><span class="fa fa-plus" aria-hidden="true"></span> ${basic_add}</button>
                <button type="submit" value="${basic_show_all}" id="btn_show_all" class="btn-sm btn btn-primary" style="margin-left: 15px; float: right;"><span class="fa fa-eye" aria-hidden="true"></span> ${basic_show_all}</button>
            </ul>
            <div class="tab-content sai_margin_top_10" id="tab_content"></div>
        </div>
    </div>
</div>