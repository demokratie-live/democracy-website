<tr>
    <td>${name}</td>
    <td>${extension}</td>
    <td>
        <a href="${url}" target="_blank" id="tooltip_${cat}_${i}" onmouseover="saimod_sys_files_tooltip('tooltip_${cat}_${i}','${name}','${cat}')">${url}</a>
    </td>
    <td>
        <button type="submit" class="btn-warning btn btn-sm imgrnbtn" style="margin: 1px;;" cat="${cat}" id="${name}" textfield="#renametext_${cat}_${i}"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></button>
    </td>
    <td>
        <input type="text" id="renametext_${cat}_${i}" class="form-control" style="width: 100px; margin:0;" placeholder="new name...">
    </td>
    <td>
        <button class="btn-danger btn btn-sm imgdelbtn" style="margin: 1px; margin-right: 3px" cat="${cat}" id="${name}"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button>
    </td>
</tr>