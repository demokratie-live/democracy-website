<div style="width: 100%; margin-left: auto; margin-right: auto;">
    <progress max="100" value="${donation_percentage}" data-label="${donation_percentage}% von 10.000€ GESCHAFFT!"></progress>
    <div style="border-top: solid 3px #4494D3; margin-top: 5px; background-color: #f6f6f6; text-align: center; padding-bottom: 15px; padding-top: 15px;">
        <span style="display:block;  font-weight: bold;">
            <span style="font-size: larger; color: #333">${donation_value}€ von ${donation_value_goal}€</span>
        </span>
        <span style="display:block; font-size: medium; font-weight: normal; color: #6a666b;">(min. Finanzierungsziel/Monat)</span>
    </div>
    <style>
        
    </style>
    <script>
        var updateProgress = function () {
    var trs = document.querySelectorAll('.table-body tr');
    for (var i=0; i<trs.length; i++) {
        var tr = trs[i];
        var pr = tr.querySelector('.progress');
        pr.style.width = (tr.dataset.progress)+'%';
        pr.style.height = tr.clientHeight + 'px';
    }
}
    //updateProgress();
    </script>
    <table class="donate-details">
        <tbody class="table-body">
            ${donation_data}
        </tbody>
    </table>
    <div id="paypal-button" style="padding-top: 50px;"></div>
    <script>
    paypal.Button.render({
      env: 'sandbox',
      client: {
        sandbox: 'demo_sandbox_client_id'
      },
      style: {
        size: 'large',
        tagline : false,
        fundingicons: true,
      },
      payment: function (data, actions) {
        return actions.payment.create({
          transactions: [{
            amount: {
              total: '0.00',
              currency: 'EUR'
            }
          }]
        });
      },
      onAuthorize: function (data, actions) {
        return actions.payment.execute()
          .then(function () {
            window.alert('Danke für Ihre Unterstützung!');
          });
      }
    }, '#paypal-button');
    </script>
</div>