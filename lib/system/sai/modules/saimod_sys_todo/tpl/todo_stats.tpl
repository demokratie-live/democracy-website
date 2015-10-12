<table class="table table-hover table-condensed sai_table sai_margin_top_10" style="width: 100%">
    <tr>
        <th>${table_name}</th>
        <th>${table_open}</th>
        <th>${table_closed}</th>
        <th>${table_all}</th>
        <th>${table_done}</th>
    </tr>
    ${entries}
    <tr>
        <td>${table_project}</td>
        <td>${project_open}</td>
        <td>${project_closed}</td>
        <td>${project_all}</td>
        <td>${project}%</td>
    </tr>
    <tr>
        <th>${table_username}</th>
        <th>${table_open}</th>
        <th>${table_closed}</th>
        <th>${table_all}</th>
        <th>${table_done}</th>
    </tr>
    ${userstats}
</table>
<div>
    <select id="vis_filter_time">
        <option value="2692000">30d</option>
        <option value="1209600">14d</option>
        <option value="604800">7d</option>
        <option value="172800">2d</option>
        <option value="86400" selected>1d</option>
        <option value="43200">12h</option>
        <option value="21600">6h</option>
        <option value="14400">4h</option>
        <option value="7200">2h</option>
        <option value="3600">1h</option>
        <option value="1800">30m</option>
        <option value="600">10m</option>
        <option value="300">5m</option>
        <option value="60">1m</option>
        <option value="30">30s</option>
        <option value="10">10s</option>
        <option value="5">5s</option>
        <option value="1">1s</option>
    </select>
    <select id="vis_filter_type">
        <option value="closed">closed</option>
        <option value="assigned">assigned</option>
    </select>
    <div id="vis"></div>
</div>