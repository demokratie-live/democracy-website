google.load("visualization", "1", {packages:["corechart"]});
function init_saimod_sys_log() {
    $('#tabs_log a').click(function (e) {
        $('#tabs_log li').each(function(){
            $(this).removeClass('active');});
        $(this).parent().addClass('active');
    });
    if(system.cur_state() === 'log(stats)'){
        $('#tabs_log li').each(function(){
            $(this).removeClass('active');});
        $('#menu_stats').parent().addClass('active');
    }
};

function init_saimod_sys_log_stats() {
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