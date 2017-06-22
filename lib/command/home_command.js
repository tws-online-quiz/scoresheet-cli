let AddStudentInfoCommand = require("./add_student_info_command");
let Command = require("./command");
let BaseCommand = require("./base_command");
let Message = require("../message");

class HomeCommand extends BaseCommand {
    invoke(cmd) {
        if (cmd === Command.HOME) {
            this.next = new HomeCommand();
            return Message.MENU;
        } else if (cmd === Command.MENU_ADD_STUDENT_INFO) {
            this.next = new AddStudentInfoCommand();
            return Message.ADD_STUDENT_INFO;
        }
    }

}

module.exports = HomeCommand;