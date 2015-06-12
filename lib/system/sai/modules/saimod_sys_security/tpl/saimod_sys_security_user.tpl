<tr class="user_entry ${class} sai_table" onClick="system.load('security(user);username.${username}');">
    <td>${id}</td>
    <td>${username}</td>
    <td>${email}</td>
    <td>${joindate}</td>
    <td>${locale}</td>
    <td>${time_elapsed}</td>
    <td>
        <button type="submit" class="btn-sm btn btn-success" value="reset_password" user="${id}" email="${email}"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>  ${basic_send_email}</button>
    </td>
</tr>