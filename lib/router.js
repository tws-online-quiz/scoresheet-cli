let HomeCommand = require('./command/home_command');

class Router {
    constructor() {
        this.currentState = new HomeCommand();
    }

    handle(input) {
        let view = this.currentState.invoke(input);
        this.currentState = this.currentState.nextCommand();
        return view;
    }

    shouldExit() {
        return this.currentState === null;
    }
}

module.exports = Router;