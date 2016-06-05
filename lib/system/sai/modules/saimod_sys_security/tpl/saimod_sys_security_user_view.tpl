<div class="masthead">
    <h2 class="muted">Userinfo for User: ${username}</h2>
    <h4 class="text-info">Basics</h4>
</div>
<table class="table sai_table">
    <tr>
        <th>ID</th>
        <td>${id}</td>
    </tr>
    <tr>
        <th>Username</th>
        <td>${username}</td>
    </tr>
    <tr>
        <th>EMail</th>
        <td>${email}</td>
    </tr>
    <tr>
        <th>Joindate</th>
        <td>${joindate}</td>
    </tr>
    <tr>
        <th>Locale</th>
        <td>${locale}</td>
    </tr>
    <tr>
        <th>Last active</th>
        <td>${time_elapsed}</td>
    </tr>
    <tr>
        <th>Email Confirmed</th>
        <td>${email_confirmed}</td>
    </tr>
    <tr>
        <th>${table_action}</th>
        <td>
            <table style="width: 100%;">
                <tr>
                    <td></td>
                    <td>
                        <button style="width: 100%;" type="submit" id="btn_confirm_email" class="btn-sm btn btn-success" user="${username}" email="${email}"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>&nbsp;&nbsp;${basic_confirm_email}</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input class="input-medium" id="input_pw_old" type="password" placeholder="${basic_password_old}" size="20"/>
                        <input class="input-medium" id="input_pw_new1" type="password" placeholder="${basic_password_new}" size="20"/>
                        <input class="input-medium" id="input_pw_new2" type="password" placeholder="${basic_password_new}" size="20"/>
                    </td>
                    <td>
                        <button style="width: 100%;" type="submit" id="btn_change_password" class="btn-sm btn btn-success" user="${username}" email="${email}"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>&nbsp;&nbsp;${basic_change_password}</button>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <button style="width: 100%;" type="submit" id="btn_reset_password" class="btn-sm btn btn-warning" user="${username}" email="${email}"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>&nbsp;&nbsp;${basic_reset_password}</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input class="input-medium" id="input_new_email" type="text" placeholder="${basic_email_new}" size="20"/>
                    </td>
                    <td>
                        <button style="width: 100%;" type="submit" id="btn_change_email" class="btn-sm btn btn-warning" user="${username}" email="${email}"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>&nbsp;&nbsp;${basic_change_email}</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input class="input-medium" id="input_new_user" type="text" placeholder="${basic_username_new}" size="20"/>
                    </td>
                    <td>
                        <button style="width: 100%;" type="submit" id="btn_rename_account" class="btn-sm btn btn-danger" user="${username}" email="${email}"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>&nbsp;&nbsp;${basic_rename}</button>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <button style="width: 100%;" type="submit" id="btn_delete_account" class="btn-sm btn btn-danger" user="${id}" email="${email}"><span class="glyphicon glyphicon-erase" aria-hidden="true"></span>&nbsp;&nbsp;${basic_delete}</button>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
</br>
<h4 class="text-info">Users Rights</h4>
${user_rights}
</br>
<h4 class="text-info">Users Last Actions</h4>
${user_actions}
