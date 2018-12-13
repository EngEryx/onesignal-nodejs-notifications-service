'use strict';
//export by default
module.exports = function (app) {
    // grab 
    var strain = require('../controllers/strain');
    var siteRoot = require('../routes/root');

    // Site Index
    app.route('/', siteRoot);

    // Strains
    app.route('/strains')
        .get(strain.getAllItems);
};
