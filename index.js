#!/usr/bin/env node
console.log("keavue");
const program = require("commander");
const helpOptions = require("./lib/core/help")
const createCommands = require("./lib/core/create")

//check version
program.version(require("./package.json").version);

//options help
helpOptions();

//commands
createCommands();


program.parse(process.argv);