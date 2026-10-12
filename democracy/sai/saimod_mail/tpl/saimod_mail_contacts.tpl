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
            <tr>
                <th colspan="6">
                    <input class="input-medium search-query action-control" id="input_search" type="text" placeholder="Search" size="40" style="width: 100%;" value="${search}"/>
                </th>
                <th>
                    <button class="btn-sm btn btn-success" state="mail(contacts);search." state2=";page.0;list.${list}" id="btn_search" type="submit" style="width: 100%;"><span class="glyphicon glyphicon-search" aria-hidden="true"></span>Search</button>
                </th>
            </tr>
            <tr>
                <th colspan="7">
                    Rows: ${count} Page: ${page}
                </th>
            </tr>
        </thead>
        <tbody>${data}</tbody>    
    </table>
    <ul class="pagination flex-wrap">
        <li class="page-item"><a class="page-link" href="#!mail(contacts);list.${list};search.${search};page.0">&laquo;</a></li>
        ${pagination}
        <li class="page-item"><a class="page-link" href="#!mail(contacts);list.${list};search.${search};page.${page_last}">&raquo;</a></li>
    </ul>
</div>