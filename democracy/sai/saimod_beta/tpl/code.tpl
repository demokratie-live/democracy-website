<div class="row-fluid sai_margin_bottom_20 sai_margin_top_10">
    <div class="col-12">
        <h3>Generate Code</h3>
        <div class="input-group">
            <input id="code_comment" type="text" class="form-control" placeholder="Comment">
            <div class="input-group-append">
                <button id="code_generate" type="button" class="btn btn-success"><i class="fa fa-plus"></i></button>
            </div>
        </div>
    </div>
</div>
<div class="table-responsive">
    <table class="table table-striped table-condensed tablesorter sai_margin_off" id="table_beta_code">
        <thead>
            <tr>
                <th>Code</th>
                <th>Generated</th>
                <th>Redeemed Count</th>
                <th>Comment</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>${data}</tbody>    
    </table>
</div>