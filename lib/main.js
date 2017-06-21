let Router = require("./router");
let readlineSync = require("cli-interact");
let Command = require("./command/command");

module.exports = () => {
    let router = new Router();
    let cmd = Command.HOME;
    do {
        let command = router.route(cmd);
        let view = command.invoke();
        cmd = readlineSync.question(view);
    } while (cmd !== Command.MENU_EXIT);
};