const https = require('https');

https.get('https://postimg.cc/xcmP6fsp', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const match = data.match(/https:\/\/i\.postimg\.cc\/[^"']+/);
    if (match) {
      console.log(match[0]);
    } else {
      console.log('No match found');
    }
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
