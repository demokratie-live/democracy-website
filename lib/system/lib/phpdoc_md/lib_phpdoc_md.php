<?php
namespace LIB;
class lib_phpdoc_md extends \LIB\lib_php{
    public static function get_class(){
        return self::class;}
    public static function php_autoload(){
        require_once dirname(__FILE__).'/lib/phpdoc_md/src/Parser.php';
        require_once dirname(__FILE__).'/lib/phpdoc_md/src/Generator.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/LoaderInterface.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/ExistsLoaderInterface.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/Error.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/Environment.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/CacheInterface.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/ExtensionInterface.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/Extension.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/Filter.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/SimpleFilter.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/Lexer.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/Function.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/Test.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/TokenParserInterface.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/TokenParser.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/ExpressionParser.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/NodeVisitorInterface.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/BaseNodeVisitor.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/Parser.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/Token.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/TokenStream.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/TokenParser.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/Node.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/NodeOutputInterface.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/Template.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/NodeTraverser.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/Compiler.php';
        
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/NodeVisitor/Escaper.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/NodeVisitor/SafeAnalysis.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/NodeVisitor/Optimizer.php';
        
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/Node/Expression.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/Node/Print.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/Node/Text.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/Node/If.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/Node/ForLoop.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/Node/For.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/Node/Module.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/Node/Body.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/Node/Expression/Name.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/Node/Expression/Constant.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/Node/Expression/Call.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/Node/Expression/Filter.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/Node/Expression/Array.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/Node/Expression/GetAttr.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/Node/Expression/AssignName.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/Node/Expression/Unary.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/Node/Expression/Unary/Not.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/Node/Expression/Binary.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/Node/Expression/Binary/NotEqual.php';

        
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/TokenParser/For.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/TokenParser/If.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/TokenParser/Extends.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/TokenParser/Include.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/TokenParser/Block.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/TokenParser/Use.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/TokenParser/Filter.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/TokenParser/Macro.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/TokenParser/Import.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/TokenParser/From.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/TokenParser/Set.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/TokenParser/Spaceless.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/TokenParser/Flush.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/TokenParser/Do.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/TokenParser/Embed.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/TokenParser/AutoEscape.php';
        
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/Extension/Core.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/Extension/Escaper.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/Extension/Optimizer.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/Extension/Staging.php';
        
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/Cache/Null.php';
        
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/Error/Loader.php';
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/Error/Syntax.php';
        
        require_once dirname(__FILE__).'/lib/twig/lib/Twig/Loader/Filesystem.php';
        
        require_once dirname(__FILE__).'/lib/phpdoc_md.php';
        return true;}
    public static function version(){
        return 'https://github.com/evert/phpdoc-md phpdoc-md';}
}