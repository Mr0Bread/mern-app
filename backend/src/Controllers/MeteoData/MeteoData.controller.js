const cheerio = require('cheerio');
const request = require('request');

class MeteoDataController {
    constructor() {
        request.post('http://www.lvceli.lv/cms/', {
            'login': 'demo',
            'password': 'demo',
            'sendImmediately': false

        }, (err, res, body) => {
            console.log(body);
        });
    }
}

module.exports = MeteoDataController;