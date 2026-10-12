<tr>
    <td>${name}</td>
    <td>${extension}</td>
    <td>
        <a data-toggle="tooltip" title="<img src='${url}'/>" href="${url}" target="_blank" id="tooltip_${cat}_${i}">${url}</a>
    </td>
    <td>
        <button type="submit" class="btn-warning btn btn-sm imgrnbtn" style="margin: 1px;;" cat="${cat}" id="${name}" textfield="#renametext_${cat}_${i}"><span class="fa fa-pencil" aria-hidden="true"></span></button>
    </td>
    <td>
        <input type="text" id="renametext_${cat}_${i}" class="form-control" style="width: 100px; margin:0;" placeholder="new name...">
    </td>
    <td>
        <button class="btn-danger btn btn-sm imgdelbtn" style="margin: 1px; margin-right: 3px" cat="${cat}" id="${name}"><span class="fa fa-trash" aria-hidden="true"></span></button>
    </td>
</tr>