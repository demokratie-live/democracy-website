<div class="table-responsive">
    <table class="table table-striped table-condensed tablesorter sai_margin_off" id="table_log">
        <thead>
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
            <tr>
                <th colspan="9">
                    ${basic_rows}: ${count} ${basic_page}: ${page}
                    <button class="btn btn-sm btn-success pull-right" onClick="system.reload();" style="margin-left: 10px;"><span class="fa fa-refresh" aria-hidden="true"></span></button>
                    <button class="btn btn-sm btn-success pull-right" state="log;filter.${filter};search." id="btn_search_log" type="submit" style="margin-left: 10px;"><span class="fa fa-search" aria-hidden="true"></span> ${basic_search}</button>
                    <input class="input-medium search-query action-control pull-right" id="input_search_log" type="text" placeholder="${basic_placeholder_search}" size="20" value="${search}"/>
                </th>
            </tr>
        </thead>
        <tbody id="table_log" style="word-break: break-word;">
            ${table}
        </tbody>    
    </table>
</div>
<ul class="pagination sai_margin_top_10">
    <li class="page-item"><a class="page-link" href="#!log;filter.${filter};search.${search_encoded};page.0">&laquo;</a></li>
    ${pagination}
    <li class="page-item"><a class="page-link" href="#!log;filter.${filter};search.${search_encoded};page.${page_last}">&raquo;</a></li>
</ul>