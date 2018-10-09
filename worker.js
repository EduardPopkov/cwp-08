const fs = require('fs');

var startProcess = function start(clientCount, pathFile, num) {
  console.log(pathFile + ' ' + num);
  if (pathFile === undefined || num === undefined) {
      console.log('error: pathFile or num are empty');
  } else {
      setInterval(function() {
        fs.appendFile(pathFile + clientCount + '.json', JSON.stringify(num), function (err, data) {
          console.log(`number is ${num} added in ${pathFile}${clientCount}.json`);
        });
      }, 2000);
  }
}

module.exports = startProcess;
