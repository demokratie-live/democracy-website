<ul class="nav nav-pills" id="right_filter">    
    <li class="nav-item"><a class="nav-link ${active}" href="#!text;tag.${tag};filter.all;search.${search}">${basic_all}</a></li>
    ${lang_filter}
    <button class="btn-sm btn btn-success" state="text;tag.${tag};filter.${filter};search." id="btn_search" type="submit" style="float: right; margin-left: 10px;"><span class="glyphicon glyphicon-search" aria-hidden="true"></span> ${basic_search}</button>
    <input class="input-medium search-query action-control" id="input_search" type="text" placeholder="${basic_placeholder_search}" size="20" style="float: right;" value="${search}"/>
</ul>
<div id="table_text">
    <h6>${basic_rows}: ${count} ${basic_page}: ${page}</h6>
    <table class="table table-hover table-condensed sai_table tablesorter" id="sai_mod_text_table">
        <thead>
            <tr>
                <th>${table_id}</th>
                <th>${table_lang}</th>
                <th>${table_text}</th>
                <th>${table_author}</th>
                <th>${table_time_create}</th>
                <th>${table_author_edit}</th>
                <th>${table_time_edit}</th>
            </tr>
        </thead>
        <tbody>
            ${entries}
        </tbody>    
    </table>
    <ul class="pagination">
        <li class="page-item"><a class="page-link" href="#!text;tag.${tag};filter.${filter};search.${search};page.0">&laquo;</a></li>
        ${pagination}
        <li class="page-item"><a class="page-link" href="#!text;tag.${tag};filter.${filter};search.${search};page.${page_last}">&raquo;</a></li>
    </ul>
</div>