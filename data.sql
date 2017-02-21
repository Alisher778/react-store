PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE `Products` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `name` VARCHAR(255), `image` TEXT, `description` TEXT, `price` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);
INSERT INTO "Products" VALUES(1,'defkvrfn ','https://s3.amazonaws.com/my-final-store%2Fproducts/1487632866945CROPPED-20161030_093823.jpg,https://s3.amazonaws.com/my-final-store%2Fproducts/1487632866949CROPPED-2.jpg','cdvf','1','2017-02-20 23:21:07.770 +00:00','2017-02-20 23:21:07.770 +00:00');
DELETE FROM sqlite_sequence;
INSERT INTO "sqlite_sequence" VALUES('Products',1);
COMMIT;
