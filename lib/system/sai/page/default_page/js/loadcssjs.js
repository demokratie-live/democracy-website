function loadJS(jssrc) {    
    if(jssrc){
        var snode = document.createElement('script');  
        snode.setAttribute('type','text/javascript');  
        snode.setAttribute('src',jssrc);  
        document.getElementsByTagName('head')[0].appendChild(snode);  
    }
}  

function loadCSS(csssrc) {  
    if(csssrc){
        var snode = document.createElement('link');  
        snode.setAttribute('type','text/css');  
        snode.setAttribute('rel', 'stylesheet');
        snode.setAttribute('href',csssrc);  
        document.getElementsByTagName('head')[0].appendChild(snode);  
    }
}