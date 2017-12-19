"use strict";
var newman = require('newman');

newman.run({
    collection: require('./asturiashacking_collection.json'),
    globals: require('./asturiashacking_globals.json'),
    reporters: 'cli'
}, function (err) {
    if (err) { throw err;}

    var number_repos = require('./asturiashacking_globals.json').values.filter(select_commits)[0].value;
    console.log("The number of repositories is " + number_repos);
});

function select_commits(element) {
    return element.key == "number_commits";
}
