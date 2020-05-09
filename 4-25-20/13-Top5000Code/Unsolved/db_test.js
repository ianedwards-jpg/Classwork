var mysql = require('mysql');
var inquirer = require('inquirer')
//mySQL connection
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "L0u81W@72ibQ",
  database: "top_songsDB"
});

function displayAllData ()  {
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM Top5000", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

}

const queryArtist = async () => {
    const artist = await inquirer.prompt ([
        {
            name: "artist_name", 
            type: "input", 
            message: "Which artist would you like to search?"
        }
    ])
    con.query("SELECT * FROM Top5000 WHERE artist = ?", [artist.artist_name,], function (err, result) {
        if (err) throw err;
        console.table(result);
        con.end()
      });

}

queryArtist()  

