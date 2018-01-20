<div class="single" style="background-color: #e8e8e8;">
    <div class="container">
        <div class="wthree-heading"><h3>FAQ</h3></div>
        <br><br>
        <div class="panel-group" id="accordion">
            ${questions}
            <div class="panel panel-default panel-faq">
                <div class="panel-heading">
                    <h4 class="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse_ask" class="faq_header">&nbsp;&nbsp;<i class="fa fa-question-circle" aria-hidden="true"></i>&nbsp;&nbsp;<b>Eine Frage stellen</b><i class="openarrow fa fa-angle-down" aria-hidden="true" style="${in_css} margin-right: 15px;"></i></a>
                    </h4>
                </div>
                <div id="collapse_ask" class="panel-collapse collapse ${in}">
                    <div class="panel-body" style="padding: 15px;">
                        <div class="row">
                            <div class="col-md-4">                               
                                <div class="form-group">
                                    <label for="fvorname">Vorname</label>
                                    <input id="fvorname" type="text" class="form-control"  name="fvorname"  placeholder="Vorname">
                                </div>
                            </div>
                            <div class="col-md-4">                                 
                                <div class="form-group">
                                    <label for="fnachname">Nachname</label>
                                    <input id="fnachname" type="text" class="form-control"  name="fnachname"  placeholder="Nachname">
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="femail">E-Mail</label>
                                    <input  id="femail" type="email" class="form-control"  name="femail" aria-describedby="emailHelp" placeholder="Email">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <hr>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label  for="exampleTextarea"> Frage:</label>
                                    <textarea class="form-control" name="text" id="exampleTextarea" rows="15"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div id="submitquestion" class="btn btn-primary" style="font-size: large;"><i class="fa fa-envelope"></i>&nbsp;&nbsp;Frage stellen</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
</div>