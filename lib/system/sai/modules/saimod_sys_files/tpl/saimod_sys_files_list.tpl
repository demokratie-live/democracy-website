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
        <th><form enctype="multipart/form-data" id="form_${cat}"><input class="form-control" type="file" name="datei_${cat}"></th>
        <th></th>
        <th></th>
        <th><button type="submit" class="btn btn-sm btn_upload btn-success" cat="${cat}"><span class="glyphicon glyphicon-upload" aria-hidden="true"></span> ${upload}</button></form></th>
    </tr>
</table>