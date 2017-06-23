let {scoreService} = require('../service/score_service');

let BaseCommand = require('./base_command');
let Message = require('../message');

class AddStudentInfoCommand extends BaseCommand {
    invoke(input) {
        let HomeCommand = require("./home_command");
        this.next = new HomeCommand();
        scoreService.addStudentInfo(input);
        return Message.STUDENT_INFO_ADDED + '\r\n' + Message.MENU;
    }
}

module.exports = AddStudentInfoCommand;