<b>Text ID:</b> <input type="text" value="${id}"/><button id="btn_add" class="btn-danger" style="margin-left: 15px; height: 32px; font-size: 13px;">Edit</button>
<textarea id="texteditor" name="texteditor">${content}</textarea>
<br>
<input type="text" placeholder="Tags..." style="width: 98%;"/>
<br>
<button id="btn_back" class="btn" onClick="system.load('text');" style="margin-right: 15px; height: 32px; font-size: 13px; float: left;">Back</button>
<button id="btn_add" class="btn-danger" style="margin-right: 15px; height: 32px; font-size: 13px; float: right;">Delete</button>
<button id="btn_add" class="btn-success" style="margin-right: 15px; height: 32px; font-size: 13px; float: right;">Save</button>