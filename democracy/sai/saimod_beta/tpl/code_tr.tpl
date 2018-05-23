 <tr>
    <td>
        <a href="./invite/${code}" target="blank"><i class="fa fa-link"></i>&nbsp;${code}</a>&nbsp;&nbsp;&nbsp;
        <a href="https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=https%3A%2F%2Fwww.democracy-deutschland.de%2Finvite%2F${code}&choe=UTF-8" target="blank"><i class="fa fa-qrcode"></i>&nbsp;QR-Code</a>
    </td>
    <td>${generated}</td>
    <td>${count}</td>
    <td><input id="comment_${i}" type="text" class="form-control" value="${comment}"></td>
    <td>
        <button type="button" class="btn btn-sm btn-warning code_setcomment" code="${code}" i="${i}"><i class="fa fa-pencil"></i></button>
        <button type="button" class="btn btn-sm btn-danger code_delete" ${code_delete_disabled} code="${code}"><i class="fa fa-trash"></i></button>
    </td>
</tr>