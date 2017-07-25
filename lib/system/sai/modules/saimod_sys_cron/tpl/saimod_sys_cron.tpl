<div class="row-fluid">
    <div class="col-md-12 sai_padding_off">
        <h4>&nbsp;<span class="glyphicon glyphicon-time" aria-hidden="true"></span>&nbsp;&nbsp;${sai_cron_title}</h4>
    </div>
</div>
<div class="row-fluid">
    <div class="col-md-12 sai_padding_off">
        <hr>
    </div>
</div>
<div class="row-fluid">
    <div class="col-md-12 sai_padding_off">
        &nbsp;Last Visit: ${last_visit}<br/>
        &nbsp;<a href="./sai.php?call=cron" target="_blank">Start Cron</a>
        <div id="cron_content">
            <table class="table table-hover table-condensed sai_table tablesorter" id="sai_mod_cron_table">
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
                        <th>action</th>
                    </tr>
                </thead>   
                <tbody>
                    ${content}
                </tbody>    
                <tr>
                    <td><input class="form-control" type="text" id="input_cron_class" placeholder="class" style="width: 100%;"></td>
                    <td><input class="form-control" type="text" id="input_cron_min" placeholder="min" value="0" style="width: 100%;"></td>
                    <td><input class="form-control" type="text" id="input_cron_hour" placeholder="hour" value="0" style="width: 100%;"></td>
                    <td><input class="form-control" type="text" id="input_cron_day" placeholder="day" value="0" style="width: 100%;"></td>
                    <td><input class="form-control" type="text" id="input_cron_day_week" placeholder="day_week" value="0" style="width: 100%;"></td>
                    <td><input class="form-control" type="text" id="input_cron_month" placeholder="month" value="0" style="width: 100%;"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><button type="button" class="btn-sm btn btn-success" id="btn_cron_add"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span> ${basic_add}</button></td>
                </tr>    
            </table>
        </div>
    </div>
</div>
