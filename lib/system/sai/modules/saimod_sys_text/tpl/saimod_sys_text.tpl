<h4>${sai_text_title}</h4>
<hr>
<div class="tabbable">
    <ul class="nav nav-tabs" id="tabs_text">
        <li><a href="#!text" id="menu_tag_all">All</a></li>
        <li><a href="#!text(notag)" id="menu_tag_notag">No Tag</a></li>
        ${tabopts}
        <input type="submit" value="Add" class="btn-small btn-success content_add" onClick="system.load('text(edittext(editor));id.${new_id};lang.${new_lang}');" style="margin-left: 15px; float: right;">
    </ul>
    <div class="tab-content" id="tab_content"></div>
</div>
