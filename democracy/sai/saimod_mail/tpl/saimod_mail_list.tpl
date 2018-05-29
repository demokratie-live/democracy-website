<div class="table-responsive">
    <table class="table table-striped table-condensed tablesorter sai_margin_off" id="table_mail_list">
        <tbody>
            <tr>
                <th>ID</th>
                <td><input id="input-list-id" type="text" value="${id}" disabled style="width: 100%"/></td>
            </tr>
            <tr>
                <th>Name</th>
                <td><input id="input-list-name" type="text" value="${name}" style="width: 100%"/></td>
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
                <th colspan="2"></th>
            </tr>
            <tr>
                <th colspan="2">Members</th>
            </tr>
            ${data}
        </tbody>
    </table>
    <button class="btn btn-sm btn-success" id="btn-list-update" style="margin: 12px;"><i class="fa fa-edit"></i>&nbsp;Update</button>
</div>