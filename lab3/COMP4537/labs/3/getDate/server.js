const http = require('http');
const mo = require('./modules/utils.js');
let url = require('url');

http.createServer(function (req, res) {
    const url = req.url; 
    const method = req.method; 
  
    const host = req.headers.host;
    const fullUrl = `http://${host}${url}`;

    const myUrl = new URL(fullUrl);
    const params = new URLSearchParams(myUrl.search);
    const name = params.get('name');
    let currentTime = mo.getDate();
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`<p style='color: blue'>Hello ${name} what a beautiful day. Server
    current date and time is ${currentTime}.</p>`);

    res.write("<p>Response coming from server ...</p>");

    res.end();
}
).listen(5500);
console.log("listening...");

