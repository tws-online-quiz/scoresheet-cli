let AddStudentInfoCommand = require("./add_student_info_command");
let Command = require("./command");
let BaseCommand = require("./base_command");

class HomeCommand extends BaseCommand {
    invoke(cmd) {
        if (cmd === Command.HOME) {
            this.next = new HomeCommand();
            return `1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`;
        } else if (cmd === Command.MENU_ADD_STUDENT_INFO) {
            this.next = new AddStudentInfoCommand();
            return '请输入学生信息（格式：姓名, 学号, 民族, 班级, 学科: 成绩, ...），按回车提交：';
        }
    }

}

module.exports = HomeCommand;