<tr class="email-placeholder-switch-value ${new_switch_value}">
    <td>
        <input class="email-placeholder-data-switch-value-key" placeholder="Equals" type="text" value="${k}"/>
    </td>
    <th>
        <input class="email-placeholder-data-switch-value-value" placeholder="Replace" type="text" value="${v}"/>
    </th>
    <td>
        <button class="btn btn-sm btn-danger btn-email-placeholder-switch-value-del" onclick="$(this).parent().parent().addClass('switch_value_deleted');"><i class="fa fa-trash"></i></button>
    </td>
</tr>