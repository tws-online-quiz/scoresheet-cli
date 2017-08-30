let {scoreService} = require('../service/score_service');
let Message = require('../message');

class AddStudentInfoCommand {
    invoke(input) {
        let isSucceed = scoreService.addStudentInfo(input);
        if (isSucceed) {
            let HomeCommand = require("./home_command");
            let msg = Message.STUDENT_INFO_ADDED + '\r\n' + Message.MENU;
            return {msg, next: new HomeCommand()};
        } else {
            return {msg: Message.INVALID_STUDENT_INFO, next: new AddStudentInfoCommand()};
        }
    }
}

module.exports = AddStudentInfoCommand;