<div class="masthead">
    <h3 class="muted">${basic_login} / ${basic_register}</h3>
    <h4 class="text-info">${sai_mod_login_text}</a></h4>
</div>
<form class="textbox" style="padding:10px" id="login_form">
    <div class="control-group">
        <div class="controls">
            <input  type="text"
                    size="30"
                    style="margin-bottom: 15px;"
                    id="bt_login_user"
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
                    placeholder="${basic_placeholder_password}"
                    minlength="5" data-validation-minlength-message="${sai_error_password_short}"
                    maxlength="16" data-validation-maxlength-message="${sai_error_password_long}"
                    required data-validation-required-message="${sai_error_password_miss}"/>
        </div>        
        <div class="help-block"></div>
        <input type="hidden" />
        <button class="btn-sm btn btn-primary" style="clear: left; height: 32px; font-size: 13px;" type="submit" id="login_submit"><span class="glyphicon glyphicon-log-in" aria-hidden="true"></span> ${basic_login}</button>
    </div>
</form>
<a href="#!login(register)" id="register_link">${basic_text_register}</a><br/>
<a href="#" id="password_link">${basic_text_password_miss}</a>