<div class="table-responsive">
    <table class="table table-striped table-condensed tablesorter sai_margin_off" id="table_faq_edit">
        <tbody>
            <tr>
                <th>ID</th>
                <td>${id}</td>
            </tr>
            <tr>
                <th>Question</th>
                <td><textarea id="input-faq-question" style="width: 100%">${question}</textarea></td>
            </tr>
            <tr>
                <th>Answer</th>
                <td><textarea id="input-faq-answer" style="width: 100%">${answer}</textarea></td>
            </tr>
            <tr>
                <th>Categories</th>
                <td><input id="input-faq-categories" type="text" value="${categories}" style="width: 100%"/></td>
            </tr>
            <tr>
                <th>Order</th>
                <td><input id="input-faq-order" type="number" value="${order}" style="width: 100%"/></td>
            </tr>
        </tbody>
    </table>
    <button class="btn btn-sm btn-success" id="btn-faq-update" style="margin: 12px;" faq="${id}"><i class="fa fa-edit"></i>&nbsp;Update</button>
</div>