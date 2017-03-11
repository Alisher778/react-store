PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE `Users` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `first_name` VARCHAR(255), `last_name` TEXT, `email` TEXT, `password` VARCHAR(255), `avatar` TEXT DEFAULT 'https://s3.amazonaws.com/my-final-store/users/avatar.png', `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);
INSERT INTO "Users" VALUES(1,'Admin','Admin','ali@example.com','sha1$9d5da158$1$67d750571083c74b1a33223be141351314c765c5','https://s3.amazonaws.com/my-final-store%2Fusers/1488986698062avatar.png','2017-03-08 15:24:58.362 +00:00','2017-03-08 15:24:58.362 +00:00');
INSERT INTO "Users" VALUES(2,'User','User2','a@m','sha1$b2b61de4$1$aea280db3eb55aafbb8d6c2a499f03f0acdf9e5e','https://s3.amazonaws.com/my-final-store%2Fusers/1489102781981product.jpg','2017-03-09 23:39:42.920 +00:00','2017-03-09 23:39:42.920 +00:00');
CREATE TABLE `Addresses` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `user_id` INTEGER, `full_name` VARCHAR(255), `street` TEXT, `apartment` TEXT, `city` VARCHAR(255), `state` VARCHAR(255), `zip` VARCHAR(255), `country` VARCHAR(255), `phone` VARCHAR(255), `note` TEXT, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);
INSERT INTO "Addresses" VALUES(1,1,'Alisher Musurmonov','1940 Ocean Avenue, 1K','1K','BROOKLYN','NY','11230','United States','9172934098','Be aware the husky dog ','2017-03-08 15:35:56.725 +00:00','2017-03-08 15:35:56.725 +00:00');
CREATE TABLE `Carts` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `user_id` INTEGER, `product_id` INTEGER, `product_name` VARCHAR(255), `product_image` TEXT, `product_info` TEXT, `product_price` VARCHAR(255), `product_quantity` INTEGER, `product_color` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);
INSERT INTO "Carts" VALUES(2,1,30,'Nike Explorer SL Mens Golf Shoes','https://s3.amazonaws.com/my-final-store%2Fproducts/1489022079285shoes4.jpg',NULL,'74.99',1,'select-color','2017-03-09 03:05:44.517 +00:00','2017-03-09 03:05:44.517 +00:00');
CREATE TABLE `Products` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `name` VARCHAR(255), `image` VARCHAR(255), `description` TEXT, `price` VARCHAR(255), `category` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);
INSERT INTO "Products" VALUES(30,'Nike Explorer SL Mens Golf Shoes','https://s3.amazonaws.com/my-final-store%2Fproducts/1489022079285shoes4.jpg','<h4>Product Details</h4>
<hr />
<section>
<h4>Nike Explorer SL Men&rsquo;s Golf Shoes</h4>
<ul>
<li>Athletic, low-profile design for optimum comfort and performance</li>
<li>Water-resistant uppers protect feet from the elements</li>
<li>Mid-foot webbing system offers additional support</li>
<li>Lightweight Phylon midsole for support and shock absorption</li>
<li>Rubber-integrated traction system on the outsole grips the turf</li>
<li>True to size</li>
</ul>
<h4>About Nike</h4>
<p>In the 1950s, nationally respected track and field coach Bill Bowerman experimented endlessly to find competitive edges for his athletes at the University of Oregon. When footwear companies ignored his innovations, he began to cobble shoes on his own. Soon one of his runners, Phil Knight, joined his efforts, and their first label, Blue Ribbon Sports, was born. Through the 1960s, the brand steadily gained popularity until they were able to upgrade from selling the shoes out of the back of a Plymouth to opening their first retail store in Santa Monica.</p>
<p>A short time later, they changed their company&rsquo;s name to Nike and adopted the legendary &ldquo;Swoosh&rdquo; insignia, replacing their former logo of a man running away from a diving falcon. One of the earliest pairs of Nike shoes gained fame thanks to waffle-style traction nubs on the outsole, an innovation inspired by Bowerman&rsquo;s waffle iron; today, almost all running shoes use this design. With this and other performance-enhancing designs, as well as endorsements from the greatest athletes of the day, Nike separated itself from competitors.</p>
</section>','74.99','shoe','2017-03-09 01:14:39.542 +00:00','2017-03-09 01:14:39.542 +00:00');
INSERT INTO "Products" VALUES(31,'baseball cap','https://s3.amazonaws.com/my-final-store%2Fproducts/1489022156015jew1.jpeg','<h4>Product Details</h4>
<hr />
<section>Hats come S/M or L/XL Flexi Fit baseball cap. Proud to be an American hat. 5% of all sales generated goes to the veterans association. Colors available in Navy Blue and Black</section>
<section></section>
<section></section>
<section></section>
<section></section>','17','accessory','2017-03-09 01:15:56.239 +00:00','2017-03-09 01:15:56.239 +00:00');
INSERT INTO "Products" VALUES(33,'Some Bag','https://s3.amazonaws.com/my-final-store%2Fproducts/1489096439159bag2.jpeg','<p>Not good bad but ....</p>','34.75','bag','2017-03-09 21:53:59.536 +00:00','2017-03-09 21:53:59.536 +00:00');
DELETE FROM sqlite_sequence;
INSERT INTO "sqlite_sequence" VALUES('Users',2);
INSERT INTO "sqlite_sequence" VALUES('Addresses',3);
INSERT INTO "sqlite_sequence" VALUES('Products',33);
INSERT INTO "sqlite_sequence" VALUES('Carts',5);
COMMIT;
