const fs = require('fs')
const filePath = process.argv[2];
const fileContent = fs.readFileSync(filePath);
const fileContentStr = fileContent.toString();
const lines = fileContentStr.split('\n');
const lineCount = lines.length - 1;
console.log(lineCount); 