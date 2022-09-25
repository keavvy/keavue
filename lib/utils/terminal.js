//exec terminal npm install
const { spawn,exec } = require("child_process")


const commandSpawn = (...args) => {
    return new Promise((resolve, reject) => {
        const childProcess = spawn(...args);
        childProcess.stdout.pipe(process.stdout);
        childProcess.stderr.pipe(process.stderr);
        childProcess.on("close", () => {
            resolve()
        })
    })
}

const execCommand = (...args) => {
    return new Promise((resolve, reject) => {
      exec(...args, (err, stdout, stderr) => {
        if (err) {
          reject(err);
          return;
        }
        console.log(stdout.replace('\n', ''));
        // console.log(stderr);
        resolve();
      })
    })
  }

module.exports = {
    commandSpawn,
    execCommand
}