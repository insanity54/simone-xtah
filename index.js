var nconf = require('nconf');
var rest = require('./lib/rest');
var phone = require('./lib/phone');

var port = process.env.PORT || 5000;

nconf.file('./config.json');


phone.start(
    nconf.get('PLIVO_ID'),
    nconf.get('PLIVO_TOKEN'),
    nconf.get('SITES')
);
rest.start(port);