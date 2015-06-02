<div id="table-wrapper">
    Rows: ${count}
    <h5>User ToDo's</h5>
    <table class="table table-hover table-condensed">
        <tr>
            <th>${time_ago}</th>
            <th>${table_message}</th>
            <th>${table_author}</th>
            <th>${table_assignee}</th>
        </tr>
        ${todo_user_list_elements}
    </table>
    <hr>
    <h5>Generated ToDo's</h5>
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
            <th>${table_count}</th>
        </tr>
        ${todo_list_elements}
    </table>
</div>