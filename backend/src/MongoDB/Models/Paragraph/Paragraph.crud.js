const OriginCrud = require('../Origin/origin.crud');
const ParagraphModel = require('./Paragraph.model');

class ParagraphCrud extends OriginCrud {
    constructor(ParagraphModel) {
        super(ParagraphModel);
    }
}

module.exports = new ParagraphCrud(ParagraphModel)