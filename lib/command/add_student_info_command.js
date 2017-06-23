let {scoreService} = require('../service/score_service');

let BaseCommand = require('./base_command');
let Message = require('../message');

class AddStudentInfoCommand extends BaseCommand {
    invoke(input) {
        let isSucceed = scoreService.addStudentInfo(input);
        if (isSucceed) {
            let HomeCommand = require("./home_command");
            this.next = new HomeCommand();
            return Message.STUDENT_INFO_ADDED + '\r\n' + Message.MENU;
        } else {
            this.next = new AddStudentInfoCommand();
            return Message.INVALID_STUDENT_INFO;
        }
    }
}

module.exports = AddStudentInfoCommand;