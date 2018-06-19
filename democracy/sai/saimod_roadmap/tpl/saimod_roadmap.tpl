<style>
    #table_goals select, #table_goals select>option{
        font-family: 'FontAwesome', 'sans-serif';
        font-size: 30px;
    }
    .icon-red {     color: rgb(196, 48, 43); }
    .icon-green {   color: rgb(38, 183, 39) }
    .icon-blue {    color: rgb(68,148,211); }
    .icon-grey {    color: rgb(115,115,115); }
    .icon-black {   color: rgb(0,0,0); }
</style>
<div class="row">
    <div class="col-12 sai_padding_off bg-primary sai_padding_10">
        <h4 class="sai_margin_off" style="float:left;">&nbsp;<span class="fa fa-road" aria-hidden="true"></span>&nbsp;&nbsp;Roadmap</h4>
    </div>
    <div class="col-md-12 sai_padding_off sai_border_left" id="content_roadmap">
        <div class="table-responsive">
            <table class="table table-striped table-condensed tablesorter sai_margin_off" id="table_goals">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Goal</th>
                        <th>Issue</th>
                        <th>Beta</th>
                        <th>MVP</th>
                        <th>Dream</th>
                        <th>Order</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    ${goals}
                    <tr>
                        <th>New</th>
                        <td><input id="input-roadmap-new-goal" type="text" style="width: 100%"/></td>
                        <td><input id="input-roadmap-new-issue" type="number" value="" style="width: 100%"/></td>
                        <td>
                            <select id="input-roadmap-new-beta">
                                <option value="" selected></option>
                                <option value="1" class="icon-blue">&#xf14a;</option>
                                <option value="11" class="icon-blue">&#xf0c8;</option>
                                <option value="21" class="icon-blue">&#xf14b;</option>
                                <option value="31" class="icon-blue">&#xf0fe;</option>
                                <option value="41" class="icon-blue">&#xf146;</option>
                                <option value="51" class="icon-blue">&#xf264;</option>
                                <option value="61" class="icon-blue">&#xf092;</option>
                                <option value="71" class="icon-blue">&#xf057;</option>
                                
                                <option value="2" class="icon-grey">&#xf14a;</option>
                                <option value="12" class="icon-grey">&#xf0c8;</option>
                                <option value="22" class="icon-grey">&#xf14b;</option>
                                <option value="32" class="icon-grey">&#xf0fe;</option>
                                <option value="42" class="icon-grey">&#xf146;</option>
                                <option value="52" class="icon-grey">&#xf264;</option>
                                <option value="62" class="icon-grey">&#xf092;</option>
                                <option value="72" class="icon-grey">&#xf057;</option>
                                
                                <option value="3" class="icon-red">&#xf14a;</option>
                                <option value="13" class="icon-red">&#xf0c8;</option>
                                <option value="23" class="icon-red">&#xf14b;</option>
                                <option value="33" class="icon-red">&#xf0fe;</option>
                                <option value="43" class="icon-red">&#xf146;</option>
                                <option value="53" class="icon-red">&#xf264;</option>
                                <option value="63" class="icon-red">&#xf092;</option>
                                <option value="73" class="icon-red">&#xf057;</option>
                                
                                <option value="4" class="icon-green">&#xf14a;</option>
                                <option value="14" class="icon-green">&#xf0c8;</option>
                                <option value="24" class="icon-green">&#xf14b;</option>
                                <option value="34" class="icon-green">&#xf0fe;</option>
                                <option value="44" class="icon-green">&#xf146;</option>
                                <option value="54" class="icon-green">&#xf264;</option>
                                <option value="64" class="icon-green">&#xf092;</option>
                                <option value="74" class="icon-green">&#xf057;</option>
                                
                                <option value="5" class="icon-black">&#xf14a;</option>
                                <option value="15" class="icon-black">&#xf0c8;</option>
                                <option value="25" class="icon-black">&#xf14b;</option>
                                <option value="35" class="icon-black">&#xf0fe;</option>
                                <option value="45" class="icon-black">&#xf146;</option>
                                <option value="55" class="icon-black">&#xf264;</option>
                                <option value="65" class="icon-black">&#xf092;</option>
                                <option value="75" class="icon-black">&#xf057;</option>
                            </select>
                        </td>
                        <td>
                            <select id="input-roadmap-new-mvp">
                                <option value="" selected></option>
                                <option value="1" class="icon-blue">&#xf14a;</option>
                                <option value="11" class="icon-blue">&#xf0c8;</option>
                                <option value="21" class="icon-blue">&#xf14b;</option>
                                <option value="31" class="icon-blue">&#xf0fe;</option>
                                <option value="41" class="icon-blue">&#xf146;</option>
                                <option value="51" class="icon-blue">&#xf264;</option>
                                <option value="61" class="icon-blue">&#xf092;</option>
                                <option value="71" class="icon-blue">&#xf057;</option>
                                
                                <option value="2" class="icon-grey">&#xf14a;</option>
                                <option value="12" class="icon-grey">&#xf0c8;</option>
                                <option value="22" class="icon-grey">&#xf14b;</option>
                                <option value="32" class="icon-grey">&#xf0fe;</option>
                                <option value="42" class="icon-grey">&#xf146;</option>
                                <option value="52" class="icon-grey">&#xf264;</option>
                                <option value="62" class="icon-grey">&#xf092;</option>
                                <option value="72" class="icon-grey">&#xf057;</option>
                                
                                <option value="3" class="icon-red">&#xf14a;</option>
                                <option value="13" class="icon-red">&#xf0c8;</option>
                                <option value="23" class="icon-red">&#xf14b;</option>
                                <option value="33" class="icon-red">&#xf0fe;</option>
                                <option value="43" class="icon-red">&#xf146;</option>
                                <option value="53" class="icon-red">&#xf264;</option>
                                <option value="63" class="icon-red">&#xf092;</option>
                                <option value="73" class="icon-red">&#xf057;</option>
                                
                                <option value="4" class="icon-green">&#xf14a;</option>
                                <option value="14" class="icon-green">&#xf0c8;</option>
                                <option value="24" class="icon-green">&#xf14b;</option>
                                <option value="34" class="icon-green">&#xf0fe;</option>
                                <option value="44" class="icon-green">&#xf146;</option>
                                <option value="54" class="icon-green">&#xf264;</option>
                                <option value="64" class="icon-green">&#xf092;</option>
                                <option value="74" class="icon-green">&#xf057;</option>
                                
                                <option value="5" class="icon-black">&#xf14a;</option>
                                <option value="15" class="icon-black">&#xf0c8;</option>
                                <option value="25" class="icon-black">&#xf14b;</option>
                                <option value="35" class="icon-black">&#xf0fe;</option>
                                <option value="45" class="icon-black">&#xf146;</option>
                                <option value="55" class="icon-black">&#xf264;</option>
                                <option value="65" class="icon-black">&#xf092;</option>
                                <option value="75" class="icon-black">&#xf057;</option>
                            </select>
                        </td>
                        <td>
                            <select id="input-roadmap-new-dream">
                                <option value="" selected></option>
                                <option value="1" class="icon-blue">&#xf14a;</option>
                                <option value="11" class="icon-blue">&#xf0c8;</option>
                                <option value="21" class="icon-blue">&#xf14b;</option>
                                <option value="31" class="icon-blue">&#xf0fe;</option>
                                <option value="41" class="icon-blue">&#xf146;</option>
                                <option value="51" class="icon-blue">&#xf264;</option>
                                <option value="61" class="icon-blue">&#xf092;</option>
                                <option value="71" class="icon-blue">&#xf057;</option>
                                
                                <option value="2" class="icon-grey">&#xf14a;</option>
                                <option value="12" class="icon-grey">&#xf0c8;</option>
                                <option value="22" class="icon-grey">&#xf14b;</option>
                                <option value="32" class="icon-grey">&#xf0fe;</option>
                                <option value="42" class="icon-grey">&#xf146;</option>
                                <option value="52" class="icon-grey">&#xf264;</option>
                                <option value="62" class="icon-grey">&#xf092;</option>
                                <option value="72" class="icon-grey">&#xf057;</option>
                                
                                <option value="3" class="icon-red">&#xf14a;</option>
                                <option value="13" class="icon-red">&#xf0c8;</option>
                                <option value="23" class="icon-red">&#xf14b;</option>
                                <option value="33" class="icon-red">&#xf0fe;</option>
                                <option value="43" class="icon-red">&#xf146;</option>
                                <option value="53" class="icon-red">&#xf264;</option>
                                <option value="63" class="icon-red">&#xf092;</option>
                                <option value="73" class="icon-red">&#xf057;</option>
                                
                                <option value="4" class="icon-green">&#xf14a;</option>
                                <option value="14" class="icon-green">&#xf0c8;</option>
                                <option value="24" class="icon-green">&#xf14b;</option>
                                <option value="34" class="icon-green">&#xf0fe;</option>
                                <option value="44" class="icon-green">&#xf146;</option>
                                <option value="54" class="icon-green">&#xf264;</option>
                                <option value="64" class="icon-green">&#xf092;</option>
                                <option value="74" class="icon-green">&#xf057;</option>
                                
                                <option value="5" class="icon-black">&#xf14a;</option>
                                <option value="15" class="icon-black">&#xf0c8;</option>
                                <option value="25" class="icon-black">&#xf14b;</option>
                                <option value="35" class="icon-black">&#xf0fe;</option>
                                <option value="45" class="icon-black">&#xf146;</option>
                                <option value="55" class="icon-black">&#xf264;</option>
                                <option value="65" class="icon-black">&#xf092;</option>
                                <option value="75" class="icon-black">&#xf057;</option>
                            </select>
                        </td>
                        <td><input id="input-roadmap-new-order" type="number" value="0" style="width: 100%"/></td>
                        <td>
                            <button type="button" id="btn-roadmap-new-insert" class="btn btn-sm btn-success pull-right"><i class="fa fa-plus"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>