<div class="table-responsive">
    <table class="table table-striped table-condensed tablesorter sai_margin_off" id="table_mail_lists">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Members</th>
                <th>System Lock</th>
                <th>UpdatedAt</th>
                <th>
                    <button type="button" id="btn-mail-list-del" class="btn btn-sm btn-danger pull-right"><i class="fa fa-trash"></i></button>
                    <button type="button" id="btn-mail-list-new" class="btn btn-sm btn-success pull-right" onclick="system.load('mail(list_new)')" style="margin-right: 10px;"><i class="fa fa-plus"></i></button>
                </th>
            </tr>
        </thead>
        <tbody>${data}</tbody>
    </table>
</div>