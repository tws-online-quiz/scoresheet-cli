let fs = require("fs");

describe('main()', () => {

    it('should pass', () => {
      expect(fs.statSync("index.html").isFile()).toBe(true);
    });

});
