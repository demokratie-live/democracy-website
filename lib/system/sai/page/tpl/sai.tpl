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
        <nav id="sys_autocollapse" class="navbar navbar-default" role="navigation">
            <div class="container-fluid">  
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-1">
                      <span class="sr-only">Toggle navigation</span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                    </button>
                    <a id="sai_brand" class="navbar-brand" href="#!start">SAI</a>
                </div>
                 <!-- Collect the nav links, forms, and other content for toggling -->
                <div id="navbar-collapse-1" class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        ${menu_start}
                        ${menu_sys}
                    </ul>
                </div><!-- /.navbar-collapse -->
            </div>  
        </nav>
        <div class="sai_wrapper">
            <div class="container-fluid">
                <div class="clearfix">
                    <div class="col-md-2">
                        <ul class="nav nav-tabs nav-stacked sai_project_modules">                
                            ${menu_proj}
                        </ul>
                    </div>
                    <div class="col-md-10">
                        <div id="content-wrapper">
                            <div id="container">
                                <div class="clearfix">
                                    <div id="content">
                                    </div>
                                </div>
                                <div class="clearfix">
                                    <hr>
                                    <div id="footer"><p>${sai_copyright}</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>