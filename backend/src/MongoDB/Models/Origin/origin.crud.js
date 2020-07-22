class OriginCrud {
    constructor(model) {
        this.model = model;
    }

    getAll(res) {
        this.model.find({}, (err, arr) => {
            if (err) {
                res.send(err);
            } else {
                res.send(arr)
            }
        })
    }

    getOne(field, value, res) {
        this.model.findOne({[field]: value}, (err, result) => {
            if (err) {
                res.send(err)
            } else {
                res.send(result);
            }
        });
    }

    addOne(params, res) {
        const newDoc = new this.model(params);

        newDoc.save((err) => {
            if (err) {
                res.send(err);
            } else {
                res.send('Success save');
            }
        });
    }
}

module.exports = OriginCrud;