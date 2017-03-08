PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE `Users` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `first_name` VARCHAR(255), `last_name` TEXT, `email` TEXT, `password` VARCHAR(255), `avatar` TEXT DEFAULT 'https://s3.amazonaws.com/my-final-store/users/avatar.png', `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);
INSERT INTO "Users" VALUES(1,'Admin','Admin','ali@example.com','sha1$9d5da158$1$67d750571083c74b1a33223be141351314c765c5','https://s3.amazonaws.com/my-final-store%2Fusers/1488986698062avatar.png','2017-03-08 15:24:58.362 +00:00','2017-03-08 15:24:58.362 +00:00');
CREATE TABLE `Addresses` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `user_id` INTEGER, `full_name` VARCHAR(255), `street` TEXT, `apartment` TEXT, `city` VARCHAR(255), `state` VARCHAR(255), `zip` VARCHAR(255), `country` VARCHAR(255), `phone` VARCHAR(255), `note` TEXT, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);
INSERT INTO "Addresses" VALUES(1,1,'Alisher Musurmonov','1940 Ocean Avenue, 1K','1K','BROOKLYN','NY','11230','United States','9172934098','Be aware the husky dog ','2017-03-08 15:35:56.725 +00:00','2017-03-08 15:35:56.725 +00:00');
CREATE TABLE `Carts` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `user_id` INTEGER, `product_id` INTEGER, `product_name` VARCHAR(255), `product_image` TEXT, `product_info` TEXT, `product_price` VARCHAR(255), `product_quantity` INTEGER, `product_color` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);
CREATE TABLE `Products` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `name` VARCHAR(255), `image` VARCHAR(255), `description` TEXT, `price` VARCHAR(255), `category` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);
INSERT INTO "Products" VALUES(2,'Simply Calphalon Kitchen Mug','https://s3.amazonaws.com/my-final-store%2Fproducts/14889881044067125196719_a09502a048_z.jpg','<div>
<h4>Product Details</h4>
<hr />
<section><strong>Features:</strong><br />The amazing new non-stick cookware set is irreplaceable help in the kitchen:<br />The aluminum construction and versatility of the set enhance the cooking experience;<br />The hard-ionized aluminum ensures even heat distribution and conductivity;<br />The interior surface has firm non-stick coating, which is designed for<br />Sticky sauces, caramel, and others;<br /><br /><strong>Specifications:</strong><br />Covers: tempered glass;<br />Not dishwasher safe;<br />Size: 10 piece;<br />Color: gray;<br />Material: aluminum with non-stick finish;<br />Product dimensions: 21.1 x 14.2 x 10.2 inches, 20.5 pounds<br /><br /><strong>Set includes:</strong><br />8-in. Omelette pan, 10-in. Omelette pan, 1-qt. Covered sauce pan, 2-qt. Covered sauce pan,&nbsp;<br />3-qt. Covered saute pan, 6-qt covered stock pot,&nbsp; 4pcs tempered glass lids</section>
</div>
<div data-bhw="DealFinePrint" data-bhw-path="FeaturedDeal|deal:2d271b04-171e-410b-9134-3cb2ded526d0|DealWriteUp|DealFinePrint">
<div class="t-pod fine-print ">
<h4>The Fine Print</h4>
<hr />
<div>
<p><span class="fine-print-description">This item is sold through the Groupon Store Sales Discount, operated by Sales.Discount. The merchant is solely responsible to purchasers for the fulfillment, delivery, care, quality, and pricing information of the advertised goods and services. This product is new. This is a <a href="https://www.groupon.com/stores-manage/policies/returns">FINAL SALE</a>; no returns or refunds unless defective. Offer is not eligible for promo codes, but is eligible for Groupon Bucks. Shipping and handling charges for the order will be $5.95. U.S. shipments only. Orders are typically delivered in 5-10 business days.</span> <span class="legal-disclosures-line2">Offer is not eligible for Groupon promo codes or other discounts.</span></p>
</div>
</div>
</div>','11.99','bag','2017-03-08 15:48:24.682 +00:00','2017-03-08 15:48:24.682 +00:00');
DELETE FROM sqlite_sequence;
INSERT INTO "sqlite_sequence" VALUES('Users',1);
INSERT INTO "sqlite_sequence" VALUES('Addresses',1);
INSERT INTO "sqlite_sequence" VALUES('Products',2);
COMMIT;
