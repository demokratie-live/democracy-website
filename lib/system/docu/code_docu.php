<?php
namespace SYSTEM\DOCU;

class code_docu {
    public static function generate(){
        \SYSTEM\autoload::autoload_all();
echo '<pre>';
print_r(\get_declared_classes());
print_r(\get_declared_interfaces());
//print_r(\get_declared_traits());
print_r(\get_defined_constants(true));
print_r(\get_defined_functions());
print_r(\get_defined_vars());
echo '</pre>';
    }
}