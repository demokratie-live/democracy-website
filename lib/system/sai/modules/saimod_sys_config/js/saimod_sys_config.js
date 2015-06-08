var table_basics = document.getElementById('sai_mod_config_table_basics');
var sort = new Tablesort(table_basics);
function sort_table(){
    console.log("testme");
    
}

table_basics.addEventListener('beforeSort', function() {
  alert('Table is about to be sorted!');
});

table_basics.addEventListener('afterSort', function() {
  alert('Table sorted!');
});