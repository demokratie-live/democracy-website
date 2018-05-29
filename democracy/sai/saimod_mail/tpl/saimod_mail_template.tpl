<div class="table-responsive">
    <table class="table table-striped table-condensed tablesorter sai_margin_off" id="table_mail_template">
        <tbody>
            <tr>
                <th>ID</th>
                <td>
                    <input id="input-template-id" type="text" value="${id}" disabled style="width: 100%"/>
                </td>
            </tr>
            <tr>
                <th>Type</th>
                <td>
                    <select id="input-template-type">
                        <option value="0" ${selected_text}>Text</option>
                        <option value="1" ${selected_html}>HTML</option>
                    </select>
                </td>
            </tr>
            <tr>
                <th>Name</th>
                <td>
                    <input id="input-template-name" type="text" value="${name}" style="width: 100%"/>
                </td>
            </tr>
            <tr>
                <th>System Lock</th>
                <td>${system_lock}</td>
            </tr>
            <tr>
                <th>UpdatedAt</th>
                <td>${updated_at}</td>
            </tr>
            <tr>
                <th>Value</th>
                <td>
                    <textarea id="input-template-value" style="width: 100%; min-height: 350px;">${value}</textarea>
                </td>
            </tr>
        </tbody>
    </table>
    <button class="btn btn-sm btn-success" id="btn-template-update" style="margin: 12px;"><i class="fa fa-edit"></i>&nbsp;Update</button>
</div>