<div class="masthead">
    <h3 class="muted">Design. Simple. Fast. Reliable. Innovative.</h3>
    <h4 class="text-info">We write awesome Software using <a href="https://github.com/ulfgebhardt/system">SYSTEM</a> and <a href="http://getbootstrap.com/">Twitter Bootstrap.</a></h4>
</div>
<div id="myCarousel" class="carousel slide" style="margin-right: 300px;">    
    <div class="carousel-inner">        
        <div class="item active">
            <img class="carousel-img" src="./sai.php?call=files&cat=saistart_sys_sai&id=sai_loggedout_gallery_1.png" alt="">
            <div class="carousel-caption">
                <h4>Explore SAI yourself</h4>
                <p>It will enable your to use System as a multiverse of toolsets to support your Projects.</p>
            </div>
        </div>      
    </div>        
    <a class="carousel-control left" href="#myCarousel" data-slide="prev">&lsaquo;</a>
    <a class="carousel-control right" href="#myCarousel" data-slide="next">&rsaquo;</a>
</div>
<div class="well" id="login">
    <h2 class="muted">${basic_login}</h2>
    ${basic_text_login}
    <br/>
    <br/>
    <form class="textbox" style="" id="login_form">
        <div class="control-group">
            <div class="controls">
                <input  type="text"
                        size="30"
                        style="margin-bottom: 15px;"
                        id="bt_login_user"
                        placeholder="${basic_placeholder_username}"
                        minlength="3" data-validation-minlength-message="${sai_error_username_short}"
                        maxlength="16" data-validation-maxlength-message="${sai_error_username_long}"
                        required data-validation-required-message="${sai_error_username_miss}"/>
            </div>
            <div class="controls">
                <input  type="password"
                        size="30"
                        style="margin-bottom: 15px;"
                        id="bt_login_password"
                        placeholder="${basic_placeholder_password}"
                        minlength="5" data-validation-minlength-message="${sai_error_password_short}"
                        maxlength="16" data-validation-maxlength-message="${sai_error_password_long}"
                        required data-validation-required-message="${sai_error_password_miss}"/>
            </div>        
            <div class="help-block"></div>
            <input type="hidden" />
            <button class="btn-sm btn-primary" style="clear: left; height: 32px; font-size: 13px;"
                    type="submit"
                    id="login_submit">${basic_login}</button>
        </div>
    </form>
</div>