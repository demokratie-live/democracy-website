<h4>${sai_cron_title}</h4>
<hr>
Last Visit: ${last_visit}<br/>
<a href="./sai.php?call=cron" target="_blank">Start Cron</a>
<div id="cron_content">
    <table class="table table-hover table-condensed sai_table tablesorter" id="sai_mod_cron_table" style="overflow: auto;">
        <thead>
            <tr>
                <th>class</th>
                <th>min</th>
                <th>hour</th>
                <th>day</th>
                <th>day_week</th>
                <th>month</th>
                <th>last_run</th>
                <th>next_run</th>
                <th>status</th>
                <th></th>
                <th></th>
                <th>action</th>
                <th></th>
            </tr>
        </thead>   
        <tbody>
            ${content}
        </tbody>    
        <tr>
            <td><input class="form-control" type="text" id="input_cron_class" placeholder="class" style="width: 200px;"></td>
            <td><input class="form-control" type="text" id="input_cron_min" placeholder="min" value="0" style="width: 40px;"></td>
            <td><input class="form-control" type="text" id="input_cron_hour" placeholder="hour" value="0" style="width: 40px;"></td>
            <td><input class="form-control" type="text" id="input_cron_day" placeholder="day" value="0" style="width: 40px;"></td>
            <td><input class="form-control" type="text" id="input_cron_day_week" placeholder="day_week" value="0" style="width: 40px;"></td>
            <td><input class="form-control" type="text" id="input_cron_month" placeholder="month" value="0" style="width: 40px;"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><button type="button" class="btn-sm btn btn-success" id="btn_cron_add"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span> ${basic_add}</button></td>
        </tr>    
    </table>
</div>
