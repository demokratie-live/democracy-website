<div class="masthead">
    <h3 class="muted">Logout</h3>
    <h4 class="text-info">You are logged in.</h4>
</div>
<div>    
    <table id="userDetailsTable" class="table table-striped">
       <tbody>
            <tr>
               <th style="width: 200px;">${sai_mod_login_username}</th>
               <td><span id="user_username" /></td>
            </tr>
            <tr>
               <th>${sai_mod_login_email}</th>
               <td>
                   <span id="user_email" />
                    <div class="control-group" id="change_user_email" style="display: none;">
                         <div class="controls">
                             <input  type="email"
                                     size="30"
                                     style="margin-bottom: 15px; float: left;"
                                     id="user_email_input"
                                     data-validation-email-message="${ua_email_format_wrong}"
                                     required data-validation-required-message="${login_password_required}"/>
                         </div>
                         <div class="help-block" style="float: left; margin-top: 3px;"></div>
                     </div>
               </td>
            </tr>
            <tr>
               <th>${sai_mod_login_password}</th>
               <td>
                   <span id="user_password">****</span>
                    <div class="control-group" id="change_user_password" style="display: none;">
                         <div class="control-group controls" id="control-group-password-old">
                              <input  type="password"
                                      size="30"
                                      style="margin-bottom: 15px; float: left;"
                                      id="user_old_password"
                                      placeholder="${ua_insert_password}"
                                      minlength="5" data-validation-minlength-message="${login_password_too_short}"
                                      required data-validation-required-message="${login_password_required}"/>
                              <div id="help-block-old-password" class="help-block" style="float: left; margin-top: 3px;"></div>
                          </div>
                          <div class="control-group controls" style="clear: both">
                              <input  type="password"
                                      size="30"
                                      style="margin-bottom: 15px; float: left;"
                                      id="user_new_password1"
                                      name="user_new_password1"
                                      placeholder="${ua_new_password_first}"
                                      minlength="5" data-validation-minlength-message="${login_password_too_short}"/>
                              <div class="help-block" style="float: left; margin-top: 3px;"></div>
                          </div>
                          <div class="control-group controls" style="clear: both">
                              <input  type="password"
                                      size="30"
                                      style="margin-bottom: 15px; float: left;"
                                      id="user_new_password2"
                                      name="user_new_password2"
                                      placeholder="${ua_new_password_second}"
                                      data-validation-matches-match="user_new_password1"
                                      data-validation-matches-message="${register_password_dont_math}"/>
                              <div class="help-block" style="float: left; margin-top: 3px;"></div>
                          </div>
                     </div>
               </td>
            </tr>
            <tr>
               <th>${sai_mod_login_last_active}</th>
               <td><span id="user_last_active"></span></td>
            </tr>
            <tr>
               <th>${sai_mod_login_join_date}</th>
               <td><span id="user_joindate"></span></td>
            </tr>
            <tr>
               <th>${sai_mod_login_locale}</th>
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
               <th style="width: 200px;">${sai_mod_login_admin_rights}</th>
               <td><span id="user_adminrights" />${isadmin}</td>
            </tr>
       </tbody>
    </table>
</div>
<form class="textbox" style="padding:10px" id="logout_form">
    <div class="control-group">
        <div class="help-block"></div>
        <input type="hidden" />
        <button class="btn btn-primary" style="clear: left; height: 32px; font-size: 13px;" type="submit" id="logout_submit">${logout}</button>
    </div>
</form>

