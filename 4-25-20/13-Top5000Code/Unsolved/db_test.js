var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "L0u81W@72ibQ",
  database: "top_songsDB"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT artist FROM Top5000", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});