<tr>
    <td>${id}</td>
    <td>
        <input class="input-details-order" type="number" value="${order}" style="width: 50px;"/>
    </td>
    <td>
        <select class="select-details-type" onchange="detail_type($(this))">
            <option value="0" ${selected_head}>Head</option>
            <option value="1" ${selected_data}>Data</option>
        </select>
    </td>
    <td>
        <input class="input-details-value" type="number" value="${value}" step="0.01" style="width: 75px;"/>
    </td>
    <td>
        <input class="input-details-max" type="number" value="${max}" step="0.01" style="width: 75px;"/>
    </td>
    <td>
        <input class="input-details-text-cost" type="text" value="${text_cost}"/>
    </td>
    <td>
        <input class="input-details-text-description" type="text" value="${text_description}"/>
    </td>
    <td>
        <input class="input-details-text-description-subtext" type="text" value="${text_description_subtext}"/>
    </td>
    <td>
        <input class="input-details-text-date" type="text" value="${text_date}"/>
    </td>
    <td>
        <button detail="${id}" class="donate-details-delete btn btn-sm btn-danger pull-right"><i class="fa fa-trash"></i></button>
        <button detail="${id}" class="donate-details-update btn btn-sm btn-warning pull-right"><i class="fa fa-edit"></i></button>
    </td>
</tr>