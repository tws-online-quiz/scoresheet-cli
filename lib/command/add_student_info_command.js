let ScoreService = require('../service/score_service');

class AddStudentInfoCommand {
    constructor(studentInfo) {
        this.studentInfo = studentInfo;
    }

    invoke() {
        new ScoreService().addStudentInfo(this.studentInfo);
        return '学生王大锤的成绩被添加';
    }
}

module.exports = AddStudentInfoCommand;