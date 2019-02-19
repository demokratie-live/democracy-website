<div class="table-responsive">
    <table class="table table-striped table-condensed tablesorter sai_margin_off" id="table_mail_email_new">
        <tbody>
            <tr>
                <th>Name</th>
                <td><input id="input-email-new-name" type="text" style="width: 100%"/></td>
            </tr>
            <tr>
                <th>Account</th>
                <td>
                    <select id="select-email-new-account">
                        <option value="1" selected>contact@democracy-deutschland.de</option>
                        <option value="2">prototyping@democracy-deutschland.de</option>
                        <option value="3">crowdfunding@democracy-deutschland.de</option>
                        <option value="4">krueger@democracy-deutschland.de</option>
                    </select>
                </td>
            </tr>
            <tr>
                <th>From</th>
                <td><input id="input-email-new-sender" type="text" style="width: 100%"/></td>
            </tr>
            <tr>
                <th>Subject</th>
                <td><input id="input-email-new-subject" type="text" style="width: 100%"/></td>
            </tr>
            <tr>
                <th>TXT-Template</th>
                <td>
                    <select id="select-email-new-text-template">
                        <option value="">No Template</option>
                        ${text_options}
                    </select>
                </td>
            </tr>
            <tr>
                <th>HTML-Template</th>
                <td>
                    <select id="select-email-new-html-template">
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
                <td colspan="2">
                    
                </td>
            </tr>
        </tbody>
    </table>
    <button class="btn btn-sm btn-success" id="btn-email-new-insert" style="margin: 12px;"><i class="fa fa-save"></i>&nbsp;Insert</button>
</div>