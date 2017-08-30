let {scoreService} = require('../service/score_service');

class PrintScoreSheetCommand {
    invoke(input) {
        let HomeCommand = require('./home_command');
        let studentIDs = input.split(', ');
        let {scores, classAverageScore, classMedianScore} = scoreService.getScoreSheet(studentIDs);
        let scoreText = scores.map((s) => {
            return `${s.name}|${s.math}|${s.chinese}|${s.english}|${s.programming}|${s.averageScore}|${s.totalScore}`;
        }).join('\n');
        let msg = `成绩单
姓名|数学|语文|英语|编程|平均分|总分 
========================
${scoreText}
========================
全班总分平均数：${classAverageScore}
全班总分中位数：${classMedianScore}`;
        return {msg, next: new HomeCommand()};
    }
}

module.exports = PrintScoreSheetCommand;