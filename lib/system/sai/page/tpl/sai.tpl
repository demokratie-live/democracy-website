<!DOCTYPE html>
<html>
    <head>
        <title>${sai_title}</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="fragment" content="!">
        <link rel="icon" type="image/png" href="./files/sai/logo_sai.png"/>
        ${css}
        ${js}
        <style>
            .sai_menu li a.active, #menu_start.active{
                background-color: #007bff!important;
                color: black;
            }
        </style>
        <style>
            .divider-vertical {
                height: parent;
                margin: 0;
                overflow: hidden;
                border-left: 1px solid #e9ecef;
            }
        </style>
        <style>
        table.tablesorter thead tr th.tablesorter-headerAsc:after,
table.tablesorter thead tr th.tablesorter-headerDesc:after,
table.tablesorter thead tr th.tablesorter-header:after {
    float: right;
    font-family: FontAwesome;
}
table.tablesorter thead tr th.tablesorter-header:after {
  content: "\f0dc";
}
table.tablesorter thead tr th.tablesorter-headerAsc:after {
  content: "\f0de";
}
table.tablesorter thead tr th.tablesorter-headerDesc:after {
  content: "\f0dd";
}
.tablesorter-header-inner{ float: left;}
</style>
<style>
    .sai_border_left{
        border-left: #dee2e6 1px solid;
    }
</style>
    </head>
    <body>
        <div class="container-fluid"> 
            <div class="row">
                <div class="col-md-12 sai_margin_left_off sai_padding_left_off sai_padding_right_off"> 
                    <nav class="navbar navbar-expand-lg navbar-light bg-light sai_margin_bottom_off sai_padding_off">
                        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#menu-collapse" aria-controls="menu-collapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            <!--<span style="font-weight: bold; font-size: large;">&nbsp;DEMOCRACY</span>-->
                        </button>
                        ${menu_start}
                        <div class="collapse navbar-collapse navHeaderCollapse sai_margin_left_off sai_padding_left_off" id="menu-collapse">
                            <ul class="navbar-nav sai_menu">
                                ${menu_left}
                            </ul>
                            <ul class="navbar-nav sai_menu ml-auto">
                                <li class="divider-vertical"></li>
                                <li class="dropdown-divider"></li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle " href="#" id="languageDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span class="d-lg-none" style="padding-left: 15px;"></span>
                                        <i class="fa fa-language"></i>
                                        <span class="d-lg-none">&nbsp;&nbsp;Language</span>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="languageDropdown">
                                        ${menu_languages}
                                    </div>
                                </li>
                                <li class="divider-vertical"></li>
                                <li class="dropdown-divider"></li>
                                ${menu_right}
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>    
            <div class="row">
                <div id="content" class="col-12"></div>
            </div>
            <div class="row">
                <div class="col-12 sai_padding_off">
                    <hr class="sai_margin_off">
                    <div id="footer">${sai_copyright}</div>
                </div>
            </div>
        </div>
    </body>
</html>