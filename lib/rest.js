var express = require('express');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({extended: true});
var phone = require('./phone');
var app = express();



var start = function start(port) {
    port = parseInt(port, 10);
    if (port < 1024 || port > 65535) throw new Error('port must be above 1024 and below 65535. Got ' + port);
    
    console.log('REST server listening on port', port);
    app.listen(port);
    return app;
};


app.post('/call/answer',
          //jsonParser,
          urlencodedParser,
          //phone.consoleAnswer,
          phone.getData,
          phone.record,
          //phone.recognize,
          //phone.redirect,
          phone.waitLong,
          //phone.introduce,
          phone.handleErrors
);

app.post('/call/record',
          //jsonParser,
          urlencodedParser,
          phone.consoleRecord,
          phone.getData,
          phone.record,
          phone.waitLong,
          phone.handleErrors
);

// app.post('/call/next',
//           jsonParser,
//           urlencodedParser,
//           phone.consoleNext,
//           phone.getData,
//           phone.)

app.post('/call/hangup',
          //jsonParser,
          urlencodedParser,
          phone.consoleHangup,
          phone.getData,
          phone.end,
          phone.handleErrors
);


module.exports = {
    start: start
};