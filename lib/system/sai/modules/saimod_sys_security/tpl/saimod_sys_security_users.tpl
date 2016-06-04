<ul class="nav nav-pills" id="right_filter">    
    <li class="${active}"><a href="#!security;filter.all;search.${search}">${basic_all}</a></li>
    ${right_filter}
    <button class="btn-sm btn btn-success" state="security;filter.${filter};search." id="btn_search" type="submit" style="float: right; margin-left: 10px;"><span class="glyphicon glyphicon-search" aria-hidden="true"></span> ${basic_search}</button>
    <input class="input-medium search-query action-control" id="input_search" type="text" placeholder="${basic_placeholder_search}" size="20" style="float: right;" value="${search}"/>
</ul>
<div id="table_security">
    <h6>${basic_rows}: ${count} ${basic_page}: ${page}</h6>
    <table class="sai_table table table-hover table-condensed tablesorter" id="sai_mod_security_table" style="overflow: auto;">
        <tr>
            <th>${table_id}</th>
            <th>${table_username}</th>
            <th>${table_email}</th>
            <th>${table_join_date}</th>
            <th>${table_language}</th>
            <th>${table_last_active}</th>
            <th>${table_email_confirmed}</th>
        </tr>
        ${table}
    </table>
    <ul class="pagination">
        <li><a href="#!security;filter.${filter};search.${search};page.0">&laquo;</a></li>
        ${pagination}
        <li><a href="#!security;filter.${filter};search.${search};page.${page_last}">&raquo;</a></li>
    </ul>
</div>