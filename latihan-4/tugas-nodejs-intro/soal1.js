const fs = require('fs');

fs.readFile('data/fileTeks.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file : ', err);
    return;
  }
  console.log('File data :  ', data);
});