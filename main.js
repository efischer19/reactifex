#!/usr/bin/env node
var fs = require('fs');

var data = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
console.log("data parsed without error")
