<div id="page_deletedialog" class="sai_margin_top_20">
    <h4>Page: ${id}</h4>
    <hr>
    <label>id:</label> ${id}<br>
    <label>name:</label> ${name}<br>
    <label>group:</label> ${group}<br>
    <label>state:</label> ${state}<br>
    <label>parent_id:</label> ${parent_id}<br>
    <label>login:</label> ${login}<br>
    <label>type:</label> ${type}<br>
    <label>div:</label> ${div}<br>
    <label>url:</label> ${url}<br>
    <label>func:</label> ${func}<br>
    <label>php_class:</label> ${php_class}<hr>
</div>
<button type="button" class="btn btn-small btn-danger" id="del_page_del" page_id="${ID}" page_group="${group}">Delete</button>
<button type="button" class="btn btn-small" onClick="system.load('page;group.${group}');">Close</button>
