-- Examples of queries to be used in the database

SELECT * FROM player;

SELECT email FROM player WHERE score > 90;

SELECT * FROM deck WHERE creationDate > '2021-01-01';

SELECT * FROM card WHERE cardType = 'Pokemon' AND cardCost < 4;

SELECT * FROM deckCard WHERE deckID = 1;

SELECT * FROM collection WHERE playerID = 1;

SELECT firstName, lastName, COUNT(deckID) AS num_decks FROM deck GROUP BY playerID;

SELECT p.firstName, p.lastName, d.deckName, COUNT(dc.cardID) AS num_cards
FROM player p
JOIN deck d ON p.playerID = d.playerID
JOIN deckCard dc ON d.deckID = dc.deckID
GROUP BY d.deckID
ORDER BY num_cards DESC
LIMIT 1;

SELECT c.cardName
FROM player p
JOIN collection col ON p.playerID = col.playerID
JOIN card c ON col.cardID = c.cardID
WHERE p.firstName = 'Ash' AND p.lastName = 'Ketchum';

SELECT p.firstName, p.lastName
FROM player p
JOIN collection col ON p.playerID = col.playerID
JOIN card c ON col.cardID = c.cardID
WHERE c.cardName = 'Pikachu';

SELECT AVG(score) AS avg_score FROM player;

SELECT p.firstName, p.lastName, COUNT(*) AS num_games
FROM game g
JOIN collection col ON g.collectionID = col.collectionID
JOIN player p ON col.playerID = p.playerID
WHERE g.gameDate >= DATE_SUB(NOW(), INTERVAL 1 MONTH)
GROUP BY p.playerID
HAVING num_games > 5;
