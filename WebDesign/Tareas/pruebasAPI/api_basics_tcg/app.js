"use strict";
import express from 'express';

const PORT = 5000;
const app = express();
app.use(express.json());

let cards = [];

//Debe de regresar todas las cartas que estén almacenadas.
app.get("/cards", (req, res) => {
    if (cards.length === 0) {
        return res.status(404).json({ mensaje: "No hay cartas almacenadas" });
    }
    res.status(200).json(cards);
});

//Debe de regresar solo una carta en base a un ID
app.get("/cards/:id", (req, res) => {
    const id = req.params.id;
    const card = cards.find(card => card.id == id);
    if (card) {
        res.status(200).json(card);
    } else {
        res.status(404).json({ mensaje: "Carta no encontrada" });
    }
});

//Debe de recibir un json con las cartas nuevas que se van a agregar a la lista
app.post("/cards", (req, res) => {
    const newCards= req.body.cards;
    let cardsAdded= [];
    let cardsFailed= [];
    newCards.forEach(newCard => {
        if (!newCard.nombre || !newCard.costo_mana || !newCard.tipo || !newCard.cantidad) {
            cardsFailed.push({ card: newCard, error: 'Faltan uno o más atributos necesarios.' });
        } else if (cards.find(carta => carta.id == newCard.id)) {
            cardsFailed.push({ card: newCard, error: 'Una carta con el mismo ID ya existe.' });
        } else {
            cards.push(newCard);
            cardsAdded.push(newCard);
        } 
    });

    if (cardsFailed.length > 0) {
        res.status(400).json({
            mensaje: 'No se pudieron agregar todas las cartas.',
            agregadas: cardsAdded,
            errores: cardsFailed
        });
    } else {
        res.status(201).json({
            mensaje: "Todas las cartas agregadas correctamente.",
            agregadas: cardsAdded
        });
    }
});

//Debe de poder borrar una carta en base a su ID
app.delete("/cards/:id", (req, res)=>{
    const id= req.params.id;
    const index= cards.findIndex(card => card.id == id);
    if (index !== -1) {
        cards.splice(index, 1);
        res.status(200).json({ mensaje: "Carta eliminada correctamente" });
    } else {
        res.status(404).json({ mensaje: "La carta no existe" });
    }
});

//Debe de poder actualizar una carta en base a su ID
app.put("/cards/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = cards.findIndex(card => card.id === id);
    if (index === -1) {
        return res.status(404).json({ mensaje: "La carta no existe" });
    }
    const updatedCardDetails = req.body.cards[0];
    if (updatedCardDetails) {
        if (updatedCardDetails.nombre) cards[index].nombre = updatedCardDetails.nombre;
        if (updatedCardDetails.costo_mana) cards[index].costo_mana = updatedCardDetails.costo_mana;
        if (updatedCardDetails.tipo) cards[index].tipo = updatedCardDetails.tipo;
        if (updatedCardDetails.cantidad) cards[index].cantidad = updatedCardDetails.cantidad;
        res.status(200).json({ mensaje: "Carta actualizada correctamente", card: cards[index] });
    } else {
        res.status(400).json({ mensaje: "Detalles de la carta no proporcionados" });
    }
});




// Debe escuchar el servidor
app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});
