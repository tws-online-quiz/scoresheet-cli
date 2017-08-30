const AddStudentInfoCommand = require('./command/add_student_info_command');
const HomeCommand = require('./command/home_command');
const PrintScoreSheetCommand = require('./command/print_score_sheet_command');

class Router {
    constructor() {
        this.routes = [
            {
                key: 'ADD_STUDENT_INFO_COMMAND',
                command: new AddStudentInfoCommand()
            },
            {
                key: 'HOME_COMMAND',
                command: new HomeCommand()
            },
            {
                key: 'PRINT_SCORE_SHEET_COMMAND',
                command: new PrintScoreSheetCommand()
            }
        ];
    }

    handle(state, input) {
        let command = this.routes.find(route => route.key === state).command;
        return command.invoke(input);
    }
}

module.exports = Router;