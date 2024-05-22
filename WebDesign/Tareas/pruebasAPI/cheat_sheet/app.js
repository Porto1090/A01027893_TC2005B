"use strict"
import express from 'express';
import fs from 'fs';

const port= 4321;
const app= express();
let cards= [];

app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.redirect("/html_cheat_sheet");
});

app.get("/html_cheat_sheet", (req, res) => {
    res.sendFile("html_cheat_sheet.html", { root: "public/html" });
});

app.get("/css_cheat_sheet", (req, res) => {
    res.sendFile("css_cheat_sheet.html", { root: "public/html" });
});

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});