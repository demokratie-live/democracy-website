<tr class="user_entry ${class} sai_table" onClick="system.load('security(user);username.${username}');">
    <td>${id}</td>
    <td>${username}</td>
    <td>${email}</td>
    <td>${joindate}</td>
    <td>${locale}</td>
    <td>${time_elapsed}</td>
    <td>${account_flag}</td>
    <!--<td>
        <input type="submit" class="btn" value="edit" user="${id}" action="edit">
        <input type="submit" class="btn-danger" value="delete" user="${id}" action="delete">
    </td>-->
    <td>
        <button type="submit" class="btn-sm btn-success" value="reset_password" user="${id}" email="${email}">send EMail</button>
    </td>
</tr>