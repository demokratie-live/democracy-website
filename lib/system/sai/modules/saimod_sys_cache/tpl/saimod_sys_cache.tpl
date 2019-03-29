<div class="row">
    <div class="col-12 sai_padding_10 bg-primary">
        <h4 class="sai_margin_off">&nbsp;<span class="fa fa-database" aria-hidden="true"></span>&nbsp;&nbsp;${sai_cache_title}</h4>
    </div>
    <div class="col-md-12 sai_padding_off sai_border_left" id="tab_content">
        <table class="sai_table table table-hover table-condensed" style="overflow: auto;">
            <tr>
                <th colspan="4">
                    &nbsp;Entries: ${count} showing max 100
                    <button type="button" class="btn-sm btn btn-warning pull-right" id="btn_cache_clear"><span class="fa fa-plus" aria-hidden="true"></span> ${basic_clear}</button>
                </th>
            </tr>
            <tr>
                <th>Cache</th>
                <th>Ident</th>
                <th>Type</th>
                <th>Data</th>
            </tr>
            ${entries}
        </table>
    </div>
</div>