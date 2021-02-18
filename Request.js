const request = require('request');
 
_EXTERNAL_URL = 'https://tejandras-eval-test.apigee.net/basic_proxy';

const callExternalApiUsingRequest = (callback) => {
    request(_EXTERNAL_URL, { json: true }, (err, res, body) => {
    if (err) { 
        return callback(err);
     }
    return callback(body);
    });
}

module.exports.callApi = callExternalApiUsingRequest;