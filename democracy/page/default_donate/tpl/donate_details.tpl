<div style="width: 100%; margin-left: auto; margin-right: auto;">
    <progress max="100" value="${donation_percentage}" data-label="${donation_percentage}% von 10.000€ GESCHAFFT!"></progress>
    <div style="border-top: solid 3px #4494D3; margin-top: 5px; background-color: #f6f6f6; text-align: center; padding-bottom: 15px; padding-top: 15px;">
        <span style="display:block;  font-weight: bold;">
            <span style="font-size: larger; color: #333">${donation_value}€ von ${donation_value_goal}€</span>
        </span>
        <span style="display:block; font-size: medium; font-weight: normal; color: #6a666b;">(min. Finanzierungsziel/Monat)</span>
    </div>
    <table class="donate-details">
        <tbody class="table-body">
            ${donation_data}
        </tbody>
    </table>
    <div id="paypal-button" style="padding-top: 35px;">
        <a href="" target="_blank">
            <img src="./files/images/PayPal-Donate-Button-Transparent.png" alt="Spenden mit Paypal" style="width: 50%"/>
        </a>
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