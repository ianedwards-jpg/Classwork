// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORT = 8000;

var port2 = 8500; 

// Create a generic function to handle requests and responses
function handleRequestONE(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("It Works!! Path Hit: " + request.url);
}  

// Create a generic function to handle requests and responses
function handleRequestTWO(request, response) {

    // Send the below string to the client when the user visits the PORT URL
    response.end("It Works!! Path Hit: " + request.url);
  }  
  
// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequestONE);
var server2 = http.createServer(handleRequestTWO);

// Start our server so that it can begin listening to client requests.
server.listen(PORT, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

server2.listen(port2, function() {

    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + port2);
  });
  
