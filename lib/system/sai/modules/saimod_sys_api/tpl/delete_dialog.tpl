<div id="api_deletedialog">
<h5>Api Call: ${ID}</h5>
<hr>
    <table class="table sai_table tablesorter">
        <thead>
            <tr>
                <th>ID</th>
                <th>Group</th>
                <th>Type</th>
                <th>ParentID</th>
                <th>ParentValue</th>
                <th>Name</th>
                <th>Verify</th>
            </tr>
        </thead>    
        <tbody>
            <tr>
                <td>${ID}</td>
                <td>${group}</td>
                <td>${type}</td>
                <td>${parentID}</td>
                <td>${parentValue}</td>
                <td>${name}</td>
                <td>${verify}</td>
            </tr>
        </tbody>    
    </table>
</div>
<button type="button" class="btn btn-small btn-danger" id="del_api_del" api_id="${ID}" api_group="${group}">Delete</button>
<button type="button" class="btn btn-small" onClick="system.load('api;group.${group}');">Close</button>
