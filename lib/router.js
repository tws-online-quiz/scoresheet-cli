let HomeCommand = require("./home_command");
let GotoAddStudentInfoCommand = require("./goto_add_student_info_command");

class Router {
    route(cmd) {
        if (cmd === '') {
            return new HomeCommand();
        }

        if (cmd === '1') {
            return new GotoAddStudentInfoCommand();
        }
    }
}

module.exports = Router;