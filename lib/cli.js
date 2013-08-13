(function () {
    var optimist = require('optimist'),
        openLocations = require('./openLocations');

    var argv = optimist
            .boolean('h')
            .alias('h', 'help')
            .default('h', false)
            .describe('h', 'show this help.')

            .argv;

    if (argv.h) {
        optimist.showHelp();
        return;
    }

    var projectName = argv._.shift();
    openLocations(projectName);
})();