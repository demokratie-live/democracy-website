 <table class="table table-hover table-condensed" style="overflow: auto;">
    <tr>
        <th>Name</th>
        <th>Extension</th>
        <th>URL</th>       
        <th>Action</th>
    </tr>
    ${content}
    <tr>
        <br>
        <th><form enctype="multipart/form-data" id="form_${cat}"><input type="file" name="datei_${cat}"></th>
        <th></th>
        <th></th>
        <th><input type="submit" class="btn btn_upload btn-success" value="Upload" cat="${cat}"></form></th>
    </tr>
</table>