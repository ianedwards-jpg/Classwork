const fs = require("fs");
const util = require("util");
const axios = require("axios");

const appendFileAsync = util.promisify(fs.appendFile);
const readFileAsync = util.promisify(fs.readFile);

const config = { headers: { accept: "application/json" } };

axios
  // Async request to the API
  .get("https://icanhazdadjoke.com/", config)
  // Promise.then called when the API returns
  .then(function(res) {
    const { joke } = res.data;

    // Return the appendFileAsync response promise so we can chain to it later
    return appendFileAsync("jokes.txt", joke + "\n");
  })
  // Chained promise
  .then(function() {
    // Read the file and return a Promise when done
    return readFileAsync("jokes.txt", "utf8");
  })
  // Chain to the Promise returned from readFileAsync
  .then(function(data) {
    console.log("Saved dad jokes:");
    console.log(data);
  })
  // Catch any errors from the Promises returned
  .catch(function(err) {
    console.log(err);
  });
