let HomeCommand = require("./home_command");

class Router {
    route() {
        return new HomeCommand();
    }
}

module.exports = Router;