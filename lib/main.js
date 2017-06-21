let Router = require("./router");
let readlineSync = require("cli-interact");

module.exports = () => {
    let router = new Router();
    let command = router.route("");
    let view = command.invoke();
    readlineSync.question(view);
};