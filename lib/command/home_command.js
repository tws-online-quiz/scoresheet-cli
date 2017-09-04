let Input = require("./../input");
let Message = require("../message");
let Command = require('./command');

class HomeCommand {
    invoke(cmd) {
        if (cmd === Input.MENU_ADD_STUDENT_INFO) {
            return {msg: Message.ADD_STUDENT_INFO, next: Command.ADD_STUDENT_INFO};
        } else if (cmd === Input.MENU_PRINT_SCORE_SHEET) {
            return {msg: Message.PRINT_SCORE_SHEET, next: Command.PRINT_SCORE_SHEET};
        } else if (cmd === Input.MENU_EXIT) {
            return {msg: '', next: Command.EXIT};
        }

        return {msg: Message.MENU, next: Command.HOME};
    }

}

module.exports = HomeCommand;
