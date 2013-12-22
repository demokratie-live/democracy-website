function init__SYSTEM_SAI_saimod_sys_log() {      
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
    
    
    $('#refresh_error_table').live("click", (function(){        
        do_filter("");}));
    
    $("#filter-error button").live("click", (function(){   
        $('#filter-error button').each(function(){
           $(this).removeClass('active');});
        $(this).addClass('active');
        do_filter($(this).attr('filter'));}));
    
    $('#show_visualtization').live("click", (function(){        
        drawVisualization();        
    }));
    
    do_filter("");        
};

function drawVisualization() {
    $('img#loader').show();    
    $.getJSON(SAI_ENDPOINT+'sai_mod=.SYSTEM.SAI.saimod_sys_log&action=visualization',function(json){
        if(json.status != true){
            $('img#loader').hide();
            $('#visualization').hide();
            return;
        }        
        json = json.result;
        var data1 = new google.visualization.DataTable();
        data1.addColumn('date',      'day');        
        data1.addColumn('number',    'count');
        //data.addColumn('string',   'from to');        
        data1.addColumn('number',    'file_unique');
        data1.addColumn('number',    'ip_unique');
        data1.addColumn('number',    'text_unique');
        data1.addColumn('number',    'class_unique');                
        
        var data2 = new google.visualization.DataTable();
        data2.addColumn('date',      'day');
        data2.addColumn('number',    'count');
        data2.addColumn('number',    'querytime avg');
        data2.addColumn('number',    'querytime max');
        data2.addColumn('number',    'querytime min');        
        
        var data3 = new google.visualization.DataTable();
        data3.addColumn('date',      'day');
        data3.addColumn('number',    'count');
        data3.addColumn('number',    'class_info');
        data3.addColumn('number',    'class_deprecated');
        data3.addColumn('number',    'class_warning');
        data3.addColumn('number',    'class_error');
        data3.addColumn('number',    'class_apperror');                
        
        var data4 = new google.visualization.DataTable();
        data4.addColumn('date',      'day');
        data4.addColumn('number',    'count');
        data4.addColumn('number',    'class_system_log_info');
        data4.addColumn('number',    'class_system_log_deprecated');
        data4.addColumn('number',    'class_system_log_warning');
        data4.addColumn('number',    'class_system_log_error');
        data4.addColumn('number',    'class_system_log_errorexception');
        data4.addColumn('number',    'class_system_log_shutdownexception');
        
        var data5 = new google.visualization.DataTable();
        data5.addColumn('date',      'day');
        data5.addColumn('number',    'count');
        data5.addColumn('number',    'class_exception');
        data5.addColumn('number',    'class_runtimeexception');
        data5.addColumn('number',    'class_errorexception');
        data5.addColumn('number',    'class_other');
        
        $.each(json, function(key, value){                        
            data1.addRow([  new Date(value.day),
                            parseInt(value.count),                            
                            parseInt(value.file_unique),
                            parseInt(value.ip_unique),
                            parseInt(value.text_unique),
                            parseInt(value.class_unique)]);
            data2.addRow([  new Date(value.day),
                            parseInt(value.count),
                            parseFloat(value.querytime_avg),
                            parseFloat(value.querytime_max),
                            parseFloat(value.querytime_min)]);                        
            data3.addRow([  new Date(value.day),
                            parseInt(value.count),
                            parseInt(value.class_info)+0.5,
                            parseInt(value.class_deprecated)+0.5,
                            parseInt(value.class_warning)+0.5,
                            parseInt(value.class_error)+0.5,
                            parseInt(value.class_apperror)+0.5]);                            
            data4.addRow([  new Date(value.day),                            
                            parseInt(value.count),                            
                            parseInt(value.class_system_log_info)+0.5,
                            parseInt(value.class_system_log_deprecated)+0.5,
                            parseInt(value.class_system_log_warning)+0.5,
                            parseInt(value.class_system_log_error)+0.5,
                            parseInt(value.class_system_log_errorexception)+0.5,
                            parseInt(value.class_system_log_shutdownexception)+0.5,
                            ]);                                        
            data5.addRow([  new Date(value.day),                            
                            parseInt(value.count),                                                        
                            parseInt(value.class_exception)+0.5,
                            parseInt(value.class_runtimeexception)+0.5,
                            parseInt(value.class_errorexception)+0.5,
                            parseInt(value.count)+0.5 - parseInt(value.class_info) - parseInt(value.class_deprecated) - parseInt(value.class_warning) - parseInt(value.class_error) - parseInt(value.class_apperror) - parseInt(value.class_system_log_info) - parseInt(value.class_system_log_deprecated) - parseInt(value.class_system_log_warning) - parseInt(value.class_system_log_error) - parseInt(value.class_system_log_errorexception) - parseInt(value.class_system_log_shutdownexception) - parseInt(value.class_exception) - parseInt(value.class_runtimeexception) - parseInt(value.class_errorexception)]);
        });    
                


        // Create and draw the visualization.
        var options = {title: 'Exception Occurrence', aggregationTarget: 'category', selectionMode: 'multiple', /*focusTarget: 'category',*/ chartArea:{left:100,top:40},  vAxis:{logScale: true}, interpolateNulls: false,  width: "1400", height: "500"};
        new google.visualization.LineChart(document.getElementById('visualization1')).draw(data1, options);
        var options = {title: 'Exception Querytime', /*focusTarget: 'category',*/ chartArea:{left:100,top:40}, vAxis:{logScale: true}, interpolateNulls: false,  width: "1400", height: "500"};
        new google.visualization.LineChart(document.getElementById('visualization2')).draw(data2, options);
        var options = {title: 'Exception Classes - basic', /*focusTarget: 'category',*/ chartArea:{left:100,top:40}, vAxis:{logScale: true}, interpolateNulls: false, width: "1400", height: "500"};
        new google.visualization.LineChart(document.getElementById('visualization3')).draw(data3, options);
        var options = {title: 'Exception Classes - system', /*focusTarget: 'category',*/ chartArea:{left:100,top:40}, vAxis:{logScale: true}, interpolateNulls: false, width: "1400", height: "500"};
        new google.visualization.LineChart(document.getElementById('visualization4')).draw(data4, options);
        var options = {title: 'Exception Classes - other', /*focusTarget: 'category',*/ chartArea:{left:100,top:40}, vAxis:{logScale: true}, interpolateNulls: false, width: "1400", height: "500"};
        new google.visualization.LineChart(document.getElementById('visualization5')).draw(data5, options);
        
        $('img#loader').hide();
        $('#table-wrapper').hide();
        $('#visualization').show();
    });    
    
}

function do_filter(filter){
    $('img#loader').show();
    $('#visualization').hide();
    $(this).parents().children().removeClass('active');
    $(this).addClass('active');                
    $('#table-wrapper').load(SAI_ENDPOINT+'sai_mod=.SYSTEM.SAI.saimod_sys_log&action=filter&filter='+filter,function(){$('#table-wrapper').show(); $('img#loader').hide();});
}