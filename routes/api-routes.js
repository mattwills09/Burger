
var express = require("express");

var router = express.Router();

var Character = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
        var newBurger = {
            burgers: data
        };
        console.log(newBurger);
        res.render("index", newBurger);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.create([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("Condition: ", condition);
    console.log(req.body.devoured);
    

    burger.update({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("Condition: ", condition);
    console.log(req.body.id);

    burger.delete(condition, function(result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;


    // console.log("Burger Data: ");
    // console.log(req.body);

    // Burger.create({
    //     burger_name: req.body.burger_name,
    //     devoured: false
    // }).then(function(results) {
    //     res.json(results);
    // });


    // app.update({
    //     devoured: req.body.devoured
    // }, condition, function(result) {
    //     if (result.changedRows == 0) {
    //         return res.status(404).end();
    //     } else {
    //         res.status(200).end();
    //     }
    // });
