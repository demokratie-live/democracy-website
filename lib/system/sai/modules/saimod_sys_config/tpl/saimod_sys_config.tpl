<div class="row">
    <div class="col-12 sai_padding_10 bg-primary">
        <h4 class="sai_margin_off">&nbsp;<span class="fa fa-wrench" aria-hidden="true"></span>&nbsp;&nbsp;${sai_config_title}</h4>
    </div>
    <div class="col-md-2 sai_padding_off">
        <ul class="nav bg-light flex-column" id="tabs_config">
            <li class="nav-item"><a class="nav-link active" href="#!config" id="menu_tag_basics">Basics</a></li>
            <li class="nav-item"><a class="nav-link" href="#!config(database)" id="menu_tag_database">Database</a></li>
            <li class="nav-item"><a class="nav-link" href="#!config(sai)" id="menu_tag_sai">System Admin Interface</a></li>
        </ul>
    </div>
    <div class="col-md-10 sai_padding_off sai_border_left">
        <div class="table-responsive">
            <table class="table table-striped table-condensed tablesorter sai_margin_off" id="table_config">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody id="tab_config"></tbody>    
            </table>
        </div>
    </div>
</div>