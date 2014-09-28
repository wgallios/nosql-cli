
var chalk = require('chalk');

var buildUsage = function () {
    var els = config.args;

    for (var i = 0; i < els.length; i++)
        if (els[i] !== '|') els[i] = chalk.bold.underline(els[i]);

    return els.join(' ');
};


module.exports = buildUsage();
