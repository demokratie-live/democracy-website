<div id="cron_wrapper">
<h4>System Cron</h4>
<hr>
<div id="cron_content">    
<div class="tabbable">
    <ul class="nav nav-tabs" id="localetab">
        ${tabopts}
    </ul>
    <div class="tab-content">
        ${tabs}        
    </div>
</div>
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
        <tr>
            <td><input type="text" id="new_cron_class" placeholder="class" style="width: 140px;"></td>
            <td><input type="text" id="new_cron_min" placeholder="min" style="width: 140px;"></td>
            <td><input type="text" id="new_cron_hour" placeholder="hour" style="width: 140px;"></td>
            <td><input type="text" id="new_cron_day" placeholder="day" style="width: 140px;"></td>
            <td><input type="text" id="new_cron_day" placeholder="day_week" style="width: 140px;"></td>
            <td><input type="text" id="new_cron_month" placeholder="month" style="width: 140px;"></td>
            <td></td>
            <td></td>
        </tr>
        
    </table>
    <!--<button type="button" class="btn-small btn-success" id="addcron">Add</button>-->
</div><!-- /.modal -->
</div>
