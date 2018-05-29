<div class="table-responsive">
    <table class="table table-striped table-condensed tablesorter sai_margin_off" id="table_mail_contact">
        <tbody>
            <tr>
                <th>EMail</th>
                <td><input id="input-contact-email" type="email" value="${email}" disabled style="width: 100%"/></td>
            </tr>
            <tr>
                <th>Sex</th>
                <td><input id="input-contact-sex" type="text" value="${sex}" style="width: 100%"/></td>
            </tr>
            <tr>
                <th>FirstName</th>
                <td><input id="input-contact-name-first" type="text" value="${name_first}" style="width: 100%"/></td>
            </tr>
            <tr>
                <th>LastName</th>
                <td><input id="input-contact-name-last" type="text" value="${name_last}" style="width: 100%"/></td>
            </tr>
            <tr>
                <th>UpdatedAt</th>
                <td>${updated_at}</td>
            </tr>
            <tr>
                <th colspan="2"></th>
            </tr>
            <tr>
                <th>Lists</th>
                <th>Subscribed</th>
            </tr>
            ${data}
        </tbody>
    </table>
    <button class="btn btn-sm btn-success" id="btn-contact-update" style="margin: 12px;"><i class="fa fa-edit"></i>&nbsp;Update</button>
</div>