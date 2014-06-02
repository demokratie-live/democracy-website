<h4>Texts</h4>
<hr>
<div class="tabbable">
    <ul class="nav nav-tabs" id="localetab">
        ${tabopts}
        <input type="submit" value="Add" class="btn-small btn-success content_add" style="margin-left: 15px;">
    </ul>
    <div class="tab-content" id="tab_content">
        ${tabs}
    </div>
</div>
<div id="editfield">
<div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="modaltitle">${id}</h4>
        <input type="text" value="Text ID" id="new_text_id" style="display: none;"> 
      </div>
        <div class="modal-body" id="modaltextarea" style="display: none;">
        <textarea id="contenttextarea" name="content" style="width:100%"></textarea>
      </div>
      <div class="modal-footer">          
          <div id="modal_success" style="display: none;"><font color="green">Changes have been saved!</font></div>
          <div id="modal_fail" style="display: none;"><font color="red">Changes could not be saved!</font></div>
          <Button type="button" id="del_text" class="btn-small btn-danger" style="float: left;">Delete</button>
          <button type="button" class="btn" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" id="changetext">Save changes</button>
          <button type="button" class="btn btn-primary" id="newtext" style="display: none;">Save new text</button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
</div>