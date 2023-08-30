const mymodule = require('./mymodule.js');

const directory = process.argv[2];
const extension = process.argv[3];

mymodule(directory, extension, function(err, files) {
  if (err) {
    console.error(err);
    return;
  }

  files.forEach(function(file) {
    console.log(file);
  });
});