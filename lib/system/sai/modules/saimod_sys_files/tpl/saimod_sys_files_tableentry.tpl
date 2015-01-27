<tr>
    <td>${name}</td>
    <td>${extension}</td>
    <td>
        <a href="${url}" target="_blank">${url}</a>
    </td>
    <td>
        <input type="button" class="btn-danger imgdelbtn" style="margin: 1px; margin-right: 3px" value="Delete" cat="${cat}" id="${name}">
        <input type="text" id="renametext_${cat}_${i}" class="form-control" style="width: 100px; margin:0;" placeholder="new name...">
        <input type="submit" class="btn-warning imgrnbtn" style="margin: 1px;;" value="Rename" cat="${cat}" id="${name}" textfield="#renametext_${cat}_${i}">
    </td>
</tr>