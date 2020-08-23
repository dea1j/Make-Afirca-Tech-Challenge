const http = require("http");
const path = require("path");
const fs = require("fs");

http.createServer((req, res)=> {
    if(req.url == '/') {
        fs.readFile(path.join(__dirname, "public", "index.html"), (error, content) => {
            if(error) {
                throw error;
            }
            res.writeHead(200, {"Content-Type": "text/html" });
            res.write(content);
            res.end();
        });
    } else if(req.url == '/about') {
        res.write("<h1>About Page</h1>");
        res.end();
    } else {
        res.write("<h1>404 error (Page Not found)</h1>");
        res.end();
    }
}).listen(5500, ()=> {
    console.log("Server started")
})