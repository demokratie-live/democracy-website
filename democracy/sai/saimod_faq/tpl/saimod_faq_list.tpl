<div class="table-responsive">
    <table class="table table-striped table-condensed tablesorter sai_margin_off" id="table_faqs">
        <thead>
            <tr>
                <th>ID</th>
                <th>Question</th>
                <th>Categories</th>
                <th>Order</th>
                <th>UpdatedAt</th>
                <th style="min-width:95px;">
                    <button type="button" id="btn-faq-del" class="btn btn-sm btn-danger pull-right"><i class="fa fa-trash"></i></button>
                    <button type="button" id="btn-faq-new" class="btn btn-sm btn-success pull-right" onclick="system.load('faq(new)')" style="margin-right: 5px;"><i class="fa fa-plus"></i></button>
                </th>
            </tr>
        </thead>
        <tbody>${faqs}</tbody>
    </table>
</div>