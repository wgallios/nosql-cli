var chalk = require('chalk');

function Common () {

    return this;
}

Common.warn = function (msg, opts) {

    if (opts === undefined) opts = {};

    var line = (!opts.line) ? '' : ' ' + opts.line + ' - ';


    console.log('[Warning]:%s %s', line, chalk.bold.yellow(msg));
};

Common.clearScreen = function () {
    console.log('\033[2J');
};



module.exports = Common;
