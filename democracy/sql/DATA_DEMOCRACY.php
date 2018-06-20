<?php
namespace SQL;
class DATA_DEMOCRACY extends \SYSTEM\DB\QI {
    public static function get_class(){return \get_class();}
    public static function files_mysql(){
        return array(   (new \PSQL('/mysql/schema_faq.sql'))->SERVERPATH(),
                        (new \PSQL('/mysql/faq.sql'))->SERVERPATH(),
                        (new \PSQL('/mysql/schema_roadmap.sql'))->SERVERPATH(),
                        (new \PSQL('/mysql/roadmap.sql'))->SERVERPATH(),
                        (new \PSQL('/mysql/schema_media.sql'))->SERVERPATH(),
                        (new \PSQL('/mysql/media.sql'))->SERVERPATH(),
                        (new \PSQL('/mysql/schema_contact.sql'))->SERVERPATH(),
                        (new \PSQL('/mysql/schema_contact_email_list.sql'))->SERVERPATH(),
                        (new \PSQL('/mysql/schema_email_list.sql'))->SERVERPATH(),
                        (new \PSQL('/mysql/schema_email.sql'))->SERVERPATH(),
                        (new \PSQL('/mysql/schema_email_sent.sql'))->SERVERPATH(),
                        (new \PSQL('/mysql/schema_email_template.sql'))->SERVERPATH(),
                        (new \PSQL('/mysql/schema_email_image.sql'))->SERVERPATH(),
                        (new \PSQL('/mysql/schema_email_placeholder.sql'))->SERVERPATH(),
                        (new \PSQL('/mysql/schema_beta.sql'))->SERVERPATH(),
                        (new \PSQL('/mysql/schema_beta_code.sql'))->SERVERPATH(),
                        (new \PSQL('/mysql/system_page.sql'))->SERVERPATH(),
                        (new \PSQL('/mysql/system_text.sql'))->SERVERPATH(),
                        (new \PSQL('/mysql/system_api.sql'))->SERVERPATH());
    }    
}