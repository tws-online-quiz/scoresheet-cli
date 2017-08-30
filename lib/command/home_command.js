let Input = require("./../input");
let Message = require("../message");

class HomeCommand {
    invoke(cmd) {
        if (cmd === Input.MENU_ADD_STUDENT_INFO) {
            return {msg: Message.ADD_STUDENT_INFO, next: 'ADD_STUDENT_INFO_COMMAND'};
        } else if (cmd === Input.MENU_PRINT_SCORE_SHEET) {
            return {msg: Message.PRINT_SCORE_SHEET, next: 'PRINT_SCORE_SHEET_COMMAND'};
        } else if (cmd === Input.MENU_EXIT) {
            return {msg: '', next: null};
        }

        return {msg: Message.MENU, next: 'HOME_COMMAND'};
    }

}

module.exports = HomeCommand;