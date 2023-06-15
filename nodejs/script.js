const http = require("http");
const say = require("./say");

console.log(say.date);
console.log(say.data);

http.createServer(function(request, response){
    response.end("Hello NodeJs")
}).listen(3000, "127.0.0.1", function(){
    console.log("server is running...");
});