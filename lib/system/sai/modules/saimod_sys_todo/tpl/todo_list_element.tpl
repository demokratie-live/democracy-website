<tr class="sai_todo_element ${class_row}" onClick="system.load('todo(todo${openclose});todo.${todo_id}');">
    <td>${time_elapsed}</td>                            
    <td>${class}</td>
    <td style="word-break: break-all;">${message}</td>
    <td style="word-break: break-all;">${file}</td>
    <td>${line}</td>
    <td>${ip}</td>
    <td style="word-break: break-all;">${server_name}:${server_port}${request_uri}</td>
    <td><a href="#!security(user);username.${username}">${username}</a></td>
    <td>${querytime}</td>
    <td>${count}</td>
</tr>