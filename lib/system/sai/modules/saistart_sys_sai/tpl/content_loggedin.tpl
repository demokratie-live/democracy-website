<div class="masthead">
    <h3 class="muted">Welcome to the SYSTEM Admin Interface - short SAI.</h3>
    <h4 class="text-info">From here you can control and manage your Website.</h4>
</div>
<div id="container_top">
    <div class="well" id="project">
        <h2 class="muted"><a href="#!config">Project</a></h2>
        <b>Name:</b> ${project_name}<br/>
        <b>URL:</b> <a href="${project_url}" target="_blank">${project_url}</a><br/>
        <b>Progress:</b> ${project}%
    </div>
    <div class="well" id="analytics">
        <h2 class="muted"><a href="#!log">Analytics</a></h2>
        <b>IPs today:</b> ${ip_today}<br/>
        <b>Users today:</b> ${user_today}<br/>
        <br/>
        <b>IPs this week:</b> ${ip_week}<br/>
        <b>Users this week:</b> ${user_week}<br/>
        <br/>
        <b>IPs this month:</b> ${ip_month}<br/>
        <b>Users this month:</b> ${user_month}
    </div>
    <div class="well" id="git">
        <h2 class="muted">Git</h2>
        <b>Current Project Version:</b> ${git_project}<br/>
        <b>Current SYSTEM Version:</b> ${git_system}
    </div>
    <div class="well" id="logout">
        ${logout}
    </div>
</div>
<div class="well" id="todo">
    <h2 class="muted"><a href="#!todo">Todo</a></h2>
    <b>Status:</b> ${project_count}/${project_all}<br/>
    <b>Progress:</b> ${project}%
    ${todo_entries}
</div>
<div class="well" id="log">
    <h2 class="muted"><a href="#!log">Log</a></h2>
    <h4 class="muted">100 Latest Log Entries</h4>
    ${log_entries}
</div>