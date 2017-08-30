let Router = require("./router");
let readlineSync = require("cli-interact");
let Input = require("./input");

class Client {
    start() {
        let router = new Router();
        let input = Input.EMPTY;
        let state = 'HOME_COMMAND';

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