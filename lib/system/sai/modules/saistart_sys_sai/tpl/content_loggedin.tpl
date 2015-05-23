<div class="container-fluid">
    <div class="row">
        <h3 class="muted">${sai_start_welcome}</h3>
        <h4 class="text-info">${sai_start_welcome_description}</h4>
    </div>
    <div class="row">
        <div class="col-md-6">
            <div id="project" class="panel panel-default sai_gridbox">
                <div class="panel-heading"><a href="#!config">${basic_project}</a></div>
                <div class="panel-body">
                  <b>${basic_name}:</b> ${project_name}<br/>
                <b>${basic_URL}:</b> <a href="${project_url}" target="_blank">${project_url}</a><br/>
                <b>${basic_progress}:</b> ${project}%
                </div>
            </div>   
        </div>
        <div class="col-md-6">
            <div id="project" class="panel panel-default sai_gridbox">
                <div class="panel-heading"><a href="#!config">${basic_logout}</a></div>
                <div class="panel-body">
                    <table class="table table-hover table-condensed">
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
                            <button class="btn-sm btn-primary" style="clear: left; height: 32px; font-size: 13px;" type="submit" id="logout_submit">${basic_logout}</button>
                        </div>
                    </form>
                </div>
                 
            </div> 
            <h2 class="muted"><a href="#!login"></a></h2>
            
           
        </div>
        <div class="row">
        <div id="analytics" class="col-md-6">
            <div class="panel panel-default sai_gridbox">
                <div class="panel-heading"><a href="#!log(stats)">${basic_analytics}</a></div>
                <div class="panel-body">
                  ${analytics}
                </div>
            </div> 
        </div>
        <div class="col-md-6">
            <div class="panel panel-default sai_gridbox">
                <div class="panel-heading">Git</div>
                <div class="panel-body">
                  <b>Current Project Version:</b> ${git_project}<br/>
                    <b>Current SYSTEM Version:</b> ${git_system}
                </div>
            </div>
        </div>
        </div>
        
    </div>
    <div class="row">
        <div class="well" id="todo">
            <h2 class="muted"><a href="#!todo">${basic_todo}</a></h2>
            <b>${basic_status}:</b> ${project_count}/${project_all}<br/>
            <b>${basic_progress}:</b> ${project}%
            <div id="todo_entries"></div>
        </div>
        <div class="well" id="log">
            <h2 class="muted"><a href="#!log">${basic_log}</a></h2>
            <h4 class="muted">100 ${sai_log_latest_entries}</h4>
            <div id="log_entries"></div>
        </div>
    </div>
</div>