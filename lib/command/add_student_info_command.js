let {scoreService} = require('../service/score_service');
let Message = require('../message');

class AddStudentInfoCommand {
    invoke(input) {
        let isSucceed = scoreService.addStudentInfo(input);
        if (isSucceed) {
            let msg = Message.STUDENT_INFO_ADDED + '\r\n' + Message.MENU;
            return {msg, next: 'HOME_COMMAND'};
        } else {
            return {msg: Message.INVALID_STUDENT_INFO, next: 'ADD_STUDENT_INFO_COMMAND'};
        }
    }
}

module.exports = AddStudentInfoCommand;