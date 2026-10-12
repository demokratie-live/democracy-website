<?php
class phpdoc_md {
    public static function run($inpath,$outpath){
        $result = array();
        if (!file_exists($outpath->SERVERPATH())) {
            mkdir($outpath->SERVERPATH(), 0777, true);}

        $parser = new \PHPDocMD\Parser($inpath->SERVERPATH());

        $result[] = 'Parsing structure.xml';

        $classDefinitions = $parser->run();

        $generator = new \PHPDocMD\Generator(
            $classDefinitions,
            $outpath->SERVERPATH(),
            dirname(__FILE__) . '/phpdoc_md/templates/',
            '%c',
            'ApiIndex.md'
        );

        $result[] = 'Generating pages';

        $generator->run();

        $result[] = 'Complete';
        return $result;
    }
}