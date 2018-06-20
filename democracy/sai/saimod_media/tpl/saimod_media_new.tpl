<div class="table-responsive">
    <table class="table table-striped table-condensed tablesorter sai_margin_off" id="table_media_new">
        <tbody>
            <tr>
                <th>Type</th>
                <td>
                    <select id="input-media-new-type">
                        <option value="0">Press</option>
                        <option value="1">Publication</option>
                        <option value="2">Download</option>
                    </select>
                </td>
            </tr>
            <tr>
                <th>Title</th>
                <td><input id="input-media-new-title" type="text" style="width: 100%"></td>
            </tr>
            <tr>
                <th>Link</th>
                <td><input id="input-media-new-link" type="text" style="width: 100%"/></td>
            </tr>
            <tr>
                <th>Order</th>
                <td><input id="input-media-new-order" type="number" value="0" style="width: 100%"/></td>
            </tr>
            <tr>
                <th>Image</th>
                <td>
                    <select id="input-media-new-img">${images}</select>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <img id="preview" alt="Preview"/>
                </td>
            </tr>
        </tbody>    
    </table>
    <button class="btn btn-sm btn-success" id="btn-media-new-insert" style="margin: 12px;"><i class="fa fa-save"></i>&nbsp;Insert</button>
</div>