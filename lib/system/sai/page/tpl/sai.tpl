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
        <div class="container-fluid"> 
            <nav id="sys_autocollapse" class="navbar navbar-default sai_navbar_top" role="navigation">
                    <div class="col-md-2">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navHeaderCollapse">
                              <span class="icon-bar"></span>
                              <span class="icon-bar"></span>
                              <span class="icon-bar"></span>
                            </button>
                            <a id="sai_brand" class="navbar-brand" href="#!start">SAI</a>
                        </div>
                    </div>  
                    <!-- div class="col-md-10 sai_menu_first sai_left_divider" -->
                        <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="col-md-10">    
                        <div class="collapse navbar-collapse navHeaderCollapse">
                            <ul class="nav navbar-nav sai_menu_first sai_left_divider">
                                   ${menu_start}
                                   ${menu_sys}
                            </ul>
                        </div><!-- /.navbar-collapse -->
                    </div>
            </nav>
            <div class="row">
                <div class="col-md-2">
                    <ul class="nav nav-tabs nav-stacked sai_project_modules">                
                        ${menu_proj}
                    </ul>
                </div>
                <div class="col-md-10 sai_left_divider">
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