const http = require('http');

const fs = require('fs');

const url = require('url');

const server = http.createServer((req, res) => {

    let parsedUrl = url.parse(req.url);
    
    switch (parsedUrl.pathname) {

        case '/':
            fs.readFile('./index.html', (err, data) => {
                res.end(data)
            });
            break;

        case '/login':
            fs.readFile('./login.html',(err, data) => {
                res.end(data);
            });
            break;

        case '/register':
            fs.readFile('./register.html', (err, data) => {
                res.end(data);
            });
            break;

        default:
            fs.readFile('./not_found.html', (err, data) => {
                res.end(data);
            });
            break;
    }
});

server.listen(3000, err => {
    if (!err){
        console.log('Listen_3000');
    } else {
        console.log('Error');
    }
});