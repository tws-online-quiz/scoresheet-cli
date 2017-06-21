let sinon = require("sinon");
let readlineSync = require("cli-interact");

let main = require("../lib/main");
let Command = require("../lib/command/command");

describe('main()', () => {
    beforeEach(() => {
        sinon.stub(readlineSync, 'question');
    });

    afterEach(() => {
        readlineSync.question.restore();
    });

    it('should display main menu once started', () => {
        readlineSync.question.returns(Command.MENU_EXIT);
        main();
        expect(readlineSync.question.args.join()).toBe(`1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`);
    });

    it('should exit', () => {
        readlineSync.question.returns(Command.MENU_EXIT);
        main();
        expect(readlineSync.question.calledOnce).toBe(true);
    });

    it('should go to add student info', () => {
        readlineSync.question.onFirstCall().returns(Command.MENU_ADD_STUDENT_INFO);
        readlineSync.question.onSecondCall().returns(Command.MENU_EXIT);
        main();
        expect(readlineSync.question.lastCall.args.join()).toBe("请输入学生信息（格式：姓名, 学号, 民族, 班级, 学科: 成绩, ...），按回车提交：");
    });

    xit('should add student info', () => {
        readlineSync.question.onFirstCall().returns(Command.MENU_ADD_STUDENT_INFO);
        readlineSync.question.onSecondCall().returns("王大锤, 001, 汉, 201701, 数学: 100, 语文: 90, 英语: 80, 编程: 70");
        readlineSync.question.onThirdCall().returns(Command.MENU_EXIT);
        main();
        expect(readlineSync.question.args.join().includes("学生王大锤的成绩被添加")).teBe(true);
    });
});
