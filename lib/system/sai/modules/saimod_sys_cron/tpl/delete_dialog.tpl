<div id="cron_deletedialog">
<h5>Cron Job: ${class}</h5>
<hr>
    <table class="table sai_table">
        <tr>
            <th>class</th>
            <th>min</th>
            <th>hour</th>
            <th>day</th>
            <th>day_week</th>
            <th>month</th>
        </tr>
        <tr>
            <td>${class}</td>
            <td>${min}</td>
            <td>${hour}</td>
            <td>${day}</td>
            <td>${day_week}</td>
            <td>${month}</td>
        </tr>
    </table>
</div>
<button type="button" class="btn btn-small btn-danger" cls="${class}" id="del_cron_del">Delete</button>
<button type="button" class="btn btn-small" id="del_cron_close">Close</button>
