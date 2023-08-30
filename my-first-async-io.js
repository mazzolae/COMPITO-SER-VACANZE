const fs = require('fs')
const filePath = process.argv[2];
fs.readFile(filePath, 'utf8', function (err, data) {
if (err) {
    console.error(err); 
    return;
}
const lines = data.split('\n');
const lineCount = lines.length - 1;
console.log(lineCount);
});