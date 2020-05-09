DROP DATABASE IF EXISTS top_songsDB;
CREATE DATABASE top_songsDB;

USE top_songsDB;

CREATE TABLE Top5000(
  position INTEGER(10) NOT NULL,
	artist VARCHAR(100),
	song VARCHAR(100),
	year INTEGER,
	raw_total DECIMAL(10,4) NULL,
	raw_usa DECIMAL(10,4) NULL,
	raw_uk DECIMAL(10,4) NULL,
	raw_eur DECIMAL(10,4) NULL,
	raw_row DECIMAL(10,4) NULL,
	PRIMARY KEY (position)
);

select * from Top5000

LIMIT 10; 