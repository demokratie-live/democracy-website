<!DOCTYPE html>
<html>
    <head>
        <title>${sai_title}</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="fragment" content="!">
        <link rel="icon" type="image/png" href="./files/saistart_sys_sai/logo_sai.png"/>
        ${css}
        ${js}
    </head>
    <body>
        <div class="container"> 
            <div class="row">
                <div class="col-md-2">
                     ${menu_languages}
                </div>  
                <!-- div class="col-md-10 sai_menu_first sai_left_divider" -->
                    <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="col-md-10 sai_margin_left_off sai_padding_left_off sai_padding_right_off"> 
                    <nav class="navbar navbar-default sai_margin_bottom_off">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle collapsed pull-left" data-toggle="collapse" data-target="#menu-collapse" aria-expanded="false" style="margin-left: 5px;">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            ${menu_start}
                        </div>
                        <div class="collapse navbar-collapse navHeaderCollapse sai_margin_left_off sai_padding_left_off" id="menu-collapse">
                            <ul class="nav navbar-nav sai_menu_first">
                                ${menu_sys}
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>    
            <div class="row">
                <div class="col-md-2" style="padding-top: 20px;">
                    <ul class="nav nav-pills nav-stacked ">                
                        ${menu_proj}
                    </ul>
                </div>
                <div class="col-md-10 sai_margin_left_off">
                    <div class="row">
                        <div id="content">
                        </div>
                    </div>
                    <div class="row">
                        <hr>
                        <div id="footer"><p>${sai_copyright}</p></div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>