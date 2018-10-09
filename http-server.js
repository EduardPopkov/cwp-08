const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, resp) => {
  //console.log('0');
  parseBodyJson(req, (err, data) => {
    resp.statusCode = 200;
    resp.setHeader('Content-Type', 'application/json');

    writePathInFile(data);

    resp.end();
  });
});

//---------------------------------------------------
function writePathInFile(data) {
  fs.writeFileSync('./info.json', JSON.stringify(data));
}
//---------------------------------------------------

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});

function parseBodyJson(req, cb) {
  let body = [];

  req.on('data', function(chunk) {
    body.push(chunk);
  }).on('end', function() {
    body = Buffer.concat(body).toString();

    let params = JSON.parse(body);

    cb(null, params);
  });
}
