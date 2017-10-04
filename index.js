var tmp = require('tmp-promise');

module.exports = function withTmpDir(fn, opts) {

    opts = Object.assign({}, withTmpDir, opts);
    return function () {
    	var dir;
        return tmp.dir(opts)
            .tap(d => {
                dir = d;
            })
            .tap(d => fn(d.path))
            .tap(d => d.cleanup())
            .tapCatch(() => {
                console.log('Directory for failing test: ', dir.path);
            });
    };
};
module.exports.unsafeCleanup = true;
