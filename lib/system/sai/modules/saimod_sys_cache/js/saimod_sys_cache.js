function init_saimod_sys_cache(){
    $('#btn_cache_clear').click(function() {
        $.ajax({    url: './sai.php',
                    data: { sai_mod: '.SYSTEM.SAI.saimod_sys_cache',
                            action: 'clear'},
                    type: 'GET',
                    success: function(data) {
                        system.load('cache',true);}
        });  
    });
}