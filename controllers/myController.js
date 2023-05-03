const OneModel = require("../models/myModel");

//exports.inicio = (req, res) => {
//    res.status(200).render("index");
//}

const mongoose = require('mongoose');
const path = require("path")
const morgan = require("morgan")
const express = require('express')
const app = express()

const autoesquema = new mongoose.Schema({
    name: String
});

const automodel = mongoose.model("auto", autoesquema);
const auto = new automodel({name: "fifi"});
await auto.save();
console.log(auto.name);

app.listen(3000)
