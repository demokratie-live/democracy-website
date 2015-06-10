<tr class="sai_todo_element ${class_row}" onClick="system.load('todo(todo${openclose});todo.${todo_id}');">
    <td>${time_elapsed}</td>                            
    <td style="word-break: break-all;">${message}</td>
    <td><a href="#!security(user);username.${username}">${username}</a></td>
    <td><a href="#!security(user);username.${assignee}">${assignee}</a><br/>${basic_priority}: ${priority}</td>
</tr>