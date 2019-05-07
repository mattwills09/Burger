
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    },
    deleteOne: function(condition, cb) {
        orm.deleteOne("burgers", condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;



// var Sequelize = require("sequelize");
// var sequelize = require("../config/connection.js");

// //CREATES BURGER MODEL
// var Burger = sequelize.define("burger", {
//     // the routeName gets saved as a string
//     burger_name: Sequelize.STRING,
//     // the name of the character (a string)
//     devoured: Sequelize.BOOLEAN,
//   }, {
//     freezeTableName: true
// });
  
// // Syncs with DB
// Burger.sync();
  
// //MAKES BURGER MODEL AVAILABLE FOR FILES & MAKES TABLE
// module.exports = Burger;