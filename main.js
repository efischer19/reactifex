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

if (process.argv[3] === "--comments") {
  process.stdout.write("generating bash scripts...\n")
  var messageInfo = JSON.parse(fs.readFileSync(__dirname + "/bash_scripts/hashmap.json"));
  var scriptPath = __dirname + "/bash_scripts/put_comments.sh";
  fs.writeFileSync(scriptPath, "#!/bin/bash\n");
  fs.writeFileSync(scriptPath, "set -x\n");
  inData.forEach((message) => {
    var info = messageInfo.find(mi => mi.key == message.id)
    if (info) {
      var header = " -H \"Content-Type: application/json\""
      var escapedDescription = message.description.replace(/(["])/g, '\\\\\\$1')
      var data = " --data \"{\\\"comment\\\": \\\"" + escapedDescription + "\\\"}\""
      var url = " $1" + info.string_hash
      fs.appendFileSync(scriptPath, "curl -L -w \"\\n\" --user $SECRET_USER:$SECRET_PWD -X PUT" + header + data + url + "\n")
    } else {
      process.stdout.write("string " + message.id + " does not yet exist on transifex!\n");
    }
  });
  fs.writeFileSync(scriptPath, "set +x\n");
} else {
  fs.writeFileSync(process.argv[3], JSON.stringify(outData, null, 2));
}
