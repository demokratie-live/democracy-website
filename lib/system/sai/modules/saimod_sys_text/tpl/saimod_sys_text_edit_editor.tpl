<b>Text ID:</b> <input id="input_new_id" type="text" value="${id}"/>
<textarea id="texteditor" name="texteditor">${content}</textarea>
<br>
<input id="input_tags" type="text" placeholder="Tags..." value="${tags}" style="width: 98%;"/>
<br>
<button id="btn_back" class="btn" onClick="system.load('text');" style="margin-right: 15px; height: 32px; font-size: 13px; float: left;">Back</button>
<button id="btn_delete" text_id="${id}" text_lang="${lang}" class="btn-danger" style="margin-right: 15px; height: 32px; font-size: 13px; float: right;">Delete</button>
<button id="btn_save" text_id="${id}" text_lang="${lang}" class="btn-success" style="margin-right: 15px; height: 32px; font-size: 13px; float: right;">Save</button>