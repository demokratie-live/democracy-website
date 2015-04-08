<!DOCTYPE html>
<html>
    <head>
        <title>${title}</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="fragment" content="!start">
        <link rel="icon" type="image/png" href="./api.php?call=files&amp;cat=saistart_sys_sai&amp;id=logo.png"/>
        ${css}
        ${js}
    </head>
    <body>
        <div id="sai_navbar" class="navbar navbar-fixed-top">
            <div class="navbar-inner">
                <ul class="nav">
                    <a id="sai_logo" class="brand-logo" href="#!start">
                        <img src="./api.php?call=files&amp;cat=saistart_sys_sai&amp;id=logo.png" height="24" width="24"/>
                    </a>
                    <a id="sai_brand" class="brand" >SAI</a>
                    ${menu_start}
                    ${menu_sys}
                </ul>
            </div>
        </div>                
        <div id="project_navbar">
            <ul class="nav nav-tabs nav-stacked sai_project_modules">                
                ${menu_proj}
            </ul>
        </div>
        <div id="content-wrapper">
            <div id="content"></div>
            <hr>
            <div id="footer"><p>${copyright}</p></div>
        </div>
    </body>
</html>