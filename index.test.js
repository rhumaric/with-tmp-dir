const pstat = require('pify')(require('fs').stat);
const withTmpDir = require('./index');

describe('withTmpDir', () => {
    it('Provides a temporary directory', withTmpDir((d) => {
        return expect(pstat(d.path)).resolves.not.toBeUndefined();
    }));
});
