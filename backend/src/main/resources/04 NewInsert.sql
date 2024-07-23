use Ecommerce;

INSERT INTO CATEGORIES (category_name) VALUES ("Jeans"),
("Playeras");

INSERT INTO PRODUCTS (product_name,unit_price, product_description, id_category)
VALUES ("Jean Khaki", 500, "Jean de color Khaki", 1);
INSERT INTO PRODUCTS (product_name,unit_price, product_description, id_category)
VALUES ("Jeans Slim Azul Medio", 319, "Jeans slim con pretina sencilla, cinco bolsillos cierre frontal con botón y cremallera.", 1);
INSERT INTO PRODUCTS (product_name,unit_price, product_description, id_category)
VALUES ("Jeans Cargo Azul", 349, "Jeans slim cargo con pretina sencilla y bolsillos diagonales.", 1);

INSERT INTO PRODUCTIMAGES (id_product, product_image_route) VALUES
(1,"Images/Jeans/Male/MJeans1/MJeans1Principal.png"),
(2,"Images/Jeans/Male/MJeans2/MJeans2Principal.png"),
(3,"Images/Jeans/Male/MJeans3/MJeans3Principal.png");




