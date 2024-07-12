-- Base de datos: full
use ECOMMERCE;

CREATE TABLE clients (
  id_client int(10) AUTO_INCREMENT PRIMARY KEY,
  last_name varchar(20) NOT NULL,
  first_name varchar(10),
  celular varchar(10)
);

CREATE TABLE orders (
  id_order int(10) AUTO_INCREMENT PRIMARY KEY,
  id_client int(10),
  order_date date,
  CONSTRAINT Client_Ord FOREIGN KEY (id_client) 
            REFERENCES clients (id_client)
);

CREATE TABLE products (
  id_product int(10) AUTO_INCREMENT PRIMARY KEY,
  product_name varchar(40),
  unit_price decimal(12,4) check(unit_price > 0)
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
