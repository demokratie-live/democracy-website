<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link ${active_text}" href="#!mail(templates)">Text</a>
  </li>
  <li class="nav-item">
    <a class="nav-link ${active_html}" href="#!mail(templates);type.1">HTML</a>
  </li>
</ul>
<div class="table-responsive">
    <table class="table table-striped table-condensed tablesorter sai_margin_off" id="table_mail_templates">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Type</th>
                <th>System Lock</th>
                <th>UpdatedAt</th>
                <th>
                    <button type="button" id="btn-mail-template-del" class="btn btn-sm btn-danger pull-right"><i class="fa fa-trash"></i></button>
                    <button type="button" id="btn-mail-template-new" class="btn btn-sm btn-success pull-right" onclick="system.load('mail(template_new)')" style="margin-right: 10px;"><i class="fa fa-plus"></i></button>
                </th>
            </tr>
        </thead>
        <tbody>${data}</tbody>    
    </table>
</div>