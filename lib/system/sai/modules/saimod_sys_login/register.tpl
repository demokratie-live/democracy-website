<h1>${register}</h1>
<br />
<br />
<form class="textbox" id="register_user_form">
    <div class="control-group" id="register_username_control_group">
        <table id="userRegisterTable" class="table table-striped">
           <tbody>
                <tr>
                   <th style="width: 200px;">${loginUsername}</th>
                   <td>
                       <div class="control-group controls">
                            <input  type="text"
                                    size="30"
                                    style="margin-bottom: 15px; float: left;"
                                    id="register_username"
                                    placeholder="${enter_username}"
                                    minlength="3" data-validation-minlength-message="${login_username_too_short}"
                                    required data-validation-required-message="${login_username_required}"/>
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
                                    placeholder="${enter_email}"
                                    data-validation-email-message="${check_mail_format}"
                                    required data-validation-required-message="${email_required}"/>
                            <br/>
                            <div id="register-help-block-email" class="help-block" style="float: left; margin-top: 3px;"></div>
                        </div>
                   </td>
                </tr>
                <tr>
                   <th>${loginPassword}</th>
                   <td>
                        <div class="control-group" id="change_user_password">
                              <div class="control-group controls" style="clear: both">
                                  <input  type="password"
                                          size="30"
                                          style="margin-bottom: 15px; float: left;"
                                          id="user_register_password1"
                                          name="user_register_password1"
                                          placeholder="${enter_password}"
                                          minlength="5" data-validation-minlength-message="${login_password_too_short}"
                                          required data-validation-required-message="${login_password_required}"/>
                                  <br/>
                                  <div class="help-block" style="float: left; margin-top: 3px;"></div>
                              </div>
                              <div class="control-group controls" style="clear: both">
                                  <input  type="password"
                                          size="30"
                                          style="margin-bottom: 15px; float: left;"
                                          id="user_register_password2"
                                          name="user_register_password2"
                                          placeholder="${retype_password}"
                                          data-validation-matches-match="user_register_password1"
                                          data-validation-matches-message="${register_password_dont_math}"/>
                                  <br/>
                                  <div class="help-block" style="float: left; margin-top: 3px;"></div>
                              </div>
                         </div>
                   </td>
                </tr>
                <tr>
                   <th>${locale}</th>
                   <td>
                       <div id="change_user_locale">
                           <select size="1" id="register_locale_select">
                                <option value="deDE">deDE</option>
                                <option value="enUS">enUS</option>
                            </select>
                       </div>
                   </td>
                </tr>
           </tbody>
        </table>
        <button class="btn btn-primary" type="submit"><i class="icon-ok icon-white"></i> ${register}</button>
        <button class="btn btn-primary" type="reset" id="btn_user_registration_cancel"><i class="icon-remove icon-white"></i> ${cancel}</button>
    </div>
</form>