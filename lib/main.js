let Router = require("./router");
let readlineSync = require("cli-interact");

module.exports = () => {
    let router = new Router();
    let cmd = '';
    do {
        let command = router.route(cmd);
        let view = command.invoke();
        cmd = readlineSync.question(view);
    } while (cmd !== '3');
};