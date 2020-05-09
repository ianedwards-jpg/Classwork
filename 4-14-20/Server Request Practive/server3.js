const http=require("http");

 const PORT =7000;

 const PORT2=7500;

 function handleRequest(request, response){
     response.end("Path requested: " +request.url);
 }
 const server=http.createServer(handleRequest)
 const server2=http.createServer(handleRequest)
 
 server.listen(PORT,function(){
 console.log("Server listening on: http://localhost:" + PORT);
 server2.listen(PORT2,function(){
     console.log("i think this works on http://localhost:" + PORT2)
 })
});