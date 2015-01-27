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
        <select id="select_status_${i}">
            <option ${selected_0} value="0">SUCCESFULLY</option>
            <option ${selected_1} value="1">RUNNING</option>
            <option ${selected_2} value="2">FAIL</option>
            <option ${selected_3} value="3">FAIL_CLASS</option>
        </select>
        <button type="button" class="btn-small btn-danger btn_cron_status" _class="${class}" _i="${i}">Change</button>
    </td>
    <td>
        <button type="button" class="btn-small btn-success btn_cron_edit" _class="${class}" _min="${min}" _hour="${hour}" _day="${day}" _day_week="${day_week}" _month="${month}">Edit</button>
        <button type="button" class="btn-small btn-danger btn_cron_del" _class="${class}">Del</button>
    </td>
</tr>