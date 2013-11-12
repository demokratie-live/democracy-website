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
      <div id="sai_navbar" class="navbar">
         <div class="navbar-inner">
           <div class="brand-logo">
             <img src="${navimg}" height="24" width="24">
           </div>
           <a class="brand" href="#">developer</a>
           <ul class="nav">
                ${menu_sys}
           </ul>
         </div>
     </div>
    
    <div id="project_navbar" style="width:210px; float:left;">
       <div class="navbar-inner">          
           <ul class="nav nav-list">                
               ${menu_proj}
           </ul>
       </div>
    </div>    
    <div id="content" style="float: left; width: 1000px;">
        <div id="content-wrapper" style="clear: both; overflow: auto; width: 100%; min-width:500px;"></div>
        <hr>
        <div class="footer"><p>${copyright}</p></div>
     </div>
    </body>
</html>
