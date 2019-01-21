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
                <th>Account</th>
                <td>
                    <select id="select-email-account">
                        <option value="1" ${selected_account_1}>contact@democracy-deutschland.de</option>
                        <option value="2" ${selected_account_2}>prototyping@democracy-deutschland.de</option>
                        <option value="3" ${selected_account_3}>crowdfunding@democracy-deutschland.de</option>
                        <option value="4" ${selected_account_4}>krueger@democracy-deutschland.de</option>
                    </select>
                </td>
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
                    <button class="btn btn-sm btn-warning pull-right" id="btn-email-template-text"><i class="fa fa-pencil"></i></button>
                </td>
            </tr>
            <tr>
                <th>HTML-Template</th>
                <td>
                    <select id="select-email-html-template" ${template_lock}>
                        <option value="">No Template</option>
                        ${html_options}
                    </select>
                    <button class="btn btn-sm btn-warning pull-right" id="btn-email-template-html"><i class="fa fa-pencil"></i></button>
                </td>
            </tr>
            <tr>
                <th colspan="2"></th>
            </tr>
            <tr>
                <th colspan="2">Placeholders</th>
            </tr>
            <tr>
                <style>
                    .email-placeholder-new, .placeholder_deleted, .email-placeholder-switch-value-new, .switch_value_deleted{
                        display: none;
                    }
                </style>
                <td colspan="2">
                    <table class="table table-striped table-condensed tablesorter sai_margin_off" id="table_mail_email_placeholders">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Data</th>
                                <th>
                                    <button class="btn btn-sm btn-success" id="btn-email-placeholder-new"><i class="fa fa-plus"></i></button>
                                </th>
                            </tr>
                        </thead>
                        <tbody id="tbody_mail_email_placeholders">
                            <tr>
                                <td>emoji_mobile</td>
                                <td>STATIC</td>
                                <td>📱</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>data_*</td>
                                <td>STATIC</td>
                                <td>Mixed</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>contact_*</td>
                                <td>STATIC</td>
                                <td>Mixed</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>unsubscribe_link</td>
                                <td>STATIC</td>
                                <td>Link</td>
                                <td></td>
                            </tr>
                            ${placeholders}
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <th colspan="2">Images</th>
            </tr>
            <tr>
                <style>
                    .email-image-new, .image_deleted{
                        display: none;
                    }
                </style>
                <td colspan="2">
                    <table class="table table-striped table-condensed tablesorter sai_margin_off" id="table_mail_email_images">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>File</th>
                                <th>Mime</th>
                                <th>
                                    <button class="btn btn-sm btn-success" id="btn-email-image-new"><i class="fa fa-plus"></i></button>
                                </th>
                            </tr>
                        </thead>
                        <tbody id="tbody_mail_email_images">
                            ${images}
                        </tbody>
                    </table>
                </td>
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