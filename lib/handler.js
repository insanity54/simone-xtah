var initial = function initial(err, res) {
    console.log('handler::initial');
};

var end = function end(err, res) {
    console.log('handler::end');
};


module.exports = {
    initial: initial,
    end: end
};