<?php

namespace SYSTEM\SAI;

class saimod_sys_api extends \SYSTEM\SAI\SaiModule {
    public static function html_js(){ return '';}
    public static function html_css(){return '';}
    public static function html_content(){
        $con = new \SYSTEM\DB\Connection(new \DBD\system());
        $res = $con->query('SELECT * FROM '.\DBD\APITable::NAME);

        $tree = array();
        while($row = $res->next()){
            $tree[] = $row;}

        $tree = self::buildTree($tree, -1);        

        $html = self::htmltree($tree,'http://www.da-sense.de/test/api.php?');
        return $html;
    }

    private static function htmlTree($tree,$url, $url_rec = null){
        /*echo "<pre>";
                    print_r($tree);
                    echo "</pre>";
                    die();*/
        $result = '';                
        if( \is_array($tree) &&
            \count($tree) > 0 &&
            \is_array($tree['com'])){

            foreach($tree['com'] as $root){
                //print_r($root);
                $url_rec_new    =   ($root['node'][\DBD\APITable::FIELD_PARENTVALUE] ? $root['node'][\DBD\APITable::FIELD_PARENTVALUE].'&' : '').
                                    $root['node'][\DBD\APITable::FIELD_NAME].'=';

                //print_r($url_rec_new);
                //echo '</br>';

                $result        .=   '<ul><li>'.
                                    $root['node'][\DBD\APITable::FIELD_NAME].' '.
                                    '</br>'.
                                    '<a href="'.$url.$url_rec.$url_rec_new.($root['node'][\DBD\APITable::FIELD_ALLOWEDVALUES] == 'FLAG' ? '1' : '${COM}').'">'.
                                    $url.$url_rec.$url_rec_new.($root['node'][\DBD\APITable::FIELD_ALLOWEDVALUES] == 'FLAG' ? '1' : '${COM}').'</a>';

                if(\is_array($root['par'])){
                    
                    foreach($root['par'] as $parentval => $param){
                        $url_rec_new_par = ($parentval ? $parentval : ($root['node'][\DBD\APITable::FIELD_ALLOWEDVALUES] == 'FLAG' ? '1' : '${COM}'));
                        foreach($param as $par){                            
                            $url_rec_new_par  .=    '&'.$par[\DBD\APITable::FIELD_NAME].'=${'.$par[\DBD\APITable::FIELD_ALLOWEDVALUES].'}';
                        }
                        $result             .=  '</br>'.
                                                '<a href="'.$url.$url_rec.$url_rec_new.$url_rec_new_par.'">'.$url.$url_rec.$url_rec_new.$url_rec_new_par.'</a>';
                    }
                }
                /*echo "<pre>";
                    print_r($root['tree']);
                    echo "</pre>";*/
                $result .= self::htmlTree($root['tree'],$url, $url_rec.$url_rec_new).
                           '</li></ul>';
            }

        }

        return $result;
    }

    private static function buildTree($dbtree, $parentid){        
        $result = array();
        foreach($dbtree as $node){
            if( $node[\DBD\APITable::FIELD_PARENTID] == $parentid &&
                (!$node[\DBD\APITable::FIELD_FLAG] || $node[\DBD\APITable::FIELD_ALLOWEDVALUES] == 'FLAG')){
                /*if($node[\DBD\APITable::FIELD_FLAG] && $node[\DBD\APITable::FIELD_ALLOWEDVALUES] != 'FLAG'){
                    $result['par'][$node[\DBD\APITable::FIELD_PARENTVALUE]][] = $node;                    
                } else {         
                    $result['com'][] = array('tree' => self::buildTree($dbtree,$node[\DBD\APITable::FIELD_ID]),'node' => $node);}*/
                $pars = array();
                foreach($dbtree as $node2){
                    if( $node2[\DBD\APITable::FIELD_PARENTID] == $node[\DBD\APITable::FIELD_ID] &&
                        $node2[\DBD\APITable::FIELD_FLAG] && $node2[\DBD\APITable::FIELD_ALLOWEDVALUES] != 'FLAG'){
                        $pars[$node2[\DBD\APITable::FIELD_PARENTVALUE]][] = $node2;
                    }
                }
                $result['com'][] =  array('tree' => self::buildTree($dbtree,$node[\DBD\APITable::FIELD_ID]),
                                    'node' => $node,
                                    'par' => $pars);
            }
        }
        
        return $result;
    }

    public static function html_li_menu(){return '<li><a href="#" id="SYS API">SYS API</a></li>';}
}