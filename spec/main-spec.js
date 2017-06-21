let sinon = require("sinon");
let readlineSync = require("cli-interact");

let main = require("../lib/main");

describe('main()', () => {

    it('should display main menu once started', () => {
        sinon.stub(readlineSync, 'question');
        main();
        expect(readlineSync.question.args.join()).toBe(`1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`);
    });
});
