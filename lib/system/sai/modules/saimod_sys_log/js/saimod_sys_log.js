google.load("visualization", "1", {packages:["corechart"]});
function init_saimod_sys_log() {
    $("#sai_mod_log_table").tablesorter();
    $('#tabs_log a').click(function (e) {
        $('#tabs_log li a').each(function(){
            $(this).removeClass('active');});
        $(this).addClass('active');
    });
};

function register_search(){
    $('#btn_search_log').click(function(){
        system.load($(this).attr('state')+encodeURIComponent($('#input_search_log').val()),true);
    });
}

function init_saimod_sys_log_log() {
    $("#sai_mod_log_table").tablesorter();
    $('#tabs_log li').each(function(){
        $(this).removeClass('active');});
    $('#menu_loglist').parent().addClass('active');
    register_search();
}

function init_saimod_sys_log_stats() {
    $("#sai_mod_log_table").tablesorter();
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
    $('#tabs_log li').each(function(){
        $(this).removeClass('active');});
    $('#menu_stats').parent().addClass('active');
}
function load_visualisation(){
    $('img#loader').show();
    var name = $('#vis_filter_type').val();;
    var filter = $('#vis_filter_time').val();
    var db = $('#stats_tabs li.active').attr('db');
    /*$.getJSON('./sai.php?sai_mod=.SYSTEM.SAI.saimod_sys_log&action=stats&name='+name+'&filter='+filter+'&db='+db,function(json){
        
    });*/
    $.ajax({
        async: true,
        url: this.endpoint,
        type: 'GET',
        dataType: 'JSON',
        data: {
            sai_mod: '.SYSTEM.SAI.saimod_sys_log',
            action: 'stats',
            name: name,
            filter: filter,
            db: db
        },
        success: function(data){
            if(data.status){
                var json = data.result;
                var gdata = new google.visualization.DataTable();
                first = true;        
                $.each(json[0], function(key, value){
                    if(first){                
                        gdata.addColumn('datetime',key);
                        first = false;
                    } else {
                        gdata.addColumn('number',key);
                    }       
                });            
                $.each(json, function(key, value){
                    first = true;
                    gdata.addRow($.map(value, function(v) {
                        if(first){
                            first=false;
                            return [new Date(v)];
                        } else {
                            return [(v == null || parseFloat(v) <= 0) ? parseFloat(0) : parseFloat(v)];
                        }
                    }));
                });

                var options = { title: name,
                                aggregationTarget:  'category',
                                selectionMode:      'multiple',
                                curveType:          'function',
                                /*focusTarget:      'category',*/
                                chartArea:          {left:100,top:40},
                                vAxis:              {logScale: true},
                                interpolateNulls:   false,
                                width:              "1200",
                                height:             "500"};
                new google.visualization.LineChart(document.getElementById('vis')).draw(gdata, options);
            } 
            $('img#loader').hide();
        },
        error: function(){
            alert('Something happend - try again!');
        }
    });
}