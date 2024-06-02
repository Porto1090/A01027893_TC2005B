USE db_pokemonTCG;

-- Insert data into player table

INSERT INTO player (firstName, lastName, email, password, score, deckID) 
VALUES
    ('Ash', 'Ketchum', 'ash@example.com', 'pikachu123', 90),
    ('Misty', 'Waterflower', 'misty@example.com', 'starmie456', 85),
    ('Brock', 'Rock', 'brock@example.com', 'onix789', 88),
    ('Gary', 'Oak', 'gary@example.com', 'eevee987', 95),
    ('May', 'Maple', 'may@example.com', 'torchic123', 92),
    ('Dawn', 'Dusk', 'dawn@example.com', 'piplup456', 87),
    ('Serena', 'Serenity', 'serena@example.com', 'fennekin789', 91),
    ('Cynthia', 'Champion', 'cynthia@example.com', 'garchomp987', 96),
    ('Red', 'Legend', 'red@example.com', 'charizard123', 94),
    ('Blue', 'Oak', 'blue@example.com', 'blastoise456', 89),
    ('Leaf', 'Green', 'leaf@example.com', 'venusaur789', 93),
    ('Ethan', 'Gold', 'ethan@example.com', 'typhlosion123', 90);

-- Insert data into deck table

INSERT INTO deck (deckName, playerID, creationDate)
VALUES
    ('Ash''s Deck', 1, '2021-01-01'),
    ('Misty''s Deck', 2, '2021-01-02'),
    ('Brock''s Deck', 3, '2021-01-03'),
    ('Gary''s Deck', 4, '2021-01-04'),
    ('May''s Deck', 5, '2021-01-05'),
    ('Dawn''s Deck', 6, '2021-01-06'),
    ('Serena''s Deck', 7, '2021-01-07'),
    ('Cynthia''s Deck', 8, '2021-01-08'),
    ('Red''s Deck', 9, '2021-01-09'),
    ('Blue''s Deck', 10, '2021-01-10'),
    ('Leaf''s Deck', 11, '2021-01-11'),
    ('Ethan''s Deck', 12, '2021-01-12');

-- Insert data into card table

INSERT INTO card (cardName, cardType, rarity, cardHealth, cardAttack, cardCost)
VALUES
    ('Pikachu', 'Pokemon', 'Common', 60, 50, 2),
    ('Starmie', 'Pokemon', 'Rare', 80, 70, 3),
    ('Onix', 'Pokemon', 'Uncommon', 100, 90, 4),
    ('Torchic', 'Pokemon', 'Uncommon', 50, 40, 2),
    ('Piplup', 'Pokemon', 'Rare', 70, 60, 3),
    ('Garchomp', 'Pokemon', 'Common', 120, 110, 5),
    ('Charizard', 'Pokemon', 'Rare', 110, 100, 5),
    ('Blastoise', 'Pokemon', 'Rare', 100, 90, 4),
    ('Venusaur', 'Pokemon', 'Rare', 90, 80, 3),
    ('Team Rocket', 'Trainer', 'Common', 0, 0, 1),
    ('Professor Oak', 'Trainer', 'Uncommon', 0, 0, 2),
    ('Fairy', 'Energy', 'Common', 0, 0, 1);

-- Insert data into deckCard table

INSERT INTO deckCard (deckID, cardID)
VALUES
    (1, 1),
    (2, 2),
    (3, 3),
    (4, 4),
    (5, 5),
    (6, 6),
    (7, 7),
    (8, 8),
    (9, 9),
    (10, 10),
    (11, 11),
    (12, 12);

-- Insert data into collection table

INSERT INTO collection (playerID, deckID, cardID)
VALUES
    (1, 1, 1),
    (2, 2, 2),
    (3, 3, 3),
    (4, 4, 4),
    (5, 5, 5),
    (6, 6, 6),
    (7, 7, 7),
    (8, 8, 8),
    (9, 9, 9),
    (10, 10, 10),
    (11, 11, 11),
    (12, 12, 12);

-- Insert data into game table

INSERT INTO game (player1, player2, collectionID, winner, gameDate, duration, type)
VALUES
    (1, 2, 1, 'Player1', '2021-01-01', '00:10:00', 'Single'),
    (3, 4, 2, 'Player2', '2021-01-02', '00:15:00', 'Double'),
    (5, 6, 3, 'Player1', '2021-01-03', '00:20:00', 'Single'),
    (7, 8, 4, 'Player2', '2021-01-04', '00:25:00', 'Single'),
    (9, 10, 5, 'Player1', '2021-01-05', '00:30:00', 'Double'),
    (11, 12, 6, 'Player2', '2021-01-06', '00:35:00', 'Single');
    (1, 2, 1, 'Player1', '2021-01-01', '00:10:00', 'Single'),
    (3, 4, 2, 'Player2', '2021-01-02', '00:15:00', 'Double'),
    (5, 6, 3, 'Player1', '2021-01-03', '00:20:00', 'Single'),
    (7, 8, 4, 'Player2', '2021-01-04', '00:25:00', 'Single'),
    (9, 10, 5, 'Player1', '2021-01-05', '00:30:00', 'Double'),
    (11, 12, 6, 'Player2', '2021-01-06', '00:35:00', 'Single');

-- Insert data into evolutions table

INSERT INTO Evolucion (cartaID, nombre)
VALUES 
    (2, 'Charmeleon'),
    (4, 'Ivysaur');
    (6, 'Gible');
    (8, 'Milotic');
    (10, 'Wartortle');
    (12, 'Quilava');
    (14, 'Grovyle');
    (16, 'Pidgeotto');
    (18, 'Kadabra');
    (20, 'Machoke');
    (22, 'Haunter');
    (24, 'Dragonair');

-- Insert data into abilities table
INSERT INTO abilities (cardID, abilityDescription)
VALUES 
    (1, 'Impactrueno'),
    (3, 'Pistola de Agua');
    (5, 'Gruñido');
    (7, 'Lanzallamas');
    (9, 'Hidrobomba');
    (11, 'Terremoto');
    (13, 'Lanzallamas');
    (15, 'Hojas Navaja');
    (17, 'Confusión');
    (19, 'Derribo');
    (21, 'Golpe Karate');
    (23, 'Hipnosis');







