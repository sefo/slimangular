<?php
    class db {
        // Properties
        private $dbhost = 'localhost';
        private $dbuser = 'postgres';
        private $dbpass = 'root';
        private $dbname = 'pcie';

        // Connect
        public function connect() {
            $dbConnection = pg_connect("host=$this->dbhost dbname=$this->dbname user=$this->dbuser password=$this->dbpass");
            return $dbConnection;
        }
    }