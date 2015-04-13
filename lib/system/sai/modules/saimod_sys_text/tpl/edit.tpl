<h4>Texteditor</h4>
<hr>
<div class="tabbable">
    <div class="panel panel-default">
        <ul class="nav nav-tabs" id="langtabs_">
            ${langs}
        </ul>
        <div class="panel-body">
            <input type="text" value="${title}" />
            <textarea id="contenttextarea" name="content" style="width:100%">${text}</textarea>
        </div>
        <div class="panel-footer">
              <button type="button" id="del_text" class="btn-small btn-danger" style="float: left;">Delete</button>
              <button type="button" class="btn" data-dismiss="modal" id="edit_close">Close</button>
              <button type="button" class="btn btn-primary" id="changetext">Save changes</button>
              <button type="button" class="btn btn-primary" id="newtext" style="display: none;">Save new text</button>
        </div>
    </div>
</div>            
          
</div>