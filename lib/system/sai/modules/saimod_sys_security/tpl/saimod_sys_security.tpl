<h4>${sai_security_title}</h4>
<hr>
<div class="tabbable">
    <ul class="nav nav-tabs" id="securitytab">
        <li class="active"><a href="#!security" id="menu_users">Users</a></li>
        <li><a href="#!security(rights)" id="menu_rights">Rights</a></li>
        <img id="loader" src="${PICPATH}ajax-loader.gif" style="margin-left: 10px; margin-top: 10px; display: none;  float: left"/>
        <button class="btn-sm btn btn-success" id="user_go" type="submit" style="float: right; margin-left: 10px;"><span class="glyphicon glyphicon-search" aria-hidden="true"></span>  ${basic_search}</button>
        <input class="input-medium search-query" id="user_search" type="text" placeholder="EMail or Username" size="30" style="float: right;"/>
    </ul>
    <div class="tab-content">
        <div class="tab-pane active" id="tab_security"></div>
    </div>
</div>