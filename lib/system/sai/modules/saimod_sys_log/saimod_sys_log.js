function init__SYSTEM_SAI_saimod_sys_log() {                  
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
            $('#tab_log').load(SAI_ENDPOINT+'sai_mod=.SYSTEM.SAI.saimod_sys_log&action='+action, function(){
                register_log();
                register_error();
                $('img#loader').hide();});
            return;
        case 'stats':
            $('#tab_stats').load(SAI_ENDPOINT+'sai_mod=.SYSTEM.SAI.saimod_sys_log&action='+action, function(){                
                register_stats();
                $('img#loader').hide();});
            return;
        case 'admin':
            $('#tab_admin').load(SAI_ENDPOINT+'sai_mod=.SYSTEM.SAI.saimod_sys_log&action='+action, function(){
                register_admin();
                $('img#loader').hide();});
            return;
        default:
            $('img#loader').hide();            
    }   
}

function register_error(){
    $('.sai_log_error').click(function(){
        $('img#loader').show();            
        $('#table_log').load(SAI_ENDPOINT+'sai_mod=.SYSTEM.SAI.saimod_sys_log&action=error&error='+$(this).attr('error'), function(){
            $('img#loader').hide();})});
}

function load_table_log(filter){
    $('img#loader').show();
    $('#table_log').load(SAI_ENDPOINT+'sai_mod=.SYSTEM.SAI.saimod_sys_log&action=filter&filter='+filter, function(){
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
var filter_time = 3600;
var last_active = "#basic_tab";
function register_stats(){
    filter_time = 3600;
    $('#stats_tabs a').click(function (e) {
        e.preventDefault();
        $(this).tab('show'); 
        last_active = $(this).attr('href');
        $($(this).attr('href')+' .visualisation').each(function(){
            load_visualisation($(this).attr('id'),filter_time);
        });              
    });
    $("#stats_filter a").click(function(){           
        $('#stats_filter li').each(function(){
            $(this).removeClass('active');});
        $(this).parent().addClass('active');
        filter_time = $(this).attr('filter');
        $(last_active+' .visualisation').each(function(){
            load_visualisation($(this).attr('id'),filter_time);
        });
    });
    $('#basic_tab .visualisation').each(function(){
        load_visualisation($(this).attr('id'),filter_time);
    });
}

function register_admin(){
    $('#truncate_table').click(function(){
        $.ajax({    type :'GET',
                    url  : SAI_ENDPOINT+'sai_mod=.SYSTEM.SAI.saimod_sys_log&action=truncate',
                    success : function(data) {
                        if(data == 1){
                            $('#info_box').html("deleting data...");
                            $('#truncate_modal').modal('hide');
                            $('#content-wrapper').load(SAI_ENDPOINT+'sai_mod=.SYSTEM.SAI.saimod_sys_log');
                        }else{
                            $('#info_box').html("You do not have the permission to truncate table!");
                        }
                    }
        });
    });
}

function load_visualisation(id, filter){
    $('img#loader').show();    
    $.getJSON(SAI_ENDPOINT+'sai_mod=.SYSTEM.SAI.saimod_sys_log&action=stats&name='+id+'&filter='+filter,function(json){
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
        $.each(json, function(key, value){first = true; data.addRow($.map(value, function(v) { if(first){first=false;return [new Date(v)];}else{return [(v == null || parseFloat(v) <= 0) ? 0.1 : parseFloat(v)];}}));});
                                
        var options = {title: id, aggregationTarget: 'category', selectionMode: 'multiple', curveType: 'function', /*focusTarget: 'category',*/ chartArea:{left:100,top:40},  vAxis:{logScale: true}, interpolateNulls: false,  width: "1200", height: "500"};
        new google.visualization.LineChart(document.getElementById(id)).draw(data, options);
    });
}