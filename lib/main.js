let Router = require("./router");
let readlineSync = require("cli-interact");
let Command = require("./command/command");

module.exports = () => {
    let router = new Router();
    let input = Command.HOME;
    while(true) {
        let view = router.handle(input);
        if (router.shouldExit()) {
            break;
        }
        input = readlineSync.question(view);
    }
};