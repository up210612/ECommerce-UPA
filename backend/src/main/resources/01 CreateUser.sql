CREATE DATABASE IF NOT EXISTS FULL2;

-- drop user 'full'@'localhost';     sensible a Mayusculas
-- SET PASSWORD FOR  'full'@'localhost' = PASSWORD ('full')

CREATE USER 'full2'@'localhost' IDENTIFIED BY 'full2';

GRANT ALL PRIVILEGES ON FULL2.* TO 'full2'@'localhost' [identified by 'full2'];

flush privileges;


