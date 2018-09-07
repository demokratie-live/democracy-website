<div class="row">
    <div class="col-12 sai_padding_off bg-primary sai_padding_10">
        <h4 class="sai_margin_off" style="float:left;">&nbsp;<span class="fa fa-dollar" aria-hidden="true"></span>&nbsp;&nbsp;Donate</h4>
    </div>
    <div class="col-md-9 sai_padding_off" style="padding: 15px;">
        <table class="table table-striped table-condensed" style="border: 1px solid #dee2e6;">
            <tr>
                <th>Paten</th>
                <td><input type="text" id="donate-paten" value="${donation_paten}" style="width: 100%;"/></td>
            </tr>
            <tr>
                <th>Value</th>
                <td><input type="text" id="donate-value" value="${donation_value}" style="width: 100%;"/></td>
            </tr>
            <tr>
                <th>Paten Goal</th>
                <td><input type="text" id="donate-paten-goal" value="${donation_paten_goal}" style="width: 100%;"/></td>
            </tr>
            <tr>
                <th>Value Goal</th>
                <td><input type="text" id="donate-value-goal" value="${donation_value_goal}" style="width: 100%;"/></td>
            </tr>
            <tr>
                <td></td>
                <td>
                    <button id="donate-update" class="btn btn-success pull-right">Update</button>
                </td>
            </tr>
        </table>
    </div>
    <div class="col-md-3 sai_padding_off" style="padding: 15px;">
        ${donate_box}
    </div>
    <div class="col-12 sai_padding_off">
        <hr/>
    </div>
    <div class="col-md-9 sai_padding_off" style="padding: 15px; overflow: auto;">
        <h3><b>Value left: ${value_left}</b></h3>
        <table class="table table-striped table-condensed" style="border: 1px solid #dee2e6;">
            <tr>
                <th>ID</th>
                <th>Order</th>
                <th>Type</th>
                <th>Value</th>
                <th>Max</th>
                <th>TCost</th>
                <th>TDescription</th>
                <th>TDescriptionSub</th>
                <th>TDate</th>
                <th style="text-align: right; min-width: 88px;">Action</th>
            </tr>
            ${donate_data}
            <tr>
                <td></td>
                <td>
                    <input class="input-details-order" type="number" style="width: 50px;"/>
                </td>
                <td>
                    <select class="select-details-type" onchange="detail_type($(this))">
                        <option value="0">Head</option>
                        <option value="1" selected>Data</option>
                    </select>
                </td>
                <td>
                    <input class="input-details-value" type="number" step="0.01" style="width: 75px;"/>
                </td>
                <td>
                    <input class="input-details-max" type="number" step="0.01" style="width: 75px;"/>
                </td>
                <td>
                    <input class="input-details-text-cost" type="text"/>
                </td>
                <td>
                    <input class="input-details-text-description" type="text"/>
                </td>
                <td>
                    <input class="input-details-text-description-subtext" type="text"/>
                </td>
                <td>
                    <input class="input-details-text-date" type="text"/>
                </td>
                <td>
                    <button id="donate-details-insert" class="btn btn-success pull-right"><i class="fa fa-plus"></i></button>
                </td>
            </tr>
        </table>
    </div>
    <div class="col-md-3 sai_padding_off" style="padding: 15px;">
        ${donate_details}
    </div>
</div>