<div class="table-responsive">
    <table class="table table-striped table-condensed tablesorter sai_margin_off" id="table_media_edit">
        <tbody>
            <tr>
                <th>ID</th>
                <td>${id}</td>
            </tr>
            <tr>
                <th>Type</th>
                <td>
                    <select id="input-media-type">
                        <option value="0" ${selected_type_0}>Press</option>
                        <option value="1" ${selected_type_1}>Publication</option>
                        <option value="2" ${selected_type_2}>Download</option>
                    </select>
                </td>
            </tr>
            <tr>
                <th>Title</th>
                <td><input id="input-media-title" type="text" value="${title}" style="width: 100%"></td>
            </tr>
            <tr>
                <th>Link</th>
                <td><input id="input-media-link" type="text" value="${link}"style="width: 100%"/></td>
            </tr>
            <tr>
                <th>Order</th>
                <td><input id="input-media-order" type="number" value="${order}" style="width: 100%"/></td>
            </tr>
            <tr>
                <th>Image</th>
                <td>
                    <select id="input-media-img">${images}</select>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <img id="preview" alt="Preview"/>
                </td>
            </tr>
        </tbody>    
    </table>
    <button class="btn btn-sm btn-success" id="btn-media-update" style="margin: 12px;" media="${id}"><i class="fa fa-edit"></i>&nbsp;Update</button>
</div>