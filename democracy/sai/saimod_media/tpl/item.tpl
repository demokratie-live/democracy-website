 <tr>
    <td><a href="#!media(edit);id.${id}">${id}</a></td>
    <td>
        <a href="#!media(edit);id.${id}">
            <img src="./files/medien/${img}" style="width: 200px;"/>
        </a>
    </td>
    <td>${title}</td>
    <td style="word-break: break-all;"><a href="${link}" target="_blank">${link}</a></td>
    <td>${order}</td>
    <td>${updated_at}</td>
    <td>
        <input type="checkbox" class="pull-right media-check" media="${id}"/>
    </td>
</tr>