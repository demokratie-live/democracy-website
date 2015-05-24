<h4>Delete Right</h4>
<table class="table">
    <tr>
        <td>ID</td>
        <td>${ID}</td>
    </tr>
    <tr>
        <td>Name</td>
        <td>${name}</td>
    </tr>
    <tr>
        <td>Description</td>
        <td>${description}</td>
    </tr>
</table>
<button id="deleteright_confirm" class="btn-danger btn btn-sm" right_id="${ID}" type="submit"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span>  ${delete}</button>
<button id="deleteright_abort" onClick="system.load('security(rights)');" class="btn-default btn btn-sm" type="submit"><span class="glyphicon glyphicon-remove-sign" aria-hidden="true"></span> ${abort}</button>