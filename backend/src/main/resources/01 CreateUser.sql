CREATE DATABASE IF NOT EXISTS ECOMMERCE;

-- drop user 'e-commerce'@'localhost';     sensible a Mayusculas
-- SET PASSWORD FOR  'e-commerce'@'localhost' = PASSWORD ('full')

CREATE USER 'e-commerce'@'localhost' IDENTIFIED BY 'e-commerce';

GRANT ALL PRIVILEGES ON ECOMMERCE.* TO 'e-commerce'@'localhost' identified by 'e-commerce';

flush privileges;


