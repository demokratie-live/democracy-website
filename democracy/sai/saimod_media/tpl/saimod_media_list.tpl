<div class="table-responsive">
    <table class="table table-striped table-condensed tablesorter sai_margin_off" id="table_media">
        <thead>
            <tr>
                <th>ID</th>
                <th>Image</th>
                <th>Title</th>
                <th>Link</th>
                <th>Order</th>
                <th>UpdatedAt</th>
                <th>
                    <button type="button" id="btn-media-del" class="btn btn-sm btn-danger pull-right"><i class="fa fa-trash"></i></button>
                    <button type="button" id="btn-media-new" class="btn btn-sm btn-success pull-right" onclick="system.load('media(new)')" style="margin-right: 5px;"><i class="fa fa-plus"></i></button>
                </th>
            </tr>
        </thead>
        <tbody>
            ${data}
        </tbody>    
    </table>
</div>