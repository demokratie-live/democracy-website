 <table class="table table-hover table-condensed tablesorter sai_table" id="sai_mod_files_table" style="overflow: auto;">
    <thead> 
    <tr>
        <th>Name</th>
        <th>Extension</th>
        <th>URL</th>       
        <th>Action</th>
        <th></th>
        <th></th>
    </tr>
    </thead>
    <tbody> 
        ${content}
    </tbody>     
    <tr>
        <br>
        <th><form enctype="multipart/form-data" id="form_${cat}"><input class="form-control" type="file" name="datei_${cat}"></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th><button type="submit" class="btn btn-sm btn_upload btn-success" cat="${cat}"><span class="fa fa-upload" aria-hidden="true"></span> ${basic_upload}</button></form></th>
    </tr>
</table>