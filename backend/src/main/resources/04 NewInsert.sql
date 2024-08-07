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
VALUES ("Jeans Skinny Negro", 299, "Jeans Skinny Push Up Negros", 1);
INSERT INTO PRODUCTS (product_name,unit_price, product_description, id_category)
VALUES ("Jeans Skinny Azul Claro", 279, "Jeans Skinny con tiro regular Azul Claro.", 1);
INSERT INTO PRODUCTS (product_name,unit_price, product_description, id_category)
VALUES ("Jeans Flare Mezclilla Azul", 329 , "Jeans Flare de Mezclilla Azul Obscuro.", 1);
INSERT INTO PRODUCTS (product_name,unit_price, product_description, id_category)
VALUES ("Jeans Carpintero Azul", 369 , "Jeans Carpimtero Azul Obscuro con 4 bolsillos y cadena.", 1);
INSERT INTO PRODUCTS (product_name,unit_price, product_description, id_category)
VALUES ("Playera ML Negra", 199 , "Playera Manga Larga Nirvana Negra", 2);
INSERT INTO PRODUCTS (product_name,unit_price, product_description, id_category)
VALUES ("Playera Corp Gris", 169 , "Playera Corp Manga Corta con nudo Gris", 2);
INSERT INTO PRODUCTS (product_name,unit_price, product_description, id_category)
VALUES ("Playera Top Negra", 159 , "Corp Top Negro Estapado Craneo", 2);
INSERT INTO PRODUCTS (product_name,unit_price, product_description, id_category)
VALUES ("Playera Estampada Negra", 149 , "Playera Manga Corta con Estampado de Corraje El Perro Cobarde Negra", 2);
INSERT INTO PRODUCTS (product_name,unit_price, product_description, id_category)
VALUES ("Playera MC Negra", 179 , "Playera Manga Corta con Texto en Puños Negra", 2);
INSERT INTO PRODUCTS (product_name,unit_price, product_description, id_category)
VALUES ("Playera Estampada Beige", 159 , "Playera Manga Corta con estampado de Bob Esponja Beige    ", 2);
INSERT INTO PRODUCTS (product_name,unit_price, product_description, id_category)
VALUES ("Playera Estampada Azul", 129 , "Playera Manga Corta con Estampado de Grafitis Azul", 2);
INSERT INTO PRODUCTS (product_name,unit_price, product_description, id_category)
VALUES ("Playera Estampada Verde", 119 , "Playera Manga Corta con Estampado Puerta F U Verde", 2);
INSERT INTO PRODUCTS (product_name,unit_price, product_description, id_category)
VALUES ("Playera Alien Verde", 119 , "Playera Manga Corta con Estampado de Alien Verde", 2);



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
(7,"Images/Jeans/Female/FJeans2/FJeans2_1.png");
(7,"Images/Jeans/Female/FJeans2/FJeans2_2.png");
(7,"Images/Jeans/Female/FJeans2/FJeans2_3.png");
(7,"Images/Jeans/Female/FJeans2/FJeans2_4.png");
(8,"Images/Jeans/Female/FJeans3/FJeans3Principal.png");
(8,"Images/Jeans/Female/FJeans3/FJeans3_1.png");
(8,"Images/Jeans/Female/FJeans3/FJeans3_2.png");
(8,"Images/Jeans/Female/FJeans3/FJeans3_3.png");
(9,"Images/Jeans/Female/FJeans4/FJeans4Principal.png");
(9,"Images/Jeans/Female/FJeans4/FJeans4_1.png");
(9,"Images/Jeans/Female/FJeans4/FJeans4_2.png");
(9,"Images/Jeans/Female/FJeans4/FJeans4_3.png");
(10,"Images/Jeans/Female/FJeans5/FJeans5Principal.png");
(10,"Images/Jeans/Female/FJeans5/FJeans5_1.png");
(10,"Images/Jeans/Female/FJeans5/FJeans5_2.png");
(10,"Images/Jeans/Female/FJeans5/FJeans5_3.png");
(11,"Images/Shirt/Female/FShirt1/FShirt1Principal.png");
(11,"Images/Shirt/Female/FShirt1/FShirt1_1.png");
(11,"Images/Shirt/Female/FShirt1/FShirt1_2.png");
(11,"Images/Shirt/Female/FShirt1/FShirt1_3.png");
(12,"Images/Shirt/Female/FShirt2/FShirt2Principal.png");
(12,"Images/Shirt/Female/FShirt2/FShirt2_1.png");
(12,"Images/Shirt/Female/FShirt2/FShirt2_2.png");
(12,"Images/Shirt/Female/FShirt2/FShirt2_3.png");
(13,"Images/Shirt/Female/FShirt3/FShirt3Principal.png");
(13,"Images/Shirt/Female/FShirt3/FShirt3_1.png");
(13,"Images/Shirt/Female/FShirt3/FShirt3_2.png");
(13,"Images/Shirt/Female/FShirt3/FShirt3_3.png");
(14,"Images/Shirt/Female/FShirt4/FShirt4Principal.png");
(14,"Images/Shirt/Female/FShirt4/FShirt4_1.png");
(14,"Images/Shirt/Female/FShirt4/FShirt4_2.png");
(14,"Images/Shirt/Female/FShirt4/FShirt4_3.png");
(15,"Images/Shirt/Female/FShirt5/FShirt5Principal.png");
(15,"Images/Shirt/Female/FShirt5/FShirt5_1.png");
(15,"Images/Shirt/Female/FShirt5/FShirt5_2.png");
(15,"Images/Shirt/Female/FShirt5/FShirt5_3.png");
(16,"Images/Shirt/Male/MShirt1/MShirt1Principal.png");
(16,"Images/Shirt/Male/MShirt1/MShirt1_1.png");
(16,"Images/Shirt/Male/MShirt1/MShirt1_2.png");
(16,"Images/Shirt/Male/MShirt1/MShirt1_3.png");
(17,"Images/Shirt/Male/MShirt2/MShirt2Principal.png");
(17,"Images/Shirt/Male/MShirt2/MShirt2_1.png");
(17,"Images/Shirt/Male/MShirt2/MShirt2_2.png");
(17,"Images/Shirt/Male/MShirt2/MShirt2_3.png");
(18,"Images/Shirt/Memale/MShirt3/MShirt3Principal.png");
(18,"Images/Shirt/Memale/MShirt3/MShirt3_1.png");
(18,"Images/Shirt/Memale/MShirt3/MShirt3_2.png");
(18,"Images/Shirt/Memale/MShirt3/MShirt3_3.png");
(19,"Images/Shirt/Male/MShirt4/MShirt4Principal.png");
(19,"Images/Shirt/Male/MShirt4/MShirt4_1.png");
(19,"Images/Shirt/Male/MShirt4/MShirt4_2.png");
(19,"Images/Shirt/Male/MShirt4/MShirt4_3.png");
(20,"Images/Shirt/Male/MShirt5/MShirt5Principal.png");
(20,"Images/Shirt/Male/MShirt5/MShirt5_1.png");
(20,"Images/Shirt/Male/MShirt5/MShirt5_2.png");
(20,"Images/Shirt/Male/MShirt5/MShirt5_3.png");