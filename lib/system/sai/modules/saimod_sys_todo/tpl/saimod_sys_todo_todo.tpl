<h3>ToDo ${ID}</h3>
<table class="table table-hover table-condensed">
    <tr><th>Property</th><th>Value</th></tr>
    <tr><td>ID</td><td>${ID}</td></tr>
    <tr><td>class</td><td>${class}</td></tr>    
    <tr><td>code</td><td>${code}</td></tr>
    <tr><td>file</td><td>${file}</td></tr>
    <tr><td>line</td><td>${line}</td></tr>
    <tr><td>trace</td><td>${trace}</td></tr>
    <tr><td>ip</td><td>${ip}</td></tr>
    <tr><td>querytime</td><td>${querytime}</td></tr>
    <tr><td>time</td><td>${time}</td></tr>
    <tr><td>server_name</td><td>${server_name}</td></tr>
    <tr><td>server_port</td><td>${server_port}</td></tr>
    <tr><td>request_uri</td><td>${request_uri}</td></tr>
    <tr><td>url</td><td><a href="${server_name}:${server_port}${request_uri}">${server_name}:${server_port}${request_uri}</a></td></tr>
    <tr><td>post</td><td>${post}</td></tr>
    <tr><td>http_referer</td><td>${http_referer}</td></tr>
    <tr><td>http_user_agent</td><td>${http_user_agent}</td></tr>
    <tr><td>user</td><td>${username}</td></tr>
    <tr><td>thrown</td><td>${thrown}</td></tr>    
    <tr><td>message</td><td>${message}</td></tr>
</table>
<button id="btn_back" onClick="system.load('todo');" class="btn-success" style="margin-right: 15px; height: 32px; font-size: 13px; float: left;">Back</button>
<button id="btn_close" class="btn-danger" style="display: none; margin-right: 15px; height: 32px; font-size: 13px; float: right;" todo="${ID}">Close</button>
<button id="btn_open" class="btn-danger" style="display: none; margin-right: 15px; height: 32px; font-size: 13px; float: right;" todo="${ID}">Open</button>