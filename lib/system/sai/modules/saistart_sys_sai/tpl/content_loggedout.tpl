<div class="row">
    <div class="col-12 sai_padding_off bg-primary sai_padding_10">
        <h4 class="sai_margin_off" style="float:left;">&nbsp;<span class="fa fa-home" aria-hidden="true"></span>&nbsp;&nbsp;${sai_start_welcome}</h4>
        <div id="sai_datetime" class="" style="float:right;">Week of the year: <font style="color: orange;">${week_number}</font>, ${date}</div>
    </div>
    <div class="col-md-2 sai_padding_off">
        <ul class="nav bg-light flex-column" id="tabs_config">
            <li class="nav-item"><a class="nav-link active" href="#!start">Login</a></li>
            <li class="nav-item"><a class="nav-link" href="#!login(register)">Register</a></li>
            <li class="nav-item"><a class="nav-link" href="#!login(resetpassword)">Reset Password</a></li>
        </ul>
    </div>
    <div class="col-md-10 sai_padding_off sai_border_left">
        <div class="row sai_margin_off">
            <div class="col-md-4"></div>
            <div class="col-md-4">
                <div class="card sai_margin_20">
                    <div class="card-header">${basic_text_login}</div>
                    <div class="card-body">
                        <form class="textbox" style="" id="login_form">
                            <div class="input-group">
                                <div class="controls w-100">
                                    <input  type="text"
                                            style="margin-bottom: 15px;"
                                            id="bt_login_user"
                                            class="form-control"
                                            placeholder="${basic_placeholder_username}"
                                            minlength="3" data-validation-minlength-message="${basic_username_short}"
                                            maxlength="32" data-validation-maxlength-message="${basic_username_long}"
                                            required data-validation-required-message="${basic_username_miss}"/>
                                </div>
                                <div class="controls w-100">
                                    <input  type="password"
                                            style="margin-bottom: 15px;"
                                            id="bt_login_password"
                                            class="form-control"
                                            placeholder="${basic_placeholder_password}"
                                            minlength="5" data-validation-minlength-message="${basic_password_short}"
                                            required data-validation-required-message="${basic_password_miss}"/>
                                </div>
                                <div class="w-100">
                                    <button class="btn-sm btn btn-primary" style="height: 32px; font-size: 13px;" type="submit" id="login_submit">
                                        <span class="glyphicon glyphicon-log-in" aria-hidden="true"></span> ${basic_login}
                                    </button>
                                    <div class="help-block"></div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-md-4"></div>
        </div>
    </div>
</div>