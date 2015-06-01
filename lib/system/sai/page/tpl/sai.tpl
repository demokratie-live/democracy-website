<!DOCTYPE html>
<html>
    <head>
        <title>${sai_title}</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="fragment" content="!start">
        <link rel="icon" type="image/png" href="./sai.php?call=files&amp;cat=saistart_sys_sai&amp;id=logo.png"/>
        ${css}
        ${js}
    </head>
    <body>
        <div class="container"> 
            <div class="row">
                <div class="col-md-2">
                    <nav id="sys_autocollapse_" class="navbar sai_margin_bottom_off" role="navigation">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navHeaderCollapse">
                              <span class="icon-bar"></span>
                              <span class="icon-bar"></span>
                              <span class="icon-bar"></span>
                            </button>
                        </div>
                    </nav>    
                </div>  
                <!-- div class="col-md-10 sai_menu_first sai_left_divider" -->
                    <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="col-md-10 sai_margin_left_off sai_padding_left_off sai_padding_right_off"> 
                    <nav id="sys_autocollapse" class="navbar navbar-default sai_navbar_top sai_margin_bottom_off" role="navigation">
                        <div class="collapse navbar-collapse navHeaderCollapse sai_margin_left_off sai_padding_left_off">
                            <ul class="nav navbar-nav sai_menu_first">
                                   ${menu_start}
                                   ${menu_sys}
                            </ul>
                        </div><!-- /.navbar-collapse -->
                    </nav>
                </div>
            </div>    
            <div class="row">
                <div class="col-md-2">
                    <ul class="nav nav-tabs nav-stacked sai_project_modules">                
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