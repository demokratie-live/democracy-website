<div class="table-responsive">
    <table class="table table-striped table-condensed tablesorter sai_margin_off" id="table_mail_emails">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>From</th>
                <th>Subject</th>
                <th>Lock</th>
                <th>UpdatedAt</th>
                <th>
                    <button type="button" id="btn-mail-email-del" class="btn btn-sm btn-danger pull-right"><i class="fa fa-trash"></i></button>
                    <button type="button" id="btn-mail-email-clone" class="btn btn-sm btn-warning pull-right" style="margin-right: 5px;"><i class="fa fa-copy"></i></button>
                    <button type="button" id="btn-mail-email-new" class="btn btn-sm btn-success pull-right" onclick="system.load('mail(email_new)')" style="margin-right: 10px;"><i class="fa fa-plus"></i></button>
                </th>
            </tr>
        </thead>
        <tbody>${data}</tbody>    
    </table>
</div>