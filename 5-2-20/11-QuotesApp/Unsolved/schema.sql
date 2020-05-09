### Schema
CREATE DATABASE quotes_db;
USE quotes_db;

CREATE TABLE quotes
(
	id int NOT NULL AUTO_INCREMENT,
	author varchar(255) NOT NULL,
	chirp TEXT NOT NULL,
	time_created time,
	PRIMARY KEY (id)
);
