class ScoreService {
    constructor() {
        this.students = [];
    }

    addStudentInfo(studentInfo) {
        let studentObj = this.parse(studentInfo);
        this.students.push(studentObj);
    }

    parse(studentInfo) {
        let arr = studentInfo.split(', ');
        let name = arr[0];
        let studentID = arr[1];
        let nation = arr[2];
        let clazz = arr[3];
        let score = this.parseScore(arr);

        return {name, studentID, nation, clazz, score};
    }

    parseScore(arr) {
        let score = [];
        for (let i = 4; i < arr.length; i++) {
            let subjectScore = arr[i].split(': ');
            score.push({
                subject: subjectScore[0],
                score: parseFloat(subjectScore[1])
            });
        }
        return score;
    }

    getScoreSheet(studentIds) {
        let data = this.students.filter((s) => studentIds.includes(s.studentID));

        let scores = data.map((s) => {
            let name = s.name;
            let math = s.score.find((o) => o.subject === '数学').score;
            let chinese = s.score.find((o) => o.subject === '语文').score;
            let english = s.score.find((o) => o.subject === '英语').score;
            let programming = s.score.find((o) => o.subject === '编程').score;
            let totalScore = math + chinese + english + programming;
            let averageScore = totalScore / 4;
            return {name, math, chinese, english, programming, totalScore, averageScore};
        });

        let totalScores = scores.map((s) => s.totalScore);
        let classAverageScore = totalScores.reduce((a, b) => a + b, 0) / scores.length;
        let classMedianScore = this.calcMedian(totalScores);
        return { classAverageScore, classMedianScore, scores };
    }

    calcMedian(numArray) {
        numArray.sort();
        return (numArray[numArray.length / 2] + numArray[numArray.length / 2 - 1]) / 2;
    }
}

module.exports = {
    scoreService: new ScoreService()
};