<div id="cron_wrapper">
    <h4>System Cron</h4>
    <hr>
    <div id="cron_content">
        <table class="table table-hover table-condensed" style="overflow: auto;">
            <tr>
                <th>class</th>
                <th>min</th>
                <th>hour</th>
                <th>day</th>
                <th>day_week</th>
                <th>month</th>
                <th>last_run</th>
                <th>status</th>
            </tr>
            ${content}
            <tr>
                <td><input type="text" id="new_cron_class" placeholder="class" style="width: 140px;"></td>
                <td><input type="text" id="new_cron_min" placeholder="min" style="width: 140px;"></td>
                <td><input type="text" id="new_cron_hour" placeholder="hour" style="width: 140px;"></td>
                <td><input type="text" id="new_cron_day" placeholder="day" style="width: 140px;"></td>
                <td><input type="text" id="new_cron_day_week" placeholder="day_week" style="width: 140px;"></td>
                <td><input type="text" id="new_cron_month" placeholder="month" style="width: 140px;"></td>
                <td></td>
                <td><button type="button" class="btn-small btn-success" id="addcron">Add</button></td>
            </tr>    
        </table>
    </div>
</div>
