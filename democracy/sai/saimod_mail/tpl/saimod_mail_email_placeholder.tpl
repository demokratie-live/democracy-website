<tr class="email-placeholder ${new_placeholder}" placeholder="${id}">
    <td>
        <input class="email-placeholder-name" type="text" value="${name}"/>
    </td>
    <td>
        <select class="email-placeholder-type" onchange="placeholder_type($(this))">
            <option value="1" ${selected_1}>Text</option>
            <option value="2" ${selected_2}>Switch</option>
            <option value="3" ${selected_3}>Name</option>
        </select>
    </td>
    <td>
        <div class="email-placeholder-data-text">
            <textarea class="email-placeholder-data-text-value" style="width: 100%; min-height: 100px;">${text_value}</textarea>
        </div>
        <div class="email-placeholder-data-switch">
            <table class="table table-striped table-condensed tablesorter sai_margin_off">
                <tr>
                    <th>Table</th>
                    <th>
                        <input class="email-placeholder-data-switch-table" type="text" value="${switch_table}"/>
                    </th>
                    <th></th>
                </tr>
                <tr>
                    <th>Field</th>
                    <th>
                        <input class="email-placeholder-data-switch-field" type="text" value="${switch_field}"/>
                    </th>
                    <th></th>
                </tr>
                <tr>
                    <th>Default</th>
                    <th>
                        <input class="email-placeholder-data-switch-default" type="text" value="${switch_default}"/>
                    </th>
                    <th></th>
                </tr>
                <tr>
                    <th>Values</th>
                    <th></th>
                    <th>
                        <button class="btn btn-sm btn-success btn-email-placeholder-switch-value-new" onclick="placeholder_switch_new($(this))"><i class="fa fa-plus"></i></button>
                    </th>
                </tr>
                ${switch_values}
            </table>
        </div>
        <div class="email-placeholder-data-name">
            <input class="email-placeholder-data-name-value" type="text" placeholder="Default Value" value="${name_default}" style="width: 100%;"/>
        </div>
    </td>
    <th>
        <button class="btn btn-sm btn-danger btn-email-palceholder-del" onclick="$(this).parent().parent().addClass('placeholder_deleted');"><i class="fa fa-trash"></i></button>
    </th>
</tr>