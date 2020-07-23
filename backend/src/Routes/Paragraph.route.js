const OriginRoute = require('./Origin/Origin.route');
const ParagraphCrud = require('../MongoDB/Models/Paragraph/Paragraph.crud');

class ParagraphRoute extends OriginRoute {
    constructor(ParagraphCrud) {
        super(ParagraphCrud);
    }
}

paragraphRoute = new ParagraphRoute(ParagraphCrud);
paragraphRoute.setCRUD();
paragraphRoute.setGetOneRoute();

module.exports = paragraphRoute.getRouter();