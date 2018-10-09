const fs = require('fs');

let pathFile = process.argv[2];

var numbers = [];

if (pathFile === undefined) {
    console.log('error: pathFile is empty');
} else {
    setInterval(function() {
      let rand = Math.floor(Math.random() * (5 - 1 + 1)) + 1;

      numbers.push(rand);

      fs.appendFile(pathFile, JSON.stringify(numbers), function (err, data) {
        console.log(`number is ${rand} added in ${pathFile}`);
      });      
    }, 1000 * Math.floor(Math.random() * (5 - 1 + 1)) + 1);
}
