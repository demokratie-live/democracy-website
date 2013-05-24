function loadJS(jssrc) {    
    if(jssrc){
        $.getScript(jssrc).done(function(script, textStatus) {
            console.log('Script: '+jssrc+' - '+textStatus );
            script_loaded();
            })        
    }
}  

function loadCSS(csssrc) {      
    if(csssrc){        
        var snode = document.createElement('link');  
        snode.setAttribute('type','text/css');  
        snode.setAttribute('rel', 'stylesheet');
        snode.setAttribute('href',csssrc);  
        document.getElementsByTagName('head')[0].appendChild(snode);  
        console.log('Css: '+csssrc+' loaded.');
    }
}