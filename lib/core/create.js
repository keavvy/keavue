const program = require("commander")
const {createProjectAction} = require("./actions")

const createCommands = () => {
    program
        .command("create <project> [others...]")
        .description("clone remote template into a folder")
        .action(createProjectAction) 
    program
        .command("addcpn <name>")
        .description("add vue component like: kea add NavBar")
        .action(createProjectAction)


}


module.exports = createCommands;