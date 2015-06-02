<h3>ToDo ${ID}</h3>
<table class="table table-hover table-condensed">
    <tr><th>Property</th><th>Value</th></tr>
    <tr><td>ID</td><td>${ID}</td></tr>
    <tr><td>ip</td><td>${ip}</td></tr>
    <tr><td>querytime</td><td>${querytime}</td></tr>
    <tr><td>time</td><td>${time}</td></tr>
    <tr><td>http_referer</td><td>${http_referer}</td></tr>
    <tr><td>http_user_agent</td><td>${http_user_agent}</td></tr>
    <tr><td>user</td><td>${username}</td></tr>
    <tr><td>message</td><td><textarea id="ta_message" style="width: 80%; height: 400px;">${message}</textarea></td></tr>
</table>
<button id="btn_back" onClick="system.load('todo');" class="btn btn-sm btn-success" style="margin-right: 15px; height: 32px; font-size: 13px; float: left;"><span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span> ${basic_back}</button>
<button id="btn_edit" class="btn btn-sm btn-danger" style="margin-right: 15px; height: 32px; font-size: 13px; float: right;" todo="${ID}"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> ${basic_edit}</button>
<button id="btn_close" class="btn btn-sm btn-danger" style="display: none; margin-right: 15px; height: 32px; font-size: 13px; float: right;" todo="${ID}"><span class="glyphicon glyphicon-remove-sign" aria-hidden="true"></span> ${basic_close}</button>
<button id="btn_open" class="btn btn-sm btn-danger" style="display: none; margin-right: 15px; height: 32px; font-size: 13px; float: right;" todo="${ID}"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> ${basic_open}</button>
<button id="btn_assign" class="btn btn-sm btn-success" style="${display_assign} margin-right: 15px; height: 32px; font-size: 13px; float: right;" todo="${ID}"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> ${basic_assign}</button>
<button id="btn_deassign" class="btn btn-sm btn-danger" style="${display_deassign} margin-right: 15px; height: 32px; font-size: 13px; float: right;" todo="${ID}"><span class="glyphicon glyphicon-remove-sign" aria-hidden="true"></span> ${basic_deassign}</button>