<div style="width: 100%; margin-left: auto; margin-right: auto;">
    <progress max="100" value="${donation_percentage}" data-label="${donation_percentage}% von ${donation_value_goal}€ GESCHAFFT!"></progress>
    <div style="border-top: solid 3px #4494D3; margin-top: 5px; background-color: #f6f6f6; text-align: center; padding-bottom: 15px; padding-top: 15px;">
        <span style="display:block;  font-weight: bold;">
            <span style="font-size: larger; color: #333">${donation_value}€ von ${donation_value_goal}€</span>
        </span>
        <span style="display:block; font-size: medium; font-weight: normal; color: #6a666b;">(min. Finanzierungsziel/Monat)</span>
    </div>
    <table class="donate-details">
        <tbody class="table-body">
            ${donation_data}
            <tr>
                <td colspan="3" style="font-size: 12px;">
                    * Diese Darstellung kann nur monatliche Spenden (Daueraufträge) berücksichtigen.
                </td>
            </tr>
        </tbody>
    </table>
    <!-- Button trigger modal -->
    <input type="image" src="./files/images/PayPal-Donate-Button-Transparent.png" border="0" name="submit" alt="Jetzt einfach, schnell und sicher online bezahlen – mit PayPal." style="width: 50%; margin-top: 35px;" data-toggle="modal" data-target="#DEMOCRACYPatenschaft">

    <!-- Modal -->
    <div class="modal fade" id="DEMOCRACYPatenschaft" tabindex="-1" role="dialog" aria-labelledby="DEMOCRACY Patenschaft" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content" style="padding: 5px;">
                <div class="modal-body" style="text-align: left;">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <div class="edosz" style="font-size: 50px; float: left;">DEMOCRACY</div>
                    <div style="font-size: 30px; float: left; font-weight: bold; padding-top: 20px;">&nbsp;Patenschaft</div>
                    <div style="clear: both;"></div>            
                    <div class="row">
                        <div class="col-12">
                            Deine regelmäßige Unterstützung hilft uns, die laufenden Kosten zu decken und gibt uns Planungssicherheit für die Zukunft des Projekts.<br>
                            <br>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            Damit deine <p style="color: #6eacdc; font-weight: bold; display: inline">Spende zu 100 Prozent wirksam</p> wird und für dich jederzeit kontrollierbar ist, empfehlen wir Dir einen <p style="color: #6eacdc; font-weight: bold; display: inline">Dauerauftrag á Konto</p> einzurichten.<br>
                            <br>
                            <h6><b>Dauerauftrag via Bankverbindung</b></h6>
                            <div class="row">
                                <div class="col-4">
                                    <b>Kontoinhaber</b>
                                </div>
                                <div class="col-8">
                                    DEMOCRACY Deutschland e.V.
                                </div>
                                <div class="col-4">
                                    <b>IBAN</b>
                                </div>
                                <div class="col-8">
                                    DE33 5003 1000 1049 7560 00
                                </div>
                                <div class="col-4">
                                    <b>BIC</b>
                                </div>
                                <div class="col-8">
                                    TRODDEF1
                                </div>
                                <br><br>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <h6><b>Dauerauftrag via PayPal</b></h6>
                            1,5% Deines Spendenbetrags + 0,35 EUR pro Transaktion verbeliebn bei PayPal.<br>
                            <br>
                            Bitte bedenke, dass von einer monatlichen 1€-Spende insofern nur 0,63 EUR bei uns ankommen.<br>
                            <br>
                            <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=contact@democracy-deutschland.de&lc=DE&no_note=0&cn=&currency_code=EUR&bn=PP-DonationsBF:btn_donateCC_LG.gif:NonHosted" target="_blank"><b>Weiter zu PayPal</b></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        var updateProgress = function () {
            var trs = document.querySelectorAll('.donate-details tr');
            for (var i=0; i<trs.length; i++) {
                var tr = trs[i];
                var pr = tr.querySelector('.donate-detail-progress');
                if(pr){
                    pr.style.height = tr.clientHeight-1 + 'px';
                    pr.style.top = tr.offsetTop + 'px';
                }
            }
        }
        updateProgress();
        window.addEventListener("resize", updateProgress);
    </script>
</div>