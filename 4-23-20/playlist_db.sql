drop database if exists db_great_buy; 
CREATE DATABASE db_great_buy;
use db_great_buy;

CREATE TABLE auction (name VARCHAR(20), 
id integer not null Auto_Increment, 
        items_available BOOLEAN, 
        number_bids CHAR(20), 
        bids VARCHAR(5),
        primary key (id)
        );