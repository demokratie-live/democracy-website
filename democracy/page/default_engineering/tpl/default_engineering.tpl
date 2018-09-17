<div class="background-white">
    <div class="container main-container">
        <div class="row">
            <div class="col-12">
                <h1>Roadmap</h1>
                <h4 style="padding-top:30px;">Unsere Entwicklung ist <a href="https://github.com/demokratie-live/" target="_blank">Open Source</a>, der Quellcode frei und offen</h4>
            </div>
            <div class="col-12">
                <style>
                    .badges2{
                        text-align: center;
                        padding-left: 15px;
                    }
                    .table i{
                        font-size: 25px;
                    }
                    .table tr td:first-child, .table tr th:first-child{
                        text-align: left;
                    }
                    .table-hover tbody tr:hover td, .table-hover tbody tr:hover th {
                        background-color: #D0E4F4;
                    }
                    #finalblock{
                        background-color: #fff;
                        padding-top: 35px;
                    }
                    #protodivider{
                        margin-top: 50px;
                    }
                    .rotate{
                        font-size: 14px;
                    }
                    @media (min-width: 992px){
                        #protodivider{
                            margin-top: -30px;
                        }
                        .badges2{
                            text-align: left;
                        }
                    }
                    @media (max-width: 767px){
                        .rotate{
                            word-break: keep-all;
                            font-size: 12px;
                        }
                        .table tr, .table th.rotate{
                            padding: 3px !important;
                        }
                        #finalblock{
                            padding-bottom: 50px;
                        }
                    }
                    .rmicon-red {     color: rgb(196, 48, 43); }
                    .rmicon-green {   color: rgb(38, 183, 39) }
                    .rmicon-blue {    color: rgb(68,148,211); }
                    .rmicon-grey {    color: rgb(115,115,115); }
                    .rmicon-black {   color: rgb(0,0,0); }
                </style>
                <table class="table table-striped table-bordered table-hover" style="margin-top: 50px; word-break: break-all;">
                    <thead>
                        <tr>
                            <th scope="col" style="font-size: 20px; vertical-align: top;">Release</th>
                            <th scope="col" class="rotate">
                                Closed Beta
                                <div class="rmicon-green">30.04.18</div>
                            </th>
                            <th scope="col" class="rotate">
                                Public MVP
                                <div class="rmicon-red">01.10.18</div>
                            </th>
                            <th scope="col" class="rotate">
                                Post MVP
                                <div class="rmicon-red">&nbsp;</div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        ${goals}
                    </tbody>
                  </table>
            </div>
            <div class="col-12">
                <img src="./files/images/democracy-bar.png" class="divider" style="padding-top: 50px;"/>
            </div>
            <div class="col-12" style="padding-top: 50px;">
                <h1>DEMOCRACY testen</h1
            </div>
            <div class="row" style="padding-top: 50px;">
                <div class="col-lg-1"></div>
                <div class="col-lg-4">
                    <img src="./files/images/01FemaleMirror@3x.png" style="width: 100%; padding-top: 50px;"/>
                </div>
                <div class="col-lg-2"></div>
                <div class="col-lg-4" style="padding-top: 60px;">
                    <img src="./files/images/circle@3x.png" style="width: 75px;"/>
                    <div class="cite">
                        <div class="cite-icon">
                            <img src="./files/images/quotes@3x.png" style="width: 60px; padding-left: 12px;"/>
                        </div>
                        <div class="cite-content" style="text-align: left;">Prototyping ist der Prozess der Annäherung an ein Produkt</div>
                    </div>
                    <div class="badges2">
                        <div class="row">
                            <div class="col-md-6">
                                <span>MVP</span><br>
                                <a class="badge-link2 icon-app-store-outline2" href="${link_appstore}" style="margin-top: -5px;"> </a>
                            </div>
                            <div id="secondbadge" class="col-md-6">
                                <span class="d-none d-md-block">MVP</span>
                                <a class="badge-link2 icon-google-play-outline2" href="${link_playstore}" style="margin-top: -5px;"> </a>
                            </div>
                            <div class="col-12">
                                <a class="btn-democracy" href="${link_browserversion}">
                                    <div style="width: auto; border: 0;">Hier gehts zur Browserversion</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-1"></div>
            </div>
            <div class="col-12">
                <img src="./files/images/democracy-bar.png" class="divider" id="protodivider"/>
            </div>
            <form id="bug-form">
                <div class="col-12" style="padding-top:50px;">
                    <h1>Bugreports</h1>
                    <h5 style="padding-top:30px;">Du hast einen Fehler gefunden oder ein anderes Problem im MVP festgestellt? Hilf uns diese(n) zu beheben –<br>
                        mit einem qualifizierten Feedback. Dazu füllst du am Besten das untenstehende Formular aus.</h5>
                    <div class="row" style="padding-top:50px;">
                        <div class="col-lg-12">
                            <div class="row" style="padding-top: 5px; padding-bottom: 5px;">
                                <div class="col-lg-6">
                                    <input id="bug-name" type="text" placeholder="Dein Name*" style="width:100%;"/>
                                </div>
                                <div class="col-lg-6">
                                    <input id="bug-email" type="email" placeholder="E-Mail-Adresse für Rückfragen*" style="width:100%;"/>
                                </div>
                            </div>
                            <div class="row" style="padding-top: 5px; padding-bottom: 5px;">
                                <div class="col-lg-6">
                                    <input id="bug-title" type="text" placeholder="Betreff/Titel" style="width:100%;"/>
                                </div>
                                <div class="col-lg-3">
                                    <input id="bug-platform" type="text" placeholder="Plattform (iOS/Android)*" style="width:100%;"/>
                                </div>
                                <div class="col-lg-3">
                                    <input id="bug-version" type="text" placeholder="Version*" style="width:100%;"/>
                                </div>
                            </div>
                            <div class="row" style="padding-top: 5px; padding-bottom: 5px;">
                                <div class="col-lg-12">
                                    <textarea id="bug-text" placeholder="Bitte beschreibe den Fehler möglichst genau in wenigen Sätzen; beziehe Dich dabei auf Screenshots und markiere die fehlerhaften Bereiche*" style="width:100%; min-height:300px; border: rgb(151,151,151) 1px solid; border-bottom: rgb(151,151,151) 1px dashed;"></textarea>
                                    <div id="bug-file-drop-zone" style="padding: 3px; margin-top: -7px; text-align: left; border: rgb(151,151,151) 1px solid; border-top: 0;">Dateien anhängen durch drag & drop oder <a id="bug-select-files" href="">auswählen</a>.</div>
                                    <input type="file" name="files[]" id="bug-files" multiple style="display: none;">
                                    <div class="js-upload-finished">
                                        <div id="bug-progress" class="progress" style="display: none; border-radius: 0; border-left: rgb(151,151,151) 1px solid; border-right: rgb(151,151,151) 1px solid;">
                                            <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"></div>
                                        </div>
                                        <style>
                                            #bug-file-list{
                                                display: none; 
                                                border-radius: 0;
                                                border: rgb(151,151,151) 1px solid;
                                                border-top: 0;
                                            }
                                            #bug-file-list a{
                                                height: 15px; line-height: 2px; border-radius: 0;
                                            }
                                            #bug-file-list a span{
                                                margin-top: -9px;
                                            }
                                            #bug-file-list a span.hidden{
                                                display: none;
                                            }
                                        </style>
                                        <div id="bug-file-list" class="list-group"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="row" style="padding-top: 5px; padding-bottom: 5px;">
                                <div class="col-lg-9"></div>
                                <div class="col-lg-3">
                                    <a id="bug-send" class="btn-democracy">
                                        <div style="border:0;">Bericht senden</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div class="col-12" id="help">
                <img src="./files/images/democracy-bar.png" class="divider" style="padding-top: 50px;"/>
            </div>
            <div class="col-12" style="padding-top:50px;">
                <h1>Mithelfen</h1>
                <h5 style="padding-top:30px;">Du möchtest Demokratie mitgestalten?<br>
                    Werde Teil des Teams.</h5>
                <style>
                    #laptop{
                        display: flex;
                        text-align: left;
                    }
                    #laptop div input{
                        margin-top: 5px;
                    }
                    @media (min-width:992px){
                        #laptop{
                            margin-left: 120px;
                            margin-right: 120px;
                            margin-top: 40px;
                            padding-bottom: 1%;
                            margin-bottom: 12.5%;
                            background-color: #fff;
                        }
                    }
                </style>
                <div class="row" style="padding-top: 50px;">
                    <img src="./files/images/macbookSpaceGrey@3x.png" class="d-none d-lg-block" style="width:100%; position: absolute;"/>
                    <div class="col-12">
                        <form id="vol-form">
                            <div class="row" id="laptop">
                                <div class="col-lg-6" style="background-color: #fff; padding-top: 35px; vertical-align: top;">
                                    <input id="vol-name" type="text" placeholder="Dein Name*" style="width:100%; margin-top: 0;"/>
                                    <input id="vol-email" type="email" placeholder="Deine E-Mail-Adresse*" style="width:100%;"/>
                                    <br><br>
                                    <h5>Ich möchte DEMOCRACY mitgestalten als</h5>
                                    <input id="vol-uiux" type="checkbox">&nbsp;UI/UX-Designer<br>
                                    <input id="vol-frontend" type="checkbox">&nbsp;Front-End-Developer<br>
                                    <input id="vol-backend" type="checkbox">&nbsp;Back-End-Developer<br>
                                    <input id="vol-kryptologe" type="checkbox">&nbsp;Kryptograph<br>
                                    <input id="vol-marketing" type="checkbox">&nbsp;Marketingstrateg<br>
                                    <input id="vol-redakteur" type="checkbox">&nbsp;Redakteur<br>
                                    <input id="vol-botschafter" type="checkbox">&nbsp;Botschafter<br>
                                    <br>
                                    <h5>Ich möchte ein App-Feature vorschlagen</h5>
                                    <input id="vol-feature" type="checkbox">&nbsp;Feature-Vorschlag<br>
                                </div>
                                <div class="col-lg-6" id="finalblock">
                                    <textarea id="vol-text" placeholder="Erzähle uns über Deine Erfahrungen/Idee(n)*" style="width:100%; min-height:400px;"></textarea>
                                    <a class="btn-democracy" id="vol-send">
                                        <div style="border:0;">Als Freiwillige/r melden </div>
                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>