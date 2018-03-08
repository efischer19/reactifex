#!/usr/bin/env node
var fs = require('fs');

var inData = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));

var outData = {}
inData.forEach((message) => {
  outData[message["id"]] = message["defaultMessage"];
});
fs.writeFile(process.argv[3], JSON.stringify(outData, null, 2), 'utf8');
