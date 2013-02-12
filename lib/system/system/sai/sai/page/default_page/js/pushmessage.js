
/** jQuery on document ready */
function init(){
   
    selectUsers();

    $('#select-to').change(function(e){
        $('#select-to option:selected').each(function(){
            switch($(this).val()){
                case 'users': selectUsers(); break;
                case 'os': selectOS(); break;
                default: selectAll(); break;        
            }
        });
    });
       
};


function selectUsers(){
    $('#element-os').hide();
    $('#element-users').show();
    // @todo: create table dynamically
}

function selectOS(){
    $('#element-os').show();
    $('#element-users').hide();
}

function selectAll(){
    $('#element-os').hide();
    $('#element-users').hide();
}

