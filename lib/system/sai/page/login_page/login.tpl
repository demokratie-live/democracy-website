<!DOCTYPE html>
<html>
    <head>
        <title>da_sense | Developer Center</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">        
        <link rel="icon" type="image/png" href="${navimg}" />
        ${css}
        ${js}
    </head>    
    <body>
        <div id="developer-navbar" class="navbar">
            <div class="navbar-inner">
                <div class="brand-logo">
                    <img src="${navimg}" height="24" width="24">
                </div>
                <a class="brand" href="#">developer</a>                
            </div>
        </div>

        <div id="content">
            <div id="content-wrapper">
                Not logged in or missing rights. Please login a valid account!

                <form id='login' action='#' method='post' accept-charset='UTF-8'>
                    <fieldset>
                        <legend>Login</legend>
                        <input type='hidden' name='submitted' id='submitted' value='1'/>

                        <label for='username' >UserName:</label>
                        <input type='text' name='username' id='username'  maxlength="50" />

                        <label for='password' >Password:</label>
                        <input type='password' name='password' id='password' maxlength="50" />

                        <input type='submit' name='Submit' value='Submit' />
                    </fieldset>
                </form>
            </div>
            <hr>
            <div class="footer">
                <p>&copy; <a href="http://www.da-sense.de" target="_blank">da_sense</a>, TU Darmstadt 2013</p>
            </div>
        </div>        
    </body>
</html>