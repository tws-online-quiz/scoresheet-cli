let Router = require("./router");
let readlineSync = require("cli-interact");
let Command = require("./command/command");
let HomeCommand = require('./command/home_command');

class Client {
    start() {
        let router = new Router();
        let input = Command.HOME;
        let state = new HomeCommand();

        while (true) {
            let {msg, next} = router.handle(state, input);
            state = next;
            if (state === null) {
                break;
            }
            input = readlineSync.question(msg);
        }
    }
}

module.exports = Client;