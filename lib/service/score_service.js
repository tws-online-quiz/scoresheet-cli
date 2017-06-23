class ScoreService {
    constructor() {
        this.students = [];
    }

    addStudentInfo(studentInfo) {
        let studentObj = this.parse(studentInfo);
        if (this.validate(studentObj)) {
            this.students.push(studentObj);
            return true;
        }

        return false;
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
        if (numArray.length % 2 === 0) {
            return (numArray[Math.floor(numArray.length / 2)] + numArray[Math.floor(numArray.length / 2) - 1]) / 2;
        }
        return numArray[Math.floor(numArray.length / 2)];
    }

    validate(studentObj) {
        return studentObj.name
            && studentObj.studentID
            && studentObj.nation
            && studentObj.clazz
            && studentObj.score
            && studentObj.score.find((s) => s.subject === '数学').score
            && studentObj.score.find((s) => s.subject === '语文').score
            && studentObj.score.find((s) => s.subject === '英语').score
            && studentObj.score.find((s) => s.subject === '编程').score;
    }
}

module.exports = {
    scoreService: new ScoreService()
};