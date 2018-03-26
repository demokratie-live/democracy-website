<div class="container">
    <div class="wthree-heading" style="padding-top: 4em;"> 
        <h3 id="h4werte">Spendenfinanzierung</h3>
    </div>
    <div class="row" style="margin-top: 2em; margin-left: 15px; margin-right: 15px; padding-top: 30px;">
        <div class="col-md-5 col-xs-12">
            <div class="row agile-services-left">
                <div style="width: 360px; margin-left: auto; margin-right: auto;">
                    <style>
                        progress {
                            height: 2.5em;
                            width: 100%;
                            -webkit-appearance: none;
                            border: none;

                            /* Set the progressbar to relative */
                            position:relative;
                        }
                        progress:before {
                            content: attr(data-label);
                            font-size: 0.8em;
                            font-weight: bold;
                            line-height: 3.3em;
                            padding-left: 15px;
                            vertical-align: central;

                            /*Position text over the progress bar */
                            position:absolute;
                            left:0;
                            right:0;
                        }
                        progress::-webkit-progress-bar {
                            background-color: #f6f6f6;
                        }
                        progress::-webkit-progress-value {
                            background-color: #7cc4ff;
                            background: repeating-linear-gradient(
                                45deg,
                                #3D87C1,
                                #3D87C1 10px,
                                #4494D3 10px,
                                #4494D3 20px
                              );
                        }
                        progress::-moz-progress-bar {
                            background-color: #f6f6f6;
                        }
                    </style>
                    <progress max="100" value="${donation_percentage}" data-label="${donation_percentage}% von 10.000€ GESCHAFFT!"></progress>
                    <div style="border-top: solid 3px #4494D3; margin-top: 5px; background-color: #f6f6f6; text-align: center;">
                        <span style="display:block;  font-weight: bold; padding-top: 20px;">
                            <span style="font-size: x-large; color: #333">${donation_paten} VON 2.000</span>
                        </span>
                        <span style="display:block; font-size: large; font-weight: normal; color: #6a666b; padding-bottom: 15px;">PATENSCHAFTEN ERREICHT!</span>
                        <hr>
                        <span style="display:block;  font-weight: bold; padding-top: 15px;">
                            <span style="font-size: larger; color: #333">${donation_value}€ von 10.000€</span>
                        </span>
                        <span style="display:block; font-size: medium; font-weight: normal; color: #6a666b;">(min. Finanzierungsziel/Monat)</span>
                        <span style="display:block; font-size: small; font-weight: normal; color: #6a666b;">Stand: ${donation_date}</span>
                        <img style="padding: 35px; height: 200px;" src="./files/images/Bubble.png" alt="DEMOCRACY Logo"/>
                        <!--<div style="background-color: #4494D3; font-size: x-large; height: 2.0em; line-height: 2.0em; cursor: pointer;" onclick="$('html,body').animate({scrollTop: $('#donate').offset().top},'slow');">
                            <i class="fa fa-heart"></i>&nbsp;JETZT PATE WERDEN!
                        </div>-->
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-7 col-xs-12" style="text-align: justify; line-height: 1.48em;">
            <b>DEMOCRACY ist eine gemeinnützige App</b>, das heißt von Menschen, für Menschen, um unsere Politik besser und bürgernaher zu machen.<br>
            <br>
            Dafür <b>verbindet</b> die Plattform <b>Vorteile für die Bürger*Innen</b> (Transparenz und Mitwirkungsmöglichkeiten im politischen Willensbildungsprozess innerhalb der Legislaturperiode) <b>mit Vorteilen für die Politiker*Innen</b> (die Erwartungen und Wünsche der Bürger*Innen besser sachbezogen einbeziehen zu können).<br>
            <br>
            Und gerade weil so eine große Idee zur Umsetzung in diese Welt auch ein großes Portemonnaie braucht, ist unser <b>Joker die gemeinschaftliche Finanzierung</b>.<br>
            <br>
            Nach der Prototypsfinanzierung durch das initiale Crowdfunding im Herbst 2017, kannst du die Initiative als Pate jetzt regelmäßig unterstützen oder einmalig spenden.<br>
            <br>
            Pate kannst du schon ab 1 € monatlich werden. Deine Unterstützung lässt sich jederzeit beenden.
            <br>
            <br>
            <div style="display: inline; width: 300px; background-color: #96c346; font-size: large; height: 2.0em; line-height: 2.0em; cursor: pointer; text-align: center; padding: 15px;" onclick="$('html,body').animate({scrollTop: $('#donate').offset().top},'slow');">
                <i class="fa fa-heart" style="color:red;"></i>&nbsp;JETZT PATE WERDEN!
            </div>
            <div style="display: inline; width: 250px; box-shadow:0px 0px 0px 1px black inset; font-size: large; height: 1.95em; line-height: 2.0em; cursor: pointer; text-align: center; padding: 15px; margin-left: 15px;" onclick="$('html,body').animate({scrollTop: $('#donate').offset().top},'slow');">
                <i class="fa fa-hand-o-right"></i>&nbsp;Einmalig spenden
            </div>
        </div>
    </div>
</div>
<style>
    @media only screen and (max-width: 767px) {
        #hcorrection{
            height: 335px;
            overflow: hidden;
        }
    }
    @media only screen and (min-width: 768px){
        #hcorrection{
            height: 190px;
            overflow: hidden;
        }
    }
</style>
<!-- testimonial -->
<div class="testimonial jarallax" style="margin-top: 50px;">
    <div class="container" id="hcorrection">
        <div class="agileits-w3layouts-info">
            <div class="testimonial-grid">
                <div class="slider">
                    <div class="callbacks_container">
                        <ul class="rslides" id="slider3">${testimonials}</ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="container">
    <div class="row" style="margin-left: 15px; margin-right: 15px; padding-top: 50px;">
        <div class="col-md-6" style="line-height: 1.7em;">
            <br>
            Egal ob ein regelmäßiger Betrag oder eine einmalige Spende: Deine Spende hilft uns, DEMOCRACY zu dem machen, was es sein muss, um eine Breitenwirkung zu erzielen.<br>
            <br>
            <b>SPENDENKONTO FÜR DAUERAUFTRAG ODER ÜBERWEISUNG</b><br>
            <br>
            DEMOCRACY Deutschland e.V.<br>
            IBAN: DE33 5003 1000 1049 7560 00<br>
            BIC: TRODDEF1<br>
            <br>
            <b>HINWEIS ZU SPENDENQUITTUNGEN BEI ÜBERWEISUNG AUF UNSER BANKKONTO:</b><br>
            <br>
            Für den DEMOCRACY Deutschland e.V. ist mit Bescheid des Finanzamt Göttingen vom 23.08.2017 die Einhaltung der satzungsmäigen Voraussetzungen nach den §§ 51, 59, 60 und 61 AO festgestellt worden. Deine Spenden sind daher steuerlich abzugsfähig. Wenn Du eine separate Zuwendungsbestätigung benötigst, schreib uns bitte eine Email oder gib in Deiner Überweisung deine Wohnadresse an.Für Spenden unter 200€ jährlich genügt der <a href="./files/download/Vereinfachter%20Zuwendungsnachweis.pdf" target="blank">Vereinfachte Zuwendungsnachweis</a>.<br>
            <br>
            <b>GROßSPENDER UND ANDERE FORMEN DER UNTERSTÜTZUNG</b><br>
            <br>
            Dein Unternehmen will uns mit einer größeren Summe unterstützen oder Du willst uns auf andere Art helfen, dann schreib uns doch einfach eine <a href="mailto:contact@democracy-deutschland.de" target="blank">E-Mail</a><br>
            <br>
            <b>SPENDEN ÜBER BETTERPLACE</b><br>
            <br>
            2.5 % der Spende verbleiben bei Betterplace.org
            <br>
            <br>
        </div>
        <div class="col-md-6" id="donate">
            <script type="text/javascript">
                /* Configure at https://www.betterplace.org/de/projects/61376-democracy-demokratie_live/manage/iframe_donation_form/new */
                var _bp_iframe = _bp_iframe || {};
                _bp_iframe.project_id = 61376; /* REQUIRED */
                _bp_iframe.lang = 'de'; /* Language of the form */
                _bp_iframe.width = 600; /* Custom iframe-tag-width, integer */
                _bp_iframe.color = '4494D3'; /* Button and banderole color, hex without "#" */
                _bp_iframe.background_color = 'ffffff'; /* Background-color, hex without "#" */
                _bp_iframe.default_amount = 10; /* Donation-amount, integer 1-99 */
                _bp_iframe.default_data_transfer_accepted = true; /* true (default), false */
                _bp_iframe.recurring_interval = 'monthly'; /* Interval for recurring donations, string out of
                ["single", "monthly", "quarter_yearly", "half_yearly", "yearly"] */
                _bp_iframe.bottom_logo = true;
                (function() {
                var bp = document.createElement('script'); bp.type = 'text/javascript'; bp.async = true;
                bp.src = 'https://asset1.betterplace.org/assets/load_donation_iframe.js';
                var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(bp, s);
                })();
            </script>
            <div id="betterplace_donation_iframe" style="background: transparent url('https://www.betterplace.org/assets/new_spinner.gif') 275px 20px no-repeat;">
                <strong>
                    <a href="https://www.betterplace.org/de/projects/61376-democracy-demokratie_live/donations/new">Jetzt Spenden für „DEMOCRACY | Demokratie_live“ bei unserem Partner betterplace.org</a>
                </strong>
            </div>
        </div>
    </div>
</div>
<br><br>