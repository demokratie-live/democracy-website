<?php

namespace SYSTEM\IMG;

class img {

    private static $imgfolders = array(); //only strings!   (catname => array(2.path 3.mask))*

    public static function registerFolder($path, $cat, $mask) {
        self::$imgfolders[$cat] = array($path, $mask);
    }

    public static function get($cat = null, $id = null, $returnasjson = false) {
        if (!$cat) {
            return $returnasjson ? \SYSTEM\LOG\JsonResult::toString(self::$imgfolders) : self::$imgfolders;
        }

        if (!array_key_exists($cat, self::$imgfolders)) {
            throw new \SYSTEM\LOG\ERROR("No matching Cat '" . $cat . "' found.");
        }

        $folder = self::getFolder(self::$imgfolders[$cat][0], self::$imgfolders[$cat][1]);
        if ($id == null) {
            return $returnasjson ? \SYSTEM\LOG\JsonResult::toString($folder) : $folder;
        }

        if (!in_array($id, $folder)) {
            throw new \SYSTEM\LOG\ERROR("No matching ID '" . $id . "' found.");
        }

        \SYSTEM\HEADER::PNG();
        return file_get_contents(self::$imgfolders[$cat][0] . $id);
    }

    public static function put($cat, $id, $contents) {
        if (!array_key_exists($cat, self::$imgfolders)) {
            throw new \SYSTEM\LOG\ERROR("No matching Cat '" . $cat . "' found.");}        
        return move_uploaded_file($contents, self::$imgfolders[$cat][0].$id);        
    }

    private static function getFolder($folder, $mask) {
        $files = array();
        foreach (glob($folder . $mask) as $file) {
            $files[] = basename($file);
        }
        return $files;
    }

    public static function getURL($cat, $id = null) {
        return \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_BASEURL) . 'api.php?call=img&cat=' . $cat . '&id=' . $id;
    }

}
