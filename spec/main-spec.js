let sinon = require("sinon");
let readlineSync = require("cli-interact");

let main = require("../lib/main");
let Command = require("../lib/command/command");
let {scoreService} = require("../lib/service/score_service");

describe('main()', () => {
    beforeEach(() => {
        sinon.stub(readlineSync, 'question');
        scoreService.students = [];
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

    it('should add student info', () => {
        readlineSync.question.onFirstCall().returns(Command.MENU_ADD_STUDENT_INFO);
        readlineSync.question.onSecondCall().returns("王大锤, 001, 汉, 201701, 数学: 100, 语文: 90, 英语: 80, 编程: 70");
        readlineSync.question.onThirdCall().returns(Command.MENU_EXIT);
        main();
        expect(readlineSync.question.args.join().includes("学生王大锤的成绩被添加")).toBe(true);
    });

    it('should print main menu when add student info succeed', () => {
        readlineSync.question.onFirstCall().returns(Command.MENU_ADD_STUDENT_INFO);
        readlineSync.question.onSecondCall().returns("王大锤, 001, 汉, 201701, 数学: 100, 语文: 90, 英语: 80, 编程: 70");
        readlineSync.question.onThirdCall().returns(Command.MENU_EXIT);
        main();
        expect(readlineSync.question.lastCall.args.join().includes("请输入你的选择（1～3）：")).toBe(true);
    });

    it('should print score sheet', () => {
        readlineSync.question
            .onCall(0).returns(Command.MENU_ADD_STUDENT_INFO)
            .onCall(1).returns("王大锤, 001, 汉, 201701, 数学: 100, 语文: 90, 英语: 80, 编程: 70")
            .onCall(2).returns(Command.MENU_ADD_STUDENT_INFO)
            .onCall(3).returns("张小花, 002, 汉, 201701, 数学: 80, 语文: 100, 英语: 80, 编程: 90")
            .onCall(4).returns(Command.MENU_PRINT_SCORE_SHEET)
            .onCall(5).returns('001, 002')
            .onCall(6).returns(Command.MENU_EXIT);
        main();
        expect(readlineSync.question.lastCall.args.join()).toBe(`成绩单
姓名|数学|语文|英语|编程|平均分|总分 
========================
王大锤|100|90|80|70|85|340
张小花|80|100|80|90|87.5|350
========================
全班总分平均数：345
全班总分中位数：345`);
    });

    it('should ask to retry when add student info failed', () => {
        readlineSync.question
            .onCall(0).returns(Command.MENU_ADD_STUDENT_INFO)
            .onCall(1).returns("this_is_invalid_input")
            .onCall(2).returns("王大锤, 001, 汉, 201701, 数学: 100, 语文: 90, 英语: 80, 编程: 70")
            .onCall(3).returns(Command.MENU_EXIT);
        main();
        expect(readlineSync.question.thirdCall.args.join()).toBe('请按正确的格式输入（格式：姓名, 学号, 学科: 成绩, ...）：');
    });

    it('should ask to retry when input invalid menu', () => {
        let invalidMenuItem = 4;
        readlineSync.question
            .onCall(0).returns(invalidMenuItem)
            .onCall(1).returns(Command.MENU_EXIT);

        main();

        expect(readlineSync.question.secondCall.args.join()).toBe(`1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`);
    });
});
