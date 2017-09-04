let Router = require("./router");
let readlineSync = require("cli-interact");
let Input = require("./input");
let Command = require('./command/command');

class Client {
    start() {
        let router = new Router();
        let input = Input.EMPTY;
        let state = Command.HOME;

        while (true) {
            let {msg, next} = router.handle(state, input);
            state = next;
            if (state === Command.EXIT) {
                break;
            }
            input = readlineSync.question(msg);
        }
    }
}

module.exports = Client;
