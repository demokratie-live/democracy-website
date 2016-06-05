<h1>${basic_register}</h1>
<br />
<br />
<form class="textbox" id="register_user_form">
    <div class="control-group" id="register_username_control_group">
        <table id="userRegisterTable" class="table table-striped">
           <tbody>
                <tr>
                   <th style="width: 200px;">${basic_username}</th>
                   <td>
                       <div class="control-group controls">
                            <input  type="text"
                                    size="30"
                                    style="margin-bottom: 15px; float: left;"
                                    id="register_username"
                                    placeholder="${basic_placeholder_username}"
                                    minlength="3" data-validation-minlength-message="${basic_username_short}"
                                    required data-validation-required-message="${basic_username_miss}"/>
                            <br/>
                            <div id="register-help-block-username" class="help-block" style="float: left; margin-top: 3px;"></div>
                        </div>
                   </td>
                </tr>
                <tr>
                   <th>E-Mail</th>
                   <td>
                        <div class="control-group controls">
                            <input  type="email"
                                    size="30"
                                    style="margin-bottom: 15px; float: left;"
                                    id="register_email"
                                    placeholder="${basic_placeholder_email}"
                                    data-validation-email-message="${basic_email_wrong}"
                                    required data-validation-required-message="${basic_email_miss}"/>
                            <br/>
                            <div id="register-help-block-email" class="help-block" style="float: left; margin-top: 3px;"></div>
                        </div>
                   </td>
                </tr>
                <tr>
                   <th>${basic_password}</th>
                   <td>
                        <div class="control-group" id="change_user_password">
                              <div class="control-group controls" style="clear: both">
                                  <input  type="password"
                                          size="30"
                                          style="margin-bottom: 15px; float: left;"
                                          id="user_register_password1"
                                          name="user_register_password1"
                                          placeholder="${basic_placeholder_password}"
                                          minlength="5" data-validation-minlength-message="${basic_password_short}"
                                          required data-validation-required-message="${basic_password_miss}"/>
                                  <br/>
                                  <div class="help-block" style="float: left; margin-top: 3px;"></div>
                              </div>
                              <div class="control-group controls" style="clear: both">
                                  <input  type="password"
                                          size="30"
                                          style="margin-bottom: 15px; float: left;"
                                          id="user_register_password2"
                                          name="user_register_password2"
                                          placeholder="${basic_placeholder_password}"
                                          data-validation-matches-match="user_register_password1"
                                          data-validation-matches-message="${basic_password_match}"/>
                                  <br/>
                                  <div class="help-block" style="float: left; margin-top: 3px;"></div>
                              </div>
                         </div>
                   </td>
                </tr>
           </tbody>
        </table>
        <button class="btn-sm btn-primary" type="submit"><i class="icon-ok icon-white"></i> ${basic_register}</button>
        <button class="btn-sm btn-primary" type="reset" id="btn_user_registration_cancel"><i class="icon-remove icon-white"></i> ${basic_cancel}</button>
    </div>
</form>