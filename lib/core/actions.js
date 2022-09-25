const { promisify } = require("util")
const download = promisify(require("download-git-repo"))

const open = require("open")
const { vueRepo } = require("../config/repo-config")
const {commandSpawn,execCommand} = require("../utils/terminal")

const createProjectAction = async (project) => {
   console.log("create now~");
   await download(vueRepo,project,{clone:true});

   const command = process.platform === "win32" ? "npm.cmd" : "npm"
   await commandSpawn(command,["install"],{cwd:`./${project}`})
// await execCommand('npm install', {cwd: `./${project}`});
   
    commandSpawn(command,["run","serve"],{cwd:`./${project}`})
    open("http://localhost:8080/")
}

const addConAction = (name,dest) => {
    
}

module.exports = {
    createProjectAction
}