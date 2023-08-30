const http = require('http');  
const urls = process.argv.slice(2);
const responseData = [];
function fetchData(url, callback) {
  http.get(url, function(response) {
    response.setEncoding('utf8');
    let data = '';
    response.on('data', function(chunk) {
      data += chunk;
    });
    response.on('end', function() {
      callback(null, data);
    });
    response.on('error', function(err) {
      callback(err);
    });
  });
}
for (let i = 0; i < urls.length; i++) {
  fetchData(urls[i], function(err, data) {
    if (err) {
      console.error('An error occurred:', err);
    } else {
      responseData[i] = data;   
      if (responseData.filter(Boolean).length === urls.length) {
        responseData.forEach(function(response) {
          console.log(response);
        });
      }
    }
  });
}
