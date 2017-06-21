let HomeCommand = require("./command/home_command");
let GotoAddStudentInfoCommand = require("./command/goto_add_student_info_command");
let Command = require("./command/command");

class Router {
    route(cmd) {
        if (cmd === Command.HOME) {
            return new HomeCommand();
        }

        if (cmd === Command.MENU_ADD_STUDENT_INFO) {
            return new GotoAddStudentInfoCommand();
        }
    }
}

module.exports = Router;