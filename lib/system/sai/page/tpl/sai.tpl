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
                <div class="navbar navbar-default navbar-fixed-top">
                    <div class="navbar-inner">
                        <ul class="nav navbar-nav">
                            <a id="sai_logo" class="brand-logo" href="#!start">
                                <img src="./sai.php?call=files&amp;cat=saistart_sys_sai&amp;id=logo.png" height="24" width="24"/>
                            </a>
                            <a id="sai_brand" class="navbar-brand" >SAI</a>
                            ${menu_start}
                            ${menu_sys}
                        </ul>
                    </div>
                </div> 
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