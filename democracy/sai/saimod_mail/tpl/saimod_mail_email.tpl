<div class="table-responsive">
    <table class="table table-striped table-condensed tablesorter sai_margin_off" id="table_mail_email">
        <tbody>
            <tr>
                <th>ID</th>
                <td><input id="input-email-id" type="text" value="${id}" disabled style="width: 100%"/></td>
            </tr>
            <tr>
                <th>Name</th>
                <td><input id="input-email-name" type="text" value="${name}" style="width: 100%"/></td>
            </tr>
            <tr>
                <th>From</th>
                <td><input id="input-email-sender" type="text" value="${sender}" style="width: 100%"/></td>
            </tr>
            <tr>
                <th>Subject</th>
                <td><input id="input-email-subject" type="text" value="${subject}" style="width: 100%"/></td>
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
                <th>TXT-Template</th>
                <td>
                    <select id="select-email-text-template" ${template_lock}>
                        <option value="">No Template</option>
                        ${text_options}
                    </select>
                </td>
            </tr>
            <tr>
                <th>HTML-Template</th>
                <td>
                    <select id="select-email-html-template" ${template_lock}>
                        <option value="">No Template</option>
                        ${html_options}
                    </select>
                </td>
            </tr>
            <tr>
                <th colspan="2"></th>
            </tr>
            <tr>
                <th colspan="2">Preview</th>
            </tr>
            <tr>
                <td colspan="2"></td>
            </tr>
            <tr>
                <th colspan="2"></th>
            </tr>
            <tr>
                <th colspan="2">Send</th>
            </tr>
            ${send}
        </tbody>
    </table>
    <button class="btn btn-sm btn-success" id="btn-email-update" style="margin: 12px;"><i class="fa fa-edit"></i>&nbsp;Update</button>
</div>