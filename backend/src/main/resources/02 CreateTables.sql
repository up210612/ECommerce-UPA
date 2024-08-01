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
