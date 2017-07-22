<div clas="row-fluid">
    <div class="col-md-12">
        <h3 class="muted">Design. Simple. Fast. Reliable. Innovative.</h3>
    </div>
</div>
<div clas="row-fluid">
    <div class="col-md-12">
        <h4 class="text-info">We write awesome Software using <a href="https://github.com/ulfgebhardt/system">SYSTEM</a> and <a href="http://getbootstrap.com/">Twitter Bootstrap.</a></h4><hr>
    </div>
</div>
    <div clas="row-fluid">
        <div class="col-md-4">
            <div id="project" class="panel panel-default sai_gridbox">
                    <div class="panel-heading"><a href="#!login">${basic_login}</a></div>
                        <div class="panel-body">
                        ${basic_text_login}
                        <br/>
                        <br/>
                        <form class="textbox" style="" id="login_form">
                            <div class="input-group">
                                <div class="controls">
                                    <input  type="text"
                                            size="30"
                                            style="margin-bottom: 15px;"
                                            id="bt_login_user"
                                            class="form-control"
                                            placeholder="${basic_placeholder_username}"
                                            minlength="3" data-validation-minlength-message="${sai_error_username_short}"
                                            maxlength="16" data-validation-maxlength-message="${sai_error_username_long}"
                                            required data-validation-required-message="${sai_error_username_miss}"/>
                                </div>
                                <div class="controls">
                                    <input  type="password"
                                            size="30"
                                            style="margin-bottom: 15px;"
                                            id="bt_login_password"
                                            class="form-control"
                                            placeholder="${basic_placeholder_password}"
                                            minlength="5" data-validation-minlength-message="${sai_error_password_short}"
                                            maxlength="16" data-validation-maxlength-message="${sai_error_password_long}"
                                            required data-validation-required-message="${sai_error_password_miss}"/>
                                </div>        
                                <div class="help-block"></div>
                                <input type="hidden" />
                                <button class="btn-sm btn btn-primary" style="clear: left; height: 32px; font-size: 13px;"
                                        type="submit"
                                        id="login_submit"><span class="glyphicon glyphicon-log-in" aria-hidden="true"></span> ${basic_login}</button>
                            </div>
                        </form>
                    </div>
        </div>
    </div>