 <tr>
    <td style="color: ${valid}">${used_code}</td>
    <td>${email}</td>
    <td><i class="fa fa-${device}"></i></td>
    <td><i class="fa fa-${redeemed}"></i>&nbsp;${redeemed_time}</td>
    <td><i class="fa fa-${stored}"></i>&nbsp;${stored_time}</td>
    <td><i class="fa fa-${mailed}"></i>&nbsp;${mailed_time}</td>
    <td>${comment}</td>
    <td><button type="button" class="btn btn-danger beta_mail" ${disabled} email="${email}" ios="${ios}" android="${android}"><i class="fa fa-check"></i>&nbsp;Send Mail</button></td>
</tr>