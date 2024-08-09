CREATE DATABASE IF NOT EXISTS ecommerce;

-- Base de datos: ecommerce
USE ecommerce;

GRANT ALL PRIVILEGES on ecommerce.* TO 'ecommerce'@'172.24.0.2' identified by 'ecommerce';

-- Crear tabla categories primero, ya que otras tablas dependen de ella
CREATE TABLE IF NOT EXISTS categories(
  id_category INT(10) PRIMARY KEY AUTO_INCREMENT,
  category_name VARCHAR(100) NOT NULL
);

-- Crear la tabla clients
CREATE TABLE IF NOT EXISTS clients (
  id_client int(10) AUTO_INCREMENT PRIMARY KEY,
  last_name varchar(20) NOT NULL,
  first_name varchar(10),
  celular varchar(10),
  email varchar(60),
  password VARCHAR(255)
);

-- Crear la tabla shippingaddress
CREATE TABLE IF NOT EXISTS shippingaddress(
  id_address int(10) AUTO_INCREMENT PRIMARY KEY,
  street VARCHAR(150) NOT NULL,
  street_number VARCHAR(150) NOT NULL,
  apartment VARCHAR(150),
  country VARCHAR(150) NOT NULL,
  country_state VARCHAR(150) NOT NULL,
  zipcode VARCHAR(5) NOT NULL
);

-- Crear la tabla orders que depende de clients y shippingaddress
CREATE TABLE IF NOT EXISTS orders (
  id_order int(10) AUTO_INCREMENT PRIMARY KEY,
  id_client int(10),
  id_address int(10),
  order_date date,
  total_amount DECIMAL(12, 4),
  CONSTRAINT Client_Ord FOREIGN KEY (id_client) 
            REFERENCES clients (id_client),
  FOREIGN KEY (id_address) REFERENCES shippingaddress (id_address)
);

-- Crear la tabla products que depende de categories
CREATE TABLE IF NOT EXISTS products (
  id_product int(10) AUTO_INCREMENT PRIMARY KEY,
  product_name varchar(40),
  unit_price decimal(12,4) CHECK(unit_price > 0),
  product_description VARCHAR(150),
  id_category INT(10),
  FOREIGN KEY (id_category) REFERENCES categories(id_category)
);

-- Crear la tabla orderDetails que depende de orders y products
CREATE TABLE IF NOT EXISTS orderDetails (
  id_order int(10),
  id_product int(10),
  unit_price decimal(12,4),
  quantity smallint(5),
  discount double,
  CONSTRAINT PRIMARY_KEY PRIMARY KEY(id_order, id_product),
  CONSTRAINT ord_det FOREIGN KEY (id_order) REFERENCES orders (id_order),
  CONSTRAINT det_pro FOREIGN KEY (id_product) REFERENCES products (id_product)
);

-- Crear la tabla inventory que depende de products
CREATE TABLE IF NOT EXISTS inventory (
  id_inventory INT(10) PRIMARY KEY AUTO_INCREMENT,
  id_product INT(10),
  size VARCHAR(20) NOT NULL,
  available_quantity INT NOT NULL CHECK(available_quantity >= 0),
  FOREIGN KEY (id_product) REFERENCES products(id_product)
);

-- Crear la tabla PRODUCTIMAGES que depende de products
CREATE TABLE IF NOT EXISTS productimages(
  id_product_image INT(10) PRIMARY KEY AUTO_INCREMENT,
  id_product INT(10),
  product_image_route VARCHAR(150) NOT NULL,
  FOREIGN KEY (id_product) REFERENCES products(id_product)
);

-- Insertar datos en la tabla categories
INSERT INTO categories (category_name) VALUES ("Jeans"), ("Playeras");

-- Insertar datos en la tabla PRODUCTS
INSERT INTO products (product_name, unit_price, product_description, id_category)
VALUES 
("Jean Khaki", 500, "Jean de color Khaki", 1),
("Jeans Slim Azul Medio", 319, "Jeans slim con pretina sencilla, cinco bolsillos cierre frontal con botón y cremallera.", 1),
("Jeans Cargo Azul", 349, "Jeans slim cargo con pretina sencilla y bolsillos diagonales.", 1),
("Jogger Negro", 349, "Jogger de color negro con bolsillos diagonales", 1),
("Jeans Rotos Negros", 339, "Jeans slim con pretina sencilla, cierre frontal con botón y cremallera.", 1),
("Jeans Cargo Negro", 349, "Jeans cargo con bolsillos diagonales.", 1),
("Jeans Slim Azul Medio", 319, "Jeans slim con pretina sencilla, cinco bolsillos cierre frontal con botón y cremallera.", 1),
("Jeans Cargo Azul", 349, "Jeans slim cargo con pretina sencilla y bolsillos diagonales.", 1);

-- Insertar datos en la tabla PRODUCTIMAGES
INSERT INTO productimages (id_product, product_image_route) VALUES
(1, "Images/Jeans/Male/MJeans1/MJeans1Principal.png"),
(2, "Images/Jeans/Male/MJeans2/MJeans2Principal.png"),
(3, "Images/Jeans/Male/MJeans3/MJeans3Principal.png"),
(4, "Images/Jeans/Male/MJeans4/MJeans4Principal.png"),
(4, "Images/Jeans/Male/MJeans4/MJeans4_1.png"),
(4, "Images/Jeans/Male/MJeans4/MJeans4_2.png"),
(5, "Images/Jeans/Male/MJeans5/MJeans5Principal.png"),
(5, "Images/Jeans/Male/MJeans5/MJeans5_1.png"),
(5, "Images/Jeans/Male/MJeans5/MJeans5_2.png"),
(5, "Images/Jeans/Male/MJeans5/MJeans5_3.png"),
(5, "Images/Jeans/Male/MJeans5/MJeans5_4.png"),
(6, "Images/Jeans/Female/FJeans1/FJeans1Principal.png"),
(6, "Images/Jeans/Female/FJeans1/FJeans1_1.png"),
(6, "Images/Jeans/Female/FJeans1/FJeans1_2.png"),
(6, "Images/Jeans/Female/FJeans1/FJeans1_3.png"),
(7, "Images/Jeans/Female/FJeans2/FJeans2Principal.png"),
(8, "Images/Jeans/Female/FJeans3/FJeans3Principal.png");

