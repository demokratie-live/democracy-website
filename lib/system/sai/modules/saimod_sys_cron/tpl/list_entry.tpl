<tr class="${tr_class} cron_entries" cls="${class}">
    <td>${class}</td>
    <td>${min}</td>
    <td>${hour}</td>
    <td>${day}</td>
    <td>${day_week}</td>
    <td>${month}</td>
    <td>${last_run}</td>
    <td>${next}</td>
    <td>
        <select class="form-control" id="select_status_${i}">
            <option ${selected_0} value="0">SUCCESFULLY</option>
            <option ${selected_1} value="1">RUNNING</option>
            <option ${selected_2} value="2">FAIL</option>
            <option ${selected_3} value="3">FAIL_CLASS</option>
        </select>
    </td>
    <td>
        <button type="button" class="btn-sm btn btn-warning btn_cron_status" _class="${class}" _i="${i}"><span class="glyphicon glyphicon-repeat" aria-hidden="true"></span></button>
    </td>
    <td>
        <button type="button" class="btn-sm btn btn-success btn_cron_edit" _class="${class}" _min="${min}" _hour="${hour}" _day="${day}" _day_week="${day_week}" _month="${month}"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></button>
    </td>
    <td>
        <button type="button" class="btn-sm btn btn-danger btn_cron_del" _class="${class}"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button>
    </td>
</tr>