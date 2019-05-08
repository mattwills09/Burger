
var mysql = require("mysql");

var connection;
  if (process.env.JAWSDB_URL) {
//Database is JawsDB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {
//Database is local
    connection = mysql.createConnection({
      port: 3306,
      host: "localhost",
      user: "root",
      password: "KendallJane87",
      database: "burgers_db"
    })
  };

  
//CONNECT TO DB
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
    console.log("connected as id " + connection.threadId);
});
  
//Export connection
module.exports = connection;



// var Sequelize = require("sequelize");

// // Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
// var sequelize = new Sequelize("burgers", "root", "", {
//   host: "localhost",
//   port: 3306,
//   dialect: "mysql",
//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000
//   }
// });

// // Exports the connection for other files to use
// module.exports = sequelize;
