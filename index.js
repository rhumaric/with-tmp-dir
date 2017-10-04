var tmp = require('tmp-promise');
var del = require('del');

module.exports = function withTmpDir(fn, opts) {

    opts = Object.assign({}, withTmpDir, opts);
    return function () {
    	var dir;
        return tmp.dir(opts)
            .tap(d => {
                dir = d;
            })
            .tap(fn)
            .tap(d => del(d.path))
            .tapCatch(() => {
                console.log('Directory for failing test: ', dir.path);
            });
    };
};

module.exports.template = 'tmp-XXXXXX';
