let sinon = require("sinon");
let readlineSync = require("cli-interact");

let main = require("../lib/main");

describe('main()', () => {
    beforeEach(() => {
        sinon.stub(readlineSync, 'question');
    });

    afterEach(() => {
        readlineSync.question.restore();
    });

    it('should display main menu once started', () => {
        main();
        expect(readlineSync.question.args.join()).toBe(`1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`);
    });

    it('should go to add student info', () => {
        readlineSync.question.returns(1);
        main();
        expect(readlineSync.question.lastCall.args.join()).toBe("请输入学生信息（格式：姓名, 学号, 民族, 班级, 学科: 成绩, ...），按回车提交：");
    });
});
