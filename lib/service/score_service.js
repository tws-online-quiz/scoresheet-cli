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
                score: subjectScore[1]
            });
        }
        return score;
    }
}

module.exports = ScoreService;