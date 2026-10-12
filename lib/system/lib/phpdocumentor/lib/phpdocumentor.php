<?php
class phpdocumentor {
    public static function run($inpath,$outpath,$cachepath,$ignore,$title,$sourcecode,$parseprivate,$template='responsive-twig'){
        $sourcecode_ = $sourcecode ? '--sourcecode' : '';
        $parseprivate_ = $parseprivate ? '--parseprivate' : '';
        $ignore_ = '';
        foreach($ignore as $path){
            $ignore_ .= '"'.$path.'",';}
        if($ignore_ != ''){
            $ignore_ = '--ignore '.rtrim($ignore_, ',');}
        if (!file_exists($outpath->SERVERPATH())) {
            mkdir($outpath->SERVERPATH(), 0777, true);}
        if (!file_exists($cachepath->SERVERPATH())) {
            mkdir($cachepath->SERVERPATH(), 0777, true);}
        $result = shell_exec('php5 '.dirname(__FILE__).'/phpDocumentor.phar run'.
                            ' -d '.$inpath->SERVERPATH().
                            ' -t '.$outpath->SERVERPATH().
                            ' --template="'.$template.'"'.
                            ' --cache-folder '.$cachepath->SERVERPATH().
                            ' '.$ignore_.
                            ' '.$sourcecode_.
                            ' '.$parseprivate_.
                            ' --force'.
                            ' --title "'.$title.'" 2>&1');
        return \explode("\n", $result);
    }
}