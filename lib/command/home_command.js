let GotoAddStudentInfoCommand = require("./goto_add_student_info_command");
let Command = require("./command");

class HomeCommand {
    invoke() {
        return `1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`;
    }

    next(cmd) {
        if (cmd === Command.HOME) {
            return this;
        }

        if (cmd === Command.MENU_ADD_STUDENT_INFO) {
            return new GotoAddStudentInfoCommand();
        }
    }
}

module.exports = HomeCommand;