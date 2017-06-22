let Router = require("./router");
let readlineSync = require("cli-interact");
let Command = require("./command/command");

module.exports = () => {
    let router = new Router();
    let input = Command.HOME;
    do {
        let view = router.handle(input);
        input = readlineSync.question(view);
    } while (input !== Command.MENU_EXIT);
};