const program = require("commander")

const helpOptions = () => {
    //add options

    program.option("-k --kea","a keavvy vue cli");
    program.option("-d --dest <dest>","destination folder,  exp: -d /src/pages")
    

    program.on("--help",function() {
        console.log("");
        console.log("Others ");
        console.log("  other options");
    })
}

module.exports = helpOptions;