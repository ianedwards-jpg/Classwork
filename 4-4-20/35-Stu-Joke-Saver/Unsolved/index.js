const fs = require("fs");
const util = require("util");
const axios = require("axios");

const appendFileAsync = util.promisify(fs.appendFile);
fs.appendFile('jokes.txt', 'data to append', (err) => {
  if (err) throw err;
  console.log('Jokes Appended');
});
const readFileAsync = util.promisify(fs.readFile);
fs.readFile('/etc/passwd', (err, data) => {
  if (err) throw err;
  console.log(data);
});

const config = { headers: { accept: "application/json" } };

axios.get("https://icanhazdadjoke.com/", config)
  .then(function(res) {

    console.log(res.data);
  });
