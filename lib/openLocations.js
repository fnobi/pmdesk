var format = require('util').format,
    exec = require('child_process').exec,
    _ = require('underscore');

var data = {
    terminal: 'open -a terminal ~/Projects/<%= project_name %>',
    pictures: 'open ~/Pictures/<%= project_name %>',
    documents: 'open ~/Documents/<%= project_name %>',
    redmine: 'open https://project.kayac.com/redmine/projects/<%= project_name %>'
};

var openLocations = function (projectName) {
    var opts = {
        project_name: projectName
    };

    _.each(data, function (template, key) {
        exec(_.template(template, opts), function (err) {
            if (err) {
                return;
            }
            console.log('[open: ' + key + ']');
        });
    });
};

module.exports = openLocations;