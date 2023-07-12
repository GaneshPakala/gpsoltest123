const http = require('http');

const hostname = '127.0.0.1';
const port = 9090;

//port - 3000 - pass - using
//port - 9000 - pass
//port - 21 - fails
//port - 443 - pass

const server = http.createServer((req,res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end('Hello from server\n');
});

server.listen(port,hostname,() => {
console.log(`Server running at http://${hostname}:${port}/`);
console.log("Consoles Hello World");
console.log("Consoles Hello World123");
});
