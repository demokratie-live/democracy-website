<div id="table_log">
    ${basic_rows}: ${count}
    <table class="table table-hover table-condensed tablesorter" id="sai_mod_security_table">  
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
        </thead> 
        <tbody>
            ${table}
        </tbody>
    </table>
</div>