const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

axios
  .get("https://api.github.com/users/${username}/repos?per_page=100")
  .then(function(res) {
    console.log(res.data);
  });


inquirer
  .prompt({
    message: "Enter your GitHub username",
    name: "username"
  })
  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
  });
