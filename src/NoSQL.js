var chalk = require('chalk');

function NoSQL (db) {

    var _this = this;

    if (db === undefined)
        db = false;


    _this.db = db;
    _this.rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return this;
}


NoSQL.prototype.processLine = function (line) {

    var _this = this;


    if (!line)
        return false;

    line = line.toLowerCase();

    if (line == 'clear')
        C.clearScreen();
    else


        C.warn('Command not found!');

    return true;
};


NoSQL.prototype.startInput = function () {

    var _this = this;

    if (program.debug)
        console.log(chalk.green('Starting Input'));

    if (this.db)
        console.log('Database: %s', _this.db);

    _this.rl.on('line', function (line) {
        _this.processLine(line);
    });

    return true;
};


module.exports = NoSQL;
