<div class="row-fluid">
    <div class="col-md-12">
        <h4><span class="glyphicon glyphicon-level-up" aria-hidden="true"></span>&nbsp;&nbsp;${sai_cache_title}</h4>
    </div>
</div>
<div class="row-fluid">
    <div class="col-md-12 sai_padding_off">
        <hr>
    </div>
</div>
<div class="row-fluid">
    <div class="col-md-12 sai_padding_off">
        &nbsp;Entries: ${count} showing 100
        <button type="button" class="btn-sm btn btn-warning pull-right" id="btn_cache_clear"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span> ${basic_clear}</button>
        <br><br>
    </div>
</div>
<div class="row-fluid">
    <div class="col-md-12 sai_padding_off">
        <table class="sai_table table table-hover table-condensed" style="overflow: auto;">
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