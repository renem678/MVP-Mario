DROP DATABASE IF EXISTS mario_list_data;
CREATE DATABASE mario_list_data;

DROP TABLE IF EXISTS game_list;
CREATE TABLE game_list (
    id SERIAL, 
    game_id INTEGER,
    game_name VARCHAR(225),
    year_released INTEGER,
    url_info TEXT,
    votes TEXT
);


INSERT INTO game_list (game_id, game_name, year_released, url_info,votes) VALUES 
(1, 'Super Mario Bros', 1985,'1.jpg',''),
(2, 'Super Mario Bros 2', 1988,'2.jpg',''),
(3, 'Super Mario Bros 3', 1990,'3.jpg',''),
(4, 'Super Mario World', 1991,'4.jpg',''),
(5, 'Super Mario 64', 1996,'5.jpg',''),
(6,'Super Mario Galaxy', 2007,'6.jpg',''),
(7,'New Super Mario Bros U', 2012,'7.jpg',''),
(8,'Super Mario 3D World', 2013,'8.jpg',''),
(9,'Super Mario Odyssey', 2017,'9.jpg','');

DROP TABLE IF EXISTS character_list;
CREATE TABLE character_list (
    id SERIAL,
    char_name VARCHAR(225),
    url_info1 TEXT
);


INSERT INTO character_list (char_name, url_info1) VALUES
('Mario', 'a.jpg'),
('Luigi', 'b.jpg'),
('Princess Peach','c.jpg'),
('Toad','d.jpg'),
( 'Bowser','e.jpg'),
( 'Yoshi','f.jpg'),
( 'Toadette','g.jpg'),
('Wario','h.jpg'),
('Walugi','i.jpg'),
('Bowswer Jr','j.jpg'),
('King Bob-Omb','k.jpg'),
('Koopa Kid','l.jpg'),
('Boo','m.jpg'),
('Goomba','n.jpg'),
('Shy Guy','o.jpg');
