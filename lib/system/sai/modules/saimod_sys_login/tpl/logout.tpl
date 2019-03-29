<div class="row">
    <div class="col-12 sai_padding_10 bg-primary">
        <h4 class="sai_margin_off">&nbsp;<span class="fa fa-user" aria-hidden="true"></span>&nbsp;&nbsp;${basic_state_login}</h4>
    </div>
    <div class="col-md-12 sai_padding_off sai_border_left" id="tab_content">
        <table id="userDetailsTable" class="table table-striped">
            <tbody>
                <tr>
                    <th style="width: 200px;">${basic_username}</th>
                    <td><span id="user_username" /></td>
                </tr>
                <tr>
                    <th>${basic_email}</th>
                    <td>
                        <span id="user_email" />
                        <div class="control-group" id="change_user_email" style="display: none;">
                            <div class="controls">
                                <input  type="email"
                                        size="30"
                                        style="margin-bottom: 15px; float: left;"
                                        id="user_email_input"
                                        data-validation-email-message="${basic_email_wrong}"
                                        required data-validation-required-message="${basic_email_miss}"/>
                            </div>
                            <div class="help-block" style="float: left; margin-top: 3px;"></div>
                        </div>
                    </td>
                 </tr>
                 <tr>
                    <th>${basic_password}</th>
                    <td>
                        <span id="user_password">****</span>
                        <div class="control-group" id="change_user_password" style="display: none;">
                            <div class="control-group controls" id="control-group-password-old">
                                <input  type="password"
                                        size="30"
                                        style="margin-bottom: 15px; float: left;"
                                        id="user_old_password"
                                        placeholder="${basic_placeholder_user}"
                                        minlength="5" data-validation-minlength-message="${basic_password_short}"
                                        required data-validation-required-message="${basic_password_miss}"/>
                                <div id="help-block-old-password" class="help-block" style="float: left; margin-top: 3px;"></div>
                            </div>
                            <div class="control-group controls" style="clear: both">
                                <input  type="password"
                                        size="30"
                                        style="margin-bottom: 15px; float: left;"
                                        id="user_new_password1"
                                        name="user_new_password1"
                                        placeholder="${basic_placeholder_password}"
                                        minlength="5" data-validation-minlength-message="${basic_password_short}"/>
                                <div class="help-block" style="float: left; margin-top: 3px;"></div>
                            </div>
                            <div class="control-group controls" style="clear: both">
                                <input  type="password"
                                        size="30"
                                        style="margin-bottom: 15px; float: left;"
                                        id="user_new_password2"
                                        name="user_new_password2"
                                        placeholder="${basic_placeholder_password}"
                                        data-validation-matches-match="user_new_password1"
                                        data-validation-matches-message="${basic_password_match}"/>
                                <div class="help-block" style="float: left; margin-top: 3px;"></div>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th>${basic_last_active}</th>
                    <td><span id="user_last_active"></span></td>
                </tr>
                <tr>
                    <th>${basic_join_date}</th>
                    <td><span id="user_joindate"></span></td>
                </tr>
                <tr>
                    <th>${basic_locale}</th>
                    <td>
                        <span id="user_locale"></span>
                        <div id="change_user_locale" style="display: none;">
                            <select size="1" id="change_user_locale_select">
                                <option value="deDE">deDE</option>
                                <option value="enUS">enUS</option>
                            </select>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th style="width: 200px;">${basic_admin_rights}</th>
                    <td><span id="user_adminrights" />${isadmin}</td>
                </tr>
            </tbody>
        </table>
        <form class="textbox" style="padding:10px" id="logout_form">
            <div class="control-group">
                <div class="help-block"></div>
                <input type="hidden" />
                <button class="btn-sm btn btn-primary" style="clear: left; height: 32px; font-size: 13px;" type="submit" id="logout_submit"><span class="fa fa-sign-out" aria-hidden="true"></span> ${basic_logout}</button>
            </div>
        </form>
    </div>
</div>