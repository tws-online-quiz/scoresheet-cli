let Router = require("./router");

module.exports = () => {
    let router = new Router();
    let command = router.route("");
    let view = command.invoke();
    console.log(view);
}