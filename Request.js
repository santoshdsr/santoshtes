const request = require('request');
 
_EXTERNAL_URL = 'https://santoshd-eval-test.apigee.net/retail/v1';

const callExternalApiUsingRequest = (callback) => {
    request(_EXTERNAL_URL, { json: true }, (err, res, body) => {
    if (err) { 
        return callback(err);
     }
    return callback(body);
    });
}

module.exports.callApi = callExternalApiUsingRequest;