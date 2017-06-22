let ScoreService = require('../service/score_service');

class AddStudentInfoCommand {
    constructor(studentInfo) {
        this.studentInfo = studentInfo;
    }


    invoke() {
        let HomeCommand = require("./home_command");
        new ScoreService().addStudentInfo(this.studentInfo);
        return '学生王大锤的成绩被添加' + '\r\n' + new HomeCommand().invoke();
    }
}

module.exports = AddStudentInfoCommand;