<tr class="email-image ${new_image}" image="${id}">
    <td>
        <input class="email-image-name" type="text" value="${name}"/>
    </td>
    <td>
        <select class="email-image-file">
            ${files}
        </select>
    </td>
    <td>
        <select class="email-image-mime">
            <option value="${mime}" selected>${mime}</option>
        </select>
    </td>
    <th>
        <button class="btn btn-sm btn-danger btn-email-image-del" onclick="$(this).parent().parent().addClass('image_deleted');"><i class="fa fa-trash"></i></button>
    </th>
</tr>