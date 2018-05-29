<div class="row">
    <div class="col-12 sai_padding_10 bg-primary">
        <h4 class="sai_margin_off">&nbsp;<span class="fa fa-bar-chart" aria-hidden="true"></span>&nbsp;&nbsp;System Analytics</h4>
    </div>
    <div class="col-md-2 sai_padding_off">
        <ul class="nav bg-light flex-column" id="tabs_analytics">
            <li class="nav-item" db=""><a class="nav-link active" href="#!analytics" id="menu_tag_basics">Current Month</a></li>
            ${dbfile_entries}
        </ul>
    </div>
    <div class="col-md-10 sai_border_left sai_padding_top_10" id="tab_analytics">
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
            <option value="basic_visitor">basic_visitor</option>
            <option value="basic_sucess">basic_sucess</option>
            <option value="basic_querytime">basic_querytime</option>
            <option value="unique_basic">unique_basic</option>
            <option value="unique_request">unique_request</option>
            <option value="unique_exception">unique_exception</option>
            <option value="unique_referer">unique_referer</option>
            <option value="class_system">class_system</option>
            <option value="class_other">class_other</option>
            <option value="class_basic">class_basic</option>
        </select>
        <div id="vis"></div>
    </div>
</div>