<div class="row">
    <div class="col-12 sai_padding_off bg-primary sai_padding_10">
        <h4 class="sai_margin_off" style="float:left;">&nbsp;<span class="fa fa-check" aria-hidden="true"></span>&nbsp;&nbsp;Donate</h4>
    </div>
    <div class="col-md-8 sai_padding_off" style="padding: 15px;">
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
                <td></td>
                <td>
                    <button id="donate-update" class="btn btn-success">Update</button>
                </td>
            </tr>
        </table>
    </div>
    <div class="col-md-4 sai_padding_off" style="padding: 15px;">
        ${donate_box}
    </div>
</div>