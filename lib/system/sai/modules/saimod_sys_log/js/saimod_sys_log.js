google.load("visualization", "1", {packages:["corechart"]});
function init_saimod_sys_log() {
    $('#tabs_log a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
        load_log_tab($(this).attr('action'));        
    });

    load_log_tab("log");    
};

function load_log_tab(action){
    $('img#loader').show();
    switch(action){
        case 'log':
            $('#tab_log').load('./sai.php?sai_mod=.SYSTEM.SAI.saimod_sys_log&action='+action, function(){
                register_log();
                register_error();
                $('img#loader').hide();});
            return;
        case 'stats':
            $('#tab_stats').load('./sai.php?sai_mod=.SYSTEM.SAI.saimod_sys_log&action='+action, function(){                
                register_stats();
                $('img#loader').hide();});
            return;
        default:
            $('img#loader').hide();            
    }   
}

function register_error(){
    $('.sai_log_error').click(function(){
        $('img#loader').show();            
        $('#table_log').load('./sai.php?sai_mod=.SYSTEM.SAI.saimod_sys_log&action=error&error='+$(this).attr('error'), function(){
            $('img#loader').hide();})});
}

function load_table_log(filter){
    $('img#loader').show();
    $('#table_log').load('./sai.php?sai_mod=.SYSTEM.SAI.saimod_sys_log&action=filter&filter='+filter, function(){
        register_error();
        $('img#loader').hide();});
}

var filter = "%";
function register_log(){
    $('#refresh_error_table').click(function(){        
        load_table_log(filter);});
    $("#error_filter a").click(function(){           
        $('#error_filter li').each(function(){
            $(this).removeClass('active');});
        $(this).parent().addClass('active');
        filter = $(this).attr('filter');
        load_table_log($(this).attr('filter'));        
    });
}
function register_stats(){
    load_visualisation();
    $('#vis_filter_time').change(function(){
        load_visualisation();})
    $('#vis_filter_type').change(function(){
        load_visualisation();})
    $('#stats_tabs a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
        load_visualisation();
    });
}

function load_visualisation(){
    $('img#loader').show();
    var name = $('#vis_filter_type').val();;
    var filter = $('#vis_filter_time').val();
    var db = $('#stats_tabs li.active').attr('db');
    $.getJSON('./sai.php?sai_mod=.SYSTEM.SAI.saimod_sys_log&action=stats&name='+name+'&filter='+filter+'&db='+db,function(json){
        if(!json || json.status != true || !json.result){
            $('img#loader').hide();            
            return;
        }
        json = json.result;
        $('img#loader').hide();
        var data = new google.visualization.DataTable();
        first = true;        
        $.each(json[0], function(key, value){
            if(first){                
                data.addColumn('datetime',key);
                first = false;
            } else {
                data.addColumn('number',key);
            }       
        });            
        $.each(json, function(key, value){first = true; data.addRow($.map(value, function(v) { if(first){first=false;return [new Date(v)];}else{return [(v == null || parseFloat(v) <= 0) ? parseFloat(0.00001) : parseFloat(v)];}}));});
                                
        var options = {title: name, aggregationTarget: 'category', selectionMode: 'multiple', curveType: 'function', /*focusTarget: 'category',*/ chartArea:{left:100,top:40},  vAxis:{logScale: true}, interpolateNulls: false,  width: "1200", height: "500"};
        new google.visualization.LineChart(document.getElementById('vis')).draw(data, options);
    });
}