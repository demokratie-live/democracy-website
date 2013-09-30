<div class="masthead">
    <h3 class="muted">Login / Register</h3>
    <h4 class="text-info">Please login for developer access (if you are a developer).</a></h4>
</div>
<form class="textbox" style="padding:10px" id="login_form">
    <div class="control-group">
        <div class="controls">
            <input  type="text"
                    size="30"
                    style="margin-bottom: 15px;"
                    id="bt_login_user"
                    placeholder="${sai_mod_login_username}"
                    minlength="3" data-validation-minlength-message="${sai_error_mod_login_username_too_short}"
                    maxlength="16" data-validation-maxlength-message="${sai_error_mod_login_username_too_long}"
                    required data-validation-required-message="${sai_error_mod_login_username_required}"/>
        </div>
        <div class="controls">
            <input  type="password"
                    size="30"
                    style="margin-bottom: 15px;"
                    id="bt_login_password"
                    placeholder="${sai_mod_login_password}"
                    minlength="5" data-validation-minlength-message="${sai_error_mod_login_password_too_short}"
                    maxlength="16" data-validation-maxlength-message="${sai_error_mod_login_password_too_long}"
                    required data-validation-required-message="${sai_error_mod_login_password_required}"/>
        </div>        
        <div class="help-block"></div>
        <input type="hidden" />
        <button class="btn btn-primary" style="clear: left; height: 32px; font-size: 13px;"
                type="submit"
                id="login_submit">${sai_mod_login_login}</button>
    </div>
</form>
<a href="#" id="register_link">Register an Account</a></br>
<a href="#" id="password_link">Can't really remember your Password?</a>