<tr>
    <td>
        <a href="#!mail(list);id.${id}">${name}</a><br>
        ${count_sent}/${count_all} Sent
    </td>
    <td>
        <button class="btn btn-sm btn-${btn-color} btn-email-send" ${disabled} list="${id}" email="${email}"><i class="fa fa-send"></i>&nbsp;Send</button>
    </td>
</tr>