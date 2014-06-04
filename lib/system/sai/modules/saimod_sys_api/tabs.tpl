<h4>System API</h4>
<hr>
<div class="tabbable">
    <ul class="nav nav-tabs" id="localetab">
        ${tabopts}
    </ul>
    <div class="tab-content">
        ${tabs}        
    </div>
</div>
 <table class="table table-hover table-condensed" style="overflow: auto;">
        <tr>
            <th>ID</th>
            <th>Group</th>
            <th>Type</th>
            <th>ParentID</th>
            <th>ParentValue</th>
            <th>Name</th>
            <th>Verify</th>
        </tr>
        <tr>
            <td><input type="text" id="new_call_id" placeholder="new id" style="width: 140px;"></td>
            <td><input type="text" id="new_call_group" placeholder="new group" style="width: 140px;"></td>
            <td><input type="text" id="new_call_type" placeholder="new type" style="width: 140px;"></td>
            <td><input type="text" id="new_call_parentid" placeholder="parent id" style="width: 140px;"></td>
            <td><input type="text" id="new_call_parentvalue" placeholder="parent value" style="width: 140px;"></td>
            <td><input type="text" id="new_call_name" placeholder="name" style="width: 140px;"></td>
            <td><input type="text" id="new_call_verify" placeholder="verify" style="width: 140px;"></td>
        </tr>
        
    </table>
    <button type="button" class="btn-small btn-success" id="addcall">Add</button>
    
<div class="modal fade" id="modal_api" style="width: 700px;" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="modaltitle"></h4>
        <div id="modal_description"></div>
      </div>
        <div class="modal-body" id="modaltextarea" style="display: none;">
            <input type="text" id="new_call_id" placeholder="new call id" name="content" style="width:100%" />
      </div>
      </div>
      <div class="modal-footer">
          <button type="button" id="del_api" class="btn-small btn-danger" style="float: left;">Delete</button>
          <button type="button" class="btn-small" data-dismiss="modal" id="edit_close">Close</button>
<!--          <button type="button" class="btn-small btn-success" id="new_call">Add</button>-->
      </div>
        
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->