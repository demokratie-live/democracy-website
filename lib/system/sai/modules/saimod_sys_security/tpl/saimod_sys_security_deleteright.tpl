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
<input id="deleteright_confirm" class="btn-danger btn" right_id="${ID}" type="submit" value="Delete"/>
<input id="deleteright_abort" onClick="system.load('security(rights)');" class="btn" type="submit" value="Abort"/>