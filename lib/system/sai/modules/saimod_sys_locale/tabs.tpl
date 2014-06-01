<h4>Texts</h4>
<hr>
<div class="tabbable">
    <ul class="nav nav-tabs" id="localetab">
        ${tabopts}
        <input type="submit" value="Add" class="btn btn-success content_add" style="margin-left: 15px;">
    </ul>
    <div class="tab-content" id="tab_content">
        ${tabs}
    </div>
</div>
<div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="modaltitle">${id}</h4>
      </div>
      <div class="modal-body">
                <textarea id="contenttextarea" name="content" style="width:100%">
                    
                </textarea>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" id="changetext">Save changes</button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->