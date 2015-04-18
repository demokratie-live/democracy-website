<ul class="nav nav-pills" id="error_filter">    
    <li class="${active}"><a href="#!log" filter="%">${basic_all}</a></li>
    ${error_filter}
</ul>
<div id="table_log">
    ${basic_rows}: ${count}
    <table class="table table-hover table-condensed">                    
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
</div>