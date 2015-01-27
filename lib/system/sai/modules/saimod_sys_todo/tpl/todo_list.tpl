<div id="table-wrapper">
    Rows: ${count}
    <h5>User ToDo's</h5>
    <table class="table table-hover table-condensed">
        <tr>
            <th>time ago</th>
            <th>message</th>
            <th>user</th>
        </tr>
        ${todo_user_list_elements}
    </table>
    <hr>
    <h5>Generated ToDo's</h5>
    <table class="table table-hover table-condensed">
        <tr>
            <th>time ago</th>
            <th>class</th>
            <th>message</th>
            <th>file</th>
            <th>line</th>
            <th>ip</th>
            <th>url</th>
            <th>user</th>
            <th>querytime</th>
            <th>count</th>
        </tr>
        ${todo_list_elements}
    </table>
</div>