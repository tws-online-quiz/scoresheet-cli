let AddStudentInfoCommand = require("./add_student_info_command");
let PrintScoreSheetCommand = require("./print_score_sheet_command");
let Command = require("./command");
let BaseCommand = require("./base_command");
let Message = require("../message");

class HomeCommand extends BaseCommand {
    invoke(cmd) {
        if (cmd === Command.MENU_ADD_STUDENT_INFO) {
            this.next = new AddStudentInfoCommand();
            return Message.ADD_STUDENT_INFO;
        } else if (cmd === Command.MENU_PRINT_SCORE_SHEET) {
            this.next = new PrintScoreSheetCommand();
            return Message.PRINT_SCORE_SHEET;
        }

        this.next = new HomeCommand();
        return Message.MENU;
    }

}

module.exports = HomeCommand;