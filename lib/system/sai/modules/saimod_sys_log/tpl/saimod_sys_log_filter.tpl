<ul class="nav nav-pills" id="error_filter">    
    <li class="${active}"><a href="#!log;filter.%;search.${search_encoded}">${basic_all}</a></li>
    ${error_filter}
    <button class="btn-sm btn btn-success" state="log;filter.${filter};search." id="btn_search_log" type="submit" style="float: right; margin-left: 10px;"><span class="glyphicon glyphicon-search" aria-hidden="true"></span> ${basic_search}</button>
    <input class="input-medium search-query action-control" id="input_search_log" type="text" placeholder="${basic_placeholder_search}" size="20" style="float: right;" value="${search}"/>
</ul>
<div id="table_log">
    <h6>${basic_rows}: ${count} ${basic_page}: ${page}</h6>
    <table class="table table-hover table-condensed tablesorter" style="word-break: break-word;" id="sai_mod_log_table">
        <tr>
            <th>${time_ago}</th>
            <th>${table_class}</th>
            <th>${table_message}</th>
            <th>${table_file}</th>
            <th>${table_line}</th>
            <th>${table_ip}</th>
            <th>${table_url}</th>
            <th>${table_user}</th>
            <th>${table_querytime}</th>
        </tr>
        ${table}
    </table>
    <ul class="pagination">
        <li><a href="#!log;filter.${filter};search.${search_encoded};page.0">&laquo;</a></li>
        ${pagination}
        <li><a href="#!log;filter.${filter};search.${search_encoded};page.${page_last}">&raquo;</a></li>
    </ul>
</div>