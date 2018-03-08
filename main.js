#!/usr/bin/env node
const path = require("path");
const fs = require("fs");

var combineInputs = (dir) => {
  // expected input: a directory containing subdirs, each of which contains displayMessages.json
  var ret = [];
  var subDirs = fs.readdirSync(dir);
  subDirs.forEach((subdir) => {
    var messageFile = path.join(dir, subdir, "displayMessages.json");
    var messages = JSON.parse(fs.readFileSync(messageFile));
    messages.forEach((message) => {ret.push(message);});
  });
  return ret;
};
var inData = combineInputs(process.argv[2]);

var outData = {};
inData.forEach((message) => {
  outData[message["id"]] = message["defaultMessage"];
});
fs.writeFileSync(process.argv[3], JSON.stringify(outData, null, 2));
