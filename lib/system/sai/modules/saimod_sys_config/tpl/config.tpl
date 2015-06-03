<h4>${sai_config_title}</h4>
<hr>
<table class="table table-hover table-condensed sai_table" style="overflow: auto;">
    <tr class="sai_not_sortable">
        <th onclick="sai_sort_tables(0)">Config ID</th>
        <th onclick="sai_sort_tables(1)">Config Name</th>
        <th onclick="sai_sort_tables(2)">Value</th>
    </tr>
    <tr class="sai_not_sortable">
        <th>Basics</th>
        <th></th>
        <th></th>
    </tr>
    ${basics}    
    <tr class="sai_not_sortable">
        <th>Database</th>
        <th></th>
        <th></th>
    </tr>
    ${database}
    <tr class="sai_not_sortable">
        <th>System Admin Interface</th>
        <th></th>
        <th></th>
    </tr>
    ${sai}
</table>