const fs = require('fs');
const path = require('path');
const directory = process.argv[2];
const filterExtension = process.argv[3];
fs.readdir(directory, function (err,files) {
    if (err) {
        console.error(err); 
        return; 
    }
    const filteredFiles = files.filter(function (file) {
        return path.extname(file) === '.' + filterExtension;
      });
    
      
      filteredFiles.forEach(function (file) {
        console.log(file);
      });
    });




