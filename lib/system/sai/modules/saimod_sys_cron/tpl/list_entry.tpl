<tr class="${tr_class} cron_entries" cls="${class}">
    <td>${class}</td>
    <td>${min}</td>
    <td>${hour}</td>
    <td>${day}</td>
    <td>${day_week}</td>
    <td>${month}</td>
    <td>${last_run}</td>
    <td>${next}</td>
    <td>${status}</td>
    <td>
        <button type="button" class="btn-small btn-success btn_cron_edit" _class="${class}" _min="${min}" _hour="${hour}" _day="${day}" _day_week="${day_week}" _month="${month}">Edit</button>
        <button type="button" class="btn-small btn-danger btn_cron_del" _class="${class}">Del</button>
    </td>
</tr>