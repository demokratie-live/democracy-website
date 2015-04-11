<table class="table table-hover table-condensed" style="overflow: auto;">
    <tr>
        <th>ID</th>
        <td><input type="text" id="new_call_id" placeholder="new id" style="width: 140px;"></td>
    </tr>
    <tr>
        <th>Group</th>
        <td><input type="text" id="new_call_group" placeholder="new group" style="width: 140px;"></td>
    </tr>
    <tr>
        <th>Type</th>
        <td><input type="text" id="new_call_type" placeholder="new type" style="width: 140px;"></td>
    </tr>
    <tr>
        <th>ParentID</th>
        <td><input type="text" id="new_call_parentid" placeholder="parent id" style="width: 140px;"></td>
    </tr>
    <tr>
        <th>ParentValue</th>
        <td><input type="text" id="new_call_parentvalue" placeholder="parent value" style="width: 140px;"></td>
    </tr>
    <tr>
        <th>Name</th>
        <td><input type="text" id="new_call_name" placeholder="name" style="width: 140px;"></td>
    </tr>
    <tr>
        <th>Verify</th>
        <td><input type="text" id="new_call_verify" placeholder="verify" style="width: 140px;"></td>
    </tr>
</table>
<button type="button" class="btn-small" onClick="system.load('api');">Back</button>
<button type="button" class="btn-small btn-success" id="addcall" style="float: right;">Add</button>