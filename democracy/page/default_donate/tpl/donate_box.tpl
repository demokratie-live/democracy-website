<div style="width: 100%; margin-left: auto; margin-right: auto;">
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
        #donate_init_text{
            text-align: left;
            padding-left: 50px;
        }
        .w3_agileits_team_grid{
            margin-top: 50px;
        }
        @media (max-width: 575px){
            #donate_init_text{
                padding-left: 15px;
                padding-top: 50px;
            }
            #donate-box{
                padding-top: 50px;
            }
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