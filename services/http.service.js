const got = require('got');

exports.get = (url) => {
    return got(url);
}
