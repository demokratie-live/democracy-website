<div id="page_deletedialog">
<h5>Page: ${id}</h5>
<hr>
    <table class="table table-hover table-condensed" style="overflow: auto;">
        <tr>
            <th>id</th>
            <th>name</th>
            <th>group</th>
            <th>state</th>
            <th>parent_id</th>
            <th>type</th>
            <th>div</th>
            <th>url</th>
            <th>func</th>
            <th>php_class</th>
        </tr>
        <tr>
            <td>${id}</td>
            <td>${name}</td>
            <td>${group}</td>
            <td>${state}</td>
            <td>${parent_id}</td>
            <td>${type}</td>
            <td>${div}</td>
            <td>${url}</td>
            <td>${func}</td>
            <td>${php_class}</td>
        </tr>
    </table>
</div>
<button type="button" class="btn btn-small btn-danger" id="del_page_del" page_id="${ID}" page_group="${group}">Delete</button>
<button type="button" class="btn btn-small" onClick="system.load('page;group.${group}');">Close</button>
