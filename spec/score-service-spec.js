let {scoreService} = require('../lib/service/score_service');

describe('Score Service', () => {
    it('should calc median', () => {
        expect(scoreService.calcMedian([1, 2, 4])).toBe(2);
        expect(scoreService.calcMedian([3, 2, 1, 4])).toBe(2.5);
    });
});