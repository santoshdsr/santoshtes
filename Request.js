const request = require('request');
 
_EXTERNAL_URL = 'https://api.enterprise.apigee.com/v1/organizations/sidgs-hybrid/apps';

const callExternalApiUsingRequest = (callback) => {
    request(_EXTERNAL_URL, { json: true }, (err, res, body) => {
    if (err) { 
        return callback(err);
     }
    return callback(body);
    });
}

module.exports.callApi = callExternalApiUsingRequest;