let AddStudentInfoCommand = require('./add_student_info_command');

class GotoAddStudentInfoCommand {
    invoke() {
        this.next = new AddStudentInfoCommand();
        return '请输入学生信息（格式：姓名, 学号, 民族, 班级, 学科: 成绩, ...），按回车提交：';
    }

    nextCommand() {
        return this.next;
    }
}

module.exports = GotoAddStudentInfoCommand;