const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

// Prompt the user for their github username
inquirer
  .prompt({
    message: "Enter your GitHub username:",
    name: "username"
  })
  // Promise for when the user prompt is complete
  .then(function({ username }) {
    // Create the queryUrl string using the user name typed into the prompt
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
    
    // Async API call
    axios.get(queryUrl).then(function(res) {
      // Take the response and convert into a simple array of strings (repository names)
      const repoNames = res.data.map(function(repo) {
        return repo.name;
      });

      // Convert the array of repo name strings to a single string separated by newlines
      const repoNamesStr = repoNames.join("\n");

      // Write the repo list (string) to repos.txt
      fs.writeFile("repos.txt", repoNamesStr, function(err) {
        // If it fails to write throw the error and stop execution.
        if (err) {
          throw err;
        }

        console.log(`Saved ${repoNames.length} repos`);
      });
    });
  });
