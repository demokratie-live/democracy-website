<div class="row-fluid">
    <div class="col-md-12">
        <h4 class="muted"><b>${sai_start_welcome}</b></h4>
    </div>
    <div class="col-md-12">
        <h4 class="text-info">${sai_start_welcome_description}</h4>
    </div>
</div>
<hr>
<div class="row-fluid">
    <div class="col-md-12 sai_margin_bottom_20" id="sai_datetime">
        Week of the year: <font style="color: orange;">${week_number}</font>, ${date}
    </div>
</div>
<div class="row-fluid">
    <div class="col-md-6">
        <div id="project" class="panel panel-default sai_gridbox">
                <div class="panel-heading"><a href="#!config">${basic_project}</a></div>
                    <div class="panel-body">
                    <div class="inner-page">
                        <b>${basic_name}:</b> ${project_name}<br/>
                        <b>${basic_url}:</b> <a href="${project_url}" target="_blank">${project_url}</a><br/>
                        <b>${basic_progress}:</b> ${project}%<br/>
                        <br/>
                        <table class="table table-hover table-condensed sai_table" style="width: 100%">
                            <tr>
                                <th>${table_username}</th>
                                <th>${table_open}</th>
                                <th>${table_closed}</th>
                                <th>${table_all}</th>
                                <th>${table_percentage}</th>
                            </tr>
                            ${userstats}
                        </table>
                    </div>
            </div>
        </div>   
    </div>
    <div class="col-md-6">
        <div id="project" class="panel panel-default sai_gridbox">
            <div class="panel-heading"><a href="#!login">${basic_logout}</a></div>
                <div class="panel-body">
                    <div class="inner-page"> 
                    <table class="table sai_table table-hover table-condensed">
                        <tr>
                            <th>${basic_username}</th>
                            <td>${username}</td>
                        </tr>
                        <tr>
                        <th>${basic_locale}</th>
                            <td>${locale}</td>
                        </tr>
                        <tr>
                            <th>${basic_admin_rights}</th>
                            <td>${isadmin}</td>
                        </tr>
                    </table>
                    ${basic_text_logout}
                    <form class="textbox" id="logout_form">

                        <div class="control-group">
                            <div class="help-block"></div>
                            <input type="hidden" />
                            <button class="btn btn-sm btn-primary" style="clear: left; height: 32px; font-size: 13px;" type="submit" id="logout_submit"><span class="glyphicon glyphicon-log-out" aria-hidden="true"></span> ${basic_logout}</button>
                        </div>
                    </form>
                </div>
           </div>
        </div> 
    </div>
</div>
<div class="row-fluid">
    <div id="analytics" class="col-md-6">
        <div class="panel panel-default sai_gridbox">
            <div class="panel-heading"><a href="#!log(stats)">${basic_analytics}</a></div>
            <div class="panel-body">
                <div class="inner-page">
                    ${analytics}
                </div>
            </div>
        </div> 
    </div>
    <div class="col-md-6">
        <div class="panel panel-default sai_gridbox">
            <div class="panel-heading"><a href="#!git">${basic_git}</a></div>
            <div class="panel-body">
                <div class="inner-page">
                    <b>Current Project Version:</b> ${git_project}<br/>
                    <b>Current SYSTEM Version:</b> ${git_system}
                </div>
            </div>
        </div>
    </div>
</div>
<div class="row-fluid">
    <div class="col-md-12">
        <div class="well" id="todo">
            <h2 class="muted"><a href="#!todo">${basic_todo}</a></h2>
            <b>${basic_status}:</b> ${project_closed}/${project_all}<br/>
            <b>${basic_progress}:</b> ${project}%
            <div id="todo_entries"></div>
        </div>
    </div>
</div>
<div class="row-fluid">
    <div class="col-md-12">
        <div class="well" id="log">
            <h2 class="muted"><a href="#!log">${basic_log}</a></h2>
            <h4 class="muted">100 ${sai_log_latest_entries}</h4>
            <div id="log_entries"></div>
        </div>
    </div>
</div>