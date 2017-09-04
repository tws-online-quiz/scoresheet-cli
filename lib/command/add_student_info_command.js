let {scoreService} = require('../service/score_service');
let Message = require('../message');
let Command = require('./command');

class AddStudentInfoCommand {
    invoke(input) {
        let isSucceed = scoreService.addStudentInfo(input);
        if (isSucceed) {
            let msg = Message.STUDENT_INFO_ADDED + '\r\n' + Message.MENU;
            return {msg, next: Command.HOME};
        } else {
            return {msg: Message.INVALID_STUDENT_INFO, next: Command.ADD_STUDENT_INFO};
        }
    }
}

module.exports = AddStudentInfoCommand;
