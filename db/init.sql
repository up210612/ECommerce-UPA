CREATE DATABASE IF NOT EXISTS ECOMMERCE;

-- Base de datos: full
use ECOMMERCE;

CREATE TABLE clients (
  id_client int(10) AUTO_INCREMENT PRIMARY KEY,
  last_name varchar(20) NOT NULL,
  first_name varchar(10),
  celular varchar(10),
  email varchar(60),
  password VARCHAR(255)
);

CREATE TABLE shippingaddress(
  id_address int(10) AUTO_INCREMENT PRIMARY KEY,
  street VARCHAR(150) NOT NULL,
  street_number VARCHAR(150) NOT NULL,
  apartment VARCHAR(150),
  country VARCHAR(150) NOT NULL,
  country_state VARCHAR(150) NOT NULL,
  zipcode VARCHAR(5) NOT NULL
);

CREATE TABLE orders (
  id_order int(10) AUTO_INCREMENT PRIMARY KEY,
  id_client int(10),
  id_address int(10),
  order_date date,
  total_amount DECIMAL(12, 4),
  CONSTRAINT Client_Ord FOREIGN KEY (id_client) 
            REFERENCES clients (id_client),
  FOREIGN KEY (id_address) REFERENCES shippingaddress (id_address)
);


CREATE TABLE CATEGORIES(
  id_category INT(10) PRIMARY KEY AUTO_INCREMENT,
  category_name VARCHAR(100) NOT NULL
);

CREATE TABLE products (
  id_product int(10) AUTO_INCREMENT PRIMARY KEY,
  product_name varchar(40),
  unit_price decimal(12,4) check(unit_price > 0),
  product_description VARCHAR(150),
  id_category INT(10),
  FOREIGN KEY (id_category) REFERENCES categories(id_category)
);


CREATE TABLE orderDetails (
  id_order int(10),
  id_product int(10),
  unit_price decimal(12,4),
  quantity smallint(5),
  discount double,
  CONSTRAINT PRIMARY_KEY PRIMARY KEY(id_order, id_product),
  CONSTRAINT ord_det FOREIGN KEY (id_order)   REFERENCES orders (id_order),
  CONSTRAINT det_pro FOREIGN KEY (id_product) REFERENCES products (id_product)
  );

CREATE TABLE INVENTORY (
    id_inventory INT(10) PRIMARY KEY AUTO_INCREMENT,
    id_product INT(10),
    size VARCHAR(20) NOT NULL,
    available_quantity INT NOT NULL check(available_quantity >= 0),
    FOREIGN KEY (id_product) REFERENCES products(id_product)
);


CREATE TABLE PRODUCTIMAGES(
  id_product_image INT(10) PRIMARY KEY AUTO_INCREMENT,
  id_product INT(10),
  product_image_route VARCHAR(150) NOT NULL,
  FOREIGN KEY (id_product) REFERENCES products(id_product)
  );

use Ecommerce;

INSERT INTO CATEGORIES (category_name) VALUES ("Jeans"),
("Playeras");

INSERT INTO PRODUCTS (product_name,unit_price, product_description, id_category)
VALUES ("Jean Khaki", 500, "Jean de color Khaki", 1);
INSERT INTO PRODUCTS (product_name,unit_price, product_description, id_category)
VALUES ("Jeans Slim Azul Medio", 319, "Jeans slim con pretina sencilla, cinco bolsillos cierre frontal con botón y cremallera.", 1);
INSERT INTO PRODUCTS (product_name,unit_price, product_description, id_category)
VALUES ("Jeans Cargo Azul", 349, "Jeans slim cargo con pretina sencilla y bolsillos diagonales.", 1);
INSERT INTO PRODUCTS (product_name,unit_price, product_description, id_category)
VALUES ("Jogger Negro ", 349, "Joger de pokemon con bolillos diagonales", 1);
INSERT INTO PRODUCTS (product_name,unit_price, product_description, id_category)
VALUES ("Jeans Rotos Negros ", 339, "Jeans slim con pretina sencilla, cierre frontal con botón y cremallera.", 1);
INSERT INTO PRODUCTS (product_name,unit_price, product_description, id_category)
VALUES ("Jeans Cargo Negro", 349, "Jeans cargo con bolsillos diagonales.", 1);
INSERT INTO PRODUCTS (product_name,unit_price, product_description, id_category)
VALUES ("Jeans Slim Azul Medio", 319, "Jeans slim con pretina sencilla, cinco bolsillos cierre frontal con botón y cremallera.", 1);
INSERT INTO PRODUCTS (product_name,unit_price, product_description, id_category)
VALUES ("Jeans Cargo Azul", 349, "Jeans slim cargo con pretina sencilla y bolsillos diagonales.", 1);


INSERT INTO PRODUCTIMAGES (id_product, product_image_route) VALUES
(1,"Images/Jeans/Male/MJeans1/MJeans1Principal.png");
(2,"Images/Jeans/Male/MJeans2/MJeans2Principal.png");
(3,"Images/Jeans/Male/MJeans3/MJeans3Principal.png");
(4,"Images/Jeans/Male/MJeans4/MJeans4Principal.png");
(4,"Images/Jeans/Male/MJeans4/MJeans4_1.png");
(4,"Images/Jeans/Male/MJeans4/MJeans4_2.png");
(5,"Images/Jeans/Male/MJeans5/MJeans5Principal.png");
(5,"Images/Jeans/Male/MJeans5/MJeans5_1.png");
(5,"Images/Jeans/Male/MJeans5/MJeans5_2.png");
(5,"Images/Jeans/Male/MJeans5/MJeans5_3.png");
(5,"Images/Jeans/Male/MJeans5/MJeans5_4.png");
(6,"Images/Jeans/Female/FJeans1/FJeans1Principal.png");
(6,"Images/Jeans/Female/FJeans1/FJeans1_1.png");
(6,"Images/Jeans/Female/FJeans1/FJeans1_2.png");
(6,"Images/Jeans/Female/FJeans1/FJeans1_3.png");
(7,"Images/Jeans/Female/FJeans2/FJeans2Principal.png");
(8,"Images/Jeans/Female/FJeans3/FJeans3Principal.png");
(9,"Images/Jeans/Female/FJeans4/FJeans4Principal.png");
(9,"Images/Jeans/Female/FJeans4/FJeans4_1.png");
(9,"Images/Jeans/Female/FJeans4/FJeans4_2.png");
(9,"Images/Jeans/Female/FJeans4/FJeans4_3.png");
