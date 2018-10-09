const net = require('net');
const fs = require('fs');
const worker = require('./worker.js');

var clientCount = 0;

const server = net.createServer((client) => {
  console.log('---------- Client connected ----------');
  clientCount++;
  client.setEncoding('utf8');

  client.on('data', (req) => {
    let file = fs.readFileSync('./info.json', 'utf8');
    let info = JSON.parse(file);

    worker(clientCount--, info.filePath, info.randNum);
  });

  //client.on('end', () => console.log('Client disconnected'))
});

server.listen(1337, () => {
  console.log('Server listening port is 1337');
});
