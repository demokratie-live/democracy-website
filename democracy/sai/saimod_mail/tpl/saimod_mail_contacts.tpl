<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link ${active_all}" href="#!mail(contacts)">All</a>
  </li>
  ${menu}
</ul>
<div class="table-responsive">
    <table class="table table-striped table-condensed tablesorter sai_margin_off" id="table_mail_contacts">
        <thead>
            <tr>
                <th>EMail</th>
                <th>Sex</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Organization</th>
                <th>UpdatedAt</th>
                <th>
                    <button type="button" id="btn-mail-contact-del" class="btn btn-sm btn-danger pull-right"><i class="fa fa-trash"></i></button>
                    <button type="button" id="btn-mail-contact-new" class="btn btn-sm btn-success pull-right" onclick="system.load('mail(contact_new)')" style="margin-right: 10px;"><i class="fa fa-plus"></i></button>
                </th>
            </tr>
        </thead>
        <tbody>${data}</tbody>    
    </table>
</div>