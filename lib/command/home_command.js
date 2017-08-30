let AddStudentInfoCommand = require("./add_student_info_command");
let PrintScoreSheetCommand = require("./print_score_sheet_command");
let Command = require("./command");
let Message = require("../message");

class HomeCommand {
    invoke(cmd) {
        if (cmd === Command.MENU_ADD_STUDENT_INFO) {
            return {msg: Message.ADD_STUDENT_INFO, next: new AddStudentInfoCommand()};
        } else if (cmd === Command.MENU_PRINT_SCORE_SHEET) {
            return {msg: Message.PRINT_SCORE_SHEET, next: new PrintScoreSheetCommand()};
        } else if (cmd === Command.MENU_EXIT) {
            return {msg: '', next: null};
        }

        return {msg: Message.MENU, next: new HomeCommand()};
    }

}

module.exports = HomeCommand;