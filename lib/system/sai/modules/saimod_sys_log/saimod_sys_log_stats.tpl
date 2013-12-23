<ul class="nav nav-pills" id="stats_filter" style="">
    <!--<li><a href="#" filter="31536000">365d</a></li>-->
    <li><a href="#" filter="2592000">30d</a></li>
    <li><a href="#" filter="1209600">14d</a></li>
    <li class="active"><a href="#" filter="604800">7d</a></li>
    <li><a href="#" filter="86400">1d</a></li>
    <li><a href="#" filter="43200">12h</a></li>
    <li><a href="#" filter="21600">6h</a></li>
    <li><a href="#" filter="3600">1h</a></li>    
    <li><a href="#" filter="60">1m</a></li>
    <li><a href="#" filter="1">1s</a></li>
</ul>

<div class="tabbable tabs-left" id="stats_tabs">
    <ul class="nav nav-tabs">
        <li class="active"><a href="#basic_tab">Basics</a></li>
        <li><a href="#class_tab">Class</a></li>
        <li><a href="#unique_tab">Unique</a></li>
    </ul>
    <div class="tab-content">
        <div class="tab-pane active" id="basic_tab">            
            <div class="visualisation" id="basic_visitor"></div>
            <div class="visualisation" id="basic_sucess"></div>
            <div class="visualisation" id="basic_querytime"></div>
            </br>
        </div>
        <div class="tab-pane" id="class_tab">
            <div class="visualisation" id="class_basic"></div>
            <div class="visualisation" id="class_system"></div>
            <div class="visualisation" id="class_other"></div>
            </br>
        </div>
        <div class="tab-pane" id="unique_tab">
            <div class="visualisation" id="unique_basic"></div>
            <div class="visualisation" id="unique_exception"></div>
            <div class="visualisation" id="unique_referer"></div>
            </br>
        </div>
  </div>
</div>