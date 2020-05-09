CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE chirps 
(

'id' INT(11) AUTO_INCREMENT NOT NULL,
	'author' varchar(255) NOT NULL,
	'quote' TEXT NOT NULL,
  'body' TEXT NOT NULL,
  'created_at' DATETIME NOT NULL,
	PRIMARY KEY (id)
);