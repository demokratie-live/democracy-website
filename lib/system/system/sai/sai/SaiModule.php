<?php

namespace SYSTEM\SAI;

abstract class SaiModule {
    public static abstract function html_js();
    public static abstract function html_css();
    public static abstract function html_content();
    public static abstract function html_li_menu();
}