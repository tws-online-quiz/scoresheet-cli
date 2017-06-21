let HomeCommand = require("./command/home_command");

class Router {
    constructor() {
        this.currentState = new HomeCommand();
    }

    route(cmd) {
        this.currentState = this.currentState.next(cmd);
        return this.currentState;
    }
}

module.exports = Router;