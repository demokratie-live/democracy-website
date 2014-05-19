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
        <th><form enctype="multipart/form-data"><input type="file" name="datei"></th>
        <th></th>
        <th></th>
        <th><input type="submit" class="btn" value="Upload" id="btn_upload" cat="${cat}"></form></th>        
    </tr>
</table>