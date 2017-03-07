PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE `Products` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `name` VARCHAR(255), `image` TEXT, `description` TEXT, `price` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);
INSERT INTO "Products" VALUES(35,'Imac for sale','https://s3.amazonaws.com/my-final-store%2Fproducts/1488502088658imac.jpg',NULL,'1340','2017-03-03 00:48:08.899 +00:00','2017-03-03 00:48:08.899 +00:00');
INSERT INTO "Products" VALUES(36,'New product','https://s3.amazonaws.com/my-final-store%2Fproducts/14885025232224074128_orig.jpg',NULL,'23','2017-03-03 00:55:23.444 +00:00','2017-03-03 00:55:23.444 +00:00');
INSERT INTO "Products" VALUES(37,'Hot sale','https://s3.amazonaws.com/my-final-store%2Fproducts/1488502552887Product-Photography-Shanghai_-3.jpg',NULL,'45','2017-03-03 00:55:53.172 +00:00','2017-03-03 00:55:53.172 +00:00');
INSERT INTO "Products" VALUES(38,'I will delete you','https://s3.amazonaws.com/my-final-store%2Fproducts/1488502665782images.jpeg',NULL,'25','2017-03-03 00:57:45.937 +00:00','2017-03-03 00:57:45.937 +00:00');
INSERT INTO "Products" VALUES(39,'Lorem Ipsum','https://s3.amazonaws.com/my-final-store%2Fproducts/1488502697069images%20%281%29.jpeg',NULL,'57','2017-03-03 00:58:17.193 +00:00','2017-03-03 00:58:17.193 +00:00');
INSERT INTO "Products" VALUES(40,'Lorem Ipsum','https://s3.amazonaws.com/my-final-store%2Fproducts/1488502719584images%20%282%29.jpeg',NULL,'19','2017-03-03 00:58:39.798 +00:00','2017-03-03 00:58:39.798 +00:00');
INSERT INTO "Products" VALUES(41,'Lorem Ipsum','https://s3.amazonaws.com/my-final-store%2Fproducts/1488502796776images%20%283%29.jpeg',NULL,'2009','2017-03-03 00:59:56.963 +00:00','2017-03-03 00:59:56.963 +00:00');
INSERT INTO "Products" VALUES(42,'Lorem Ipsum','https://s3.amazonaws.com/my-final-store%2Fproducts/1488502813916images%20%284%29.jpeg',NULL,'699','2017-03-03 01:00:14.039 +00:00','2017-03-03 01:00:14.039 +00:00');
CREATE TABLE `Addresses` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `user_id` INTEGER, `full_name` VARCHAR(255), `street` TEXT, `apartment` TEXT, `city` VARCHAR(255), `state` VARCHAR(255), `zip` VARCHAR(255), `country` VARCHAR(255), `phone` VARCHAR(255), `note` TEXT, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `UserId` INTEGER REFERENCES `Users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE);
INSERT INTO "Addresses" VALUES(1,1,'Alisher Musurmonov','1940 Ocean Avenue, 1K','1K','BROOKLYN','NY','11230','United States','9172934098','defghn','2017-03-05 03:57:36.588 +00:00','2017-03-05 03:57:36.588 +00:00',NULL);
CREATE TABLE `Carts` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `user_id` INTEGER, `product_id` INTEGER, `product_name` VARCHAR(255), `product_image` TEXT, `product_info` TEXT, `product_price` VARCHAR(255), `product_quantity` INTEGER, `product_color` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `UserId` INTEGER REFERENCES `Users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE);
INSERT INTO "Carts" VALUES(1,1,36,NULL,NULL,NULL,NULL,1,'select-color','2017-03-05 17:09:51.402 +00:00','2017-03-05 17:09:51.402 +00:00',NULL);
INSERT INTO "Carts" VALUES(2,1,36,'New product','https://s3.amazonaws.com/my-final-store%2Fproducts/14885025232224074128_orig.jpg',NULL,'23',1,'select-color','2017-03-05 17:12:12.170 +00:00','2017-03-05 17:12:12.170 +00:00',NULL);
CREATE TABLE `Users` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `first_name` VARCHAR(255), `last_name` TEXT, `email` TEXT, `password` VARCHAR(255), `avatar` TEXT DEFAULT 'https://s3.amazonaws.com/my-final-store/users/avatar.png', `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);
INSERT INTO "Users" VALUES(1,'Alisher',NULL,'ali@example.com','sha1$b85dae4e$1$dc65838f138a7a0368ce3d874927c4e2cec9097d','https://s3.amazonaws.com/my-final-store%2Fusers/1488686142912images%20%283%29.jpeg','2017-03-05 03:55:43.290 +00:00','2017-03-05 03:55:43.290 +00:00');
INSERT INTO "Users" VALUES(2,'abe',NULL,'ali','sha1$0569fb36$1$9131ae7eed90b364ebd203acd146c883258a906e','https://s3.amazonaws.com/my-final-store%2Fusers/1488728175450images%20%281%29.jpeg','2017-03-05 15:36:15.675 +00:00','2017-03-05 15:36:15.675 +00:00');
DELETE FROM sqlite_sequence;
INSERT INTO "sqlite_sequence" VALUES('Products',42);
INSERT INTO "sqlite_sequence" VALUES('Users',2);
INSERT INTO "sqlite_sequence" VALUES('Addresses',1);
INSERT INTO "sqlite_sequence" VALUES('Carts',2);
COMMIT;