const pstat = require('pify')(require('fs').stat);
const withTmpDir = require('./index');

describe('withTmpDir', () => {
    it('Provides a temporary directory', withTmpDir((path) => {
        return expect(pstat(path)).resolves.not.toBeUndefined();
    }));

    it('Passes configuration to tmp-promise', withTmpDir((path) => {
        expect(path).toMatch(/abc-/);
    }, { prefix: 'abc-' }));
});
