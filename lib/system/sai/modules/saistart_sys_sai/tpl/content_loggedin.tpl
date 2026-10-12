<div class="row">
    <div class="col-12 sai_padding_off bg-primary sai_padding_10">
        <h4 class="sai_margin_off" style="float:left;">&nbsp;<span class="fa fa-home" aria-hidden="true"></span>&nbsp;&nbsp;${sai_start_welcome}</h4>
        <div id="sai_datetime" class="" style="float:right;">Week of the year: <font style="color: orange;">${week_number}</font>, ${date}</div>
    </div>
    <div class="col-md-12">
        <div class="row sai_padding_top_20">
            <div class="col-md-6">
                <div class="card h-100">
                    <div class="card-header"><a href="#!config">${basic_project}</a></div>
                    <div class="card-body">
                        <table class="table table-striped table-condensed sai_margin_off">
                            <tr>
                                <th>${basic_name}</th>
                                <td>${project_name}</td>
                            </tr>
                            <tr>
                                <th>${basic_url}</th>
                                <td><a href="${project_url}" target="_blank">${project_url}</a></td>
                            </tr>
                            <tr style="border-bottom: 1px solid #dee2e6;">
                                <th>${basic_progress}</th>
                                <td><a href="#!todo">${project}% | ${project_closed}/${project_all}</a></td>
                            </tr>
                        </table>
                        <!--<br/>
                        <table class="table table-hover table-condensed sai_table" style="width: 100%">
                            <tr>
                                <th>${table_username}</th>
                                <th>${table_open}</th>
                                <th>${table_closed}</th>
                                <th>${table_all}</th>
                                <th>${table_percentage}</th>
                            </tr>
                            ${userstats}
                        </table>-->
                    </div>
                </div>   
            </div>
            <div class="col-md-6">
                <div class="card h-100">
                    <div class="card-header"><a href="#!login">${basic_logout}</a></div>
                    <div class="card-body">
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
                            <tr>
                                <th>${basic_text_logout}</th>
                                <td>
                                    <form class="textbox" id="logout_form">
                                        <div class="control-group">
                                            <input type="hidden" />
                                            <button class="btn btn-sm btn-primary" style="clear: left; height: 32px; font-size: 13px;" type="submit" id="logout_submit"><span class="glyphicon glyphicon-log-out" aria-hidden="true"></span> ${basic_logout}</button>
                                        </div>
                                    </form>
                                </td>
                            </tr>
                        </table>
                        <div class="help-block"></div>
                    </div>
                </div> 
            </div>
        </div>
        <div class="row sai_padding_top_20 sai_padding_bottom_20">
            <div class="col-md-6">
                <div class="card h-100">
                    <div class="card-header"><a href="#!log(stats)">${basic_analytics}</a></div>
                    <div class="card-body">${analytics}</div>
                </div> 
            </div>
            <div class="col-md-6">
                <div class="card h-100">
                    <div class="card-header"><a href="#!git">${basic_git}</a></div>
                    <div class="card-body">${git}</div>
                </div>
            </div>
        </div>
    </div>
</div>