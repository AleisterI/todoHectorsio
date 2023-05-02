const OneModel = require("../models/myModel");

exports.inicio = (req, res) => {
    res.status(200).render("index");
}