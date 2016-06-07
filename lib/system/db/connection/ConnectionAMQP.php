<?php
/**
 * System - PHP Framework
 *
 * PHP Version 5.6
 *
 * @copyright   2016 Ulf Gebhardt (http://www.webcraft-media.de)
 * @license     http://www.opensource.org/licenses/mit-license.php MIT
 * @link        https://github.com/webcraftmedia/system
 * @package     SYSTEM\DB
 */
namespace SYSTEM\DB;

/**
 * AMQP Connection Class provided by System to connect to AMQP Services.
 */
class ConnectionAMQP extends ConnectionAbstr {
    /** ressource Variable to store then open Connection */
    private $connection = NULL;

    /**
     * Connect to the DB upon Construction.
     *
     * @param DBINFO $dbinfo Database Information Object
     */
    public function __construct(DBInfo $dbinfo){
        $this->connection = new \AMQPConnection(
                array(
                    'host'  => $dbinfo->m_host,
                    'vhost' => $dbinfo->m_database,
                    'port'  => $dbinfo->m_port,
                    'login' => $dbinfo->m_user,
                    'password' => $dbinfo->m_password
                ));
        
        $this->connection->connect();
        
        if(!$this->connection || !$this->connection->isConnected()){
            throw new \SYSTEM\LOG\ERROR('Cannot connect to the amqp queue!');}
    }

    /**
     * Send a Message to the AMQP Server
     *
     * @param array $msg Query Object
     * @return null Retuns null or trows an Error
     */
    public function send($msg){
        $channel = new \AMQPChannel($this->connection);
        $exchange = new \AMQPExchange($channel);
        $exchange->setFlags(AMQP_DURABLE);
        $exchange->setName('exchange2');
        $exchange->setType('direct');
        //$exchange->declare();
        $exchange->declareExchange();
        
        $queue   = new \AMQPQueue($channel);
        $queue->setName('series');
        $queue->setFlags(AMQP_DURABLE | AMQP_AUTODELETE);
        //$queue->declare();
        $queue->declareQueue();
        $queue->bind('exchange2','series');
        
        $channel->startTransaction();
        $message = $exchange->publish(json_encode($msg), 'series', AMQP_MANDATORY, 
                array('content_type'    => 'application/json', 
                      'delivery_mode'   => 2));
        $channel->commitTransaction();
        
        if(!$message) {
            throw new \SYSTEM\LOG\ERROR("Error: Message '".$message."' was not sent to queue.!");}
    }
    
    /**
     * Destruct the Database Connection upon Destruction.
     */
    public function __destruct(){
        $this->close();}

    /**
     * Close the Database Connection.
     * 
     * @return bool Returns true or false depending on success
     */
    public function close(){
       return $this->connection->disconnect();}

    /**
     * Query the Connection using normal Query Statement
     *
     * @param string $query SQL string of the Statement
     * @return Result Returns Database Query Result.
     */
    public function query($query){
        throw new \Exception('Could not start Transaction: not implemented');}
    
    /**
     * Query the Connection using Prepare Statement
     *
     * @param string $stmtName Name of the Statement - espec for PostgreSQL important
     * @param string $stmt SQL string of the Statement
     * @param array $values Array of Prepare Values
     * @return Result Returns Database Query Result.
     */
    public function prepare($stmtName, $stmt, $values){
        throw new \Exception('Could not start Transaction: not implemented');}

    /**
     * Commit a Transaction on the Database Connection
     *
     * @return bool Returns true or false depending on success.
     */
    public function commit(){
        throw new \Exception('Could not start Transaction: not implemented');}

    /**
     * Exec Query on Database
     *
     * @param string $query SQL string of the Statement
     * @return Result Returns Database Query Result.
     */
    public function exec($query){
        throw new \Exception('Could not start Transaction: not implemented');}

    /**
     * Open a Transaction on the Database Connection
     *
     * @return bool Returns true or false depending on success.
     */
    public function trans(){
        throw new \Exception('Could not start Transaction: not implemented');}
}