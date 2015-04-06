<!DOCTYPE html>
<html>
    <head>
        <title>${title}</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="icon" type="image/png" href="${navimg}" />
        ${css}
        ${js}
    </head>
    <body>
        <div id="sai_navbar" class="navbar navbar-fixed-top" style="height:40px;">
            <div class="navbar-inner">
                <div class="brand-logo" style="padding-left: 10px;">
                    <img src="${navimg}" height="24" width="24"/>
                </div>
                <a class="brand" href="#" style="width: 159px;">SAI</a>
                ${lang_switcher}
                <ul class="nav">
                    ${menu_start}
                    ${menu_sys}
                </ul>                
            </div>
        </div>                
        <div id="project_navbar" style="width:224px; position: fixed; left: 0px; bottom: 0px; top: 38px;">
            <ul class="nav nav-tabs nav-stacked sai_project_modules">                
                ${menu_proj}
            </ul>       
        </div>    
        <div id="content-wrapper" style="overflow: auto; position: absolute; top: 40px; bottom: 0px; left: 224px; right: 0px; padding: 15px; min-width:1000px;">
            <div id="content" style="width:100%"></div>
            <hr>
            <div class="footer"><p>${copyright}</p></div>
        </div>
    </body>
</html>
