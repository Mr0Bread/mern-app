const express = require('express');
const router = express.Router();

class OriginRoute {
    constructor(ObjectCrud) {
        this.objectCrud = ObjectCrud;
        this.router = router;
    }

    setCreateOneRoute(url = '/add') {
        this.router.post(url, (req, res) => {
            this.objectCrud.addOne(req.body, res);
        })
    }

    setReturnAllRoute(url = '/') {
        this.router.get(url, (req, res) => {
            this.objectCrud.getAll(res);
        });
    }

    setUpdateOneRoute(url = '/edit') {
        this.router.post(url, (req, res) => {
            this.objectCrud.updateOne(req.body.id, req.body.params, res);
        })
    }

    setDeleteOneRoute(url = '/delete') {
        this.router.post(url, (req, res) => {
            this.objectCrud.deleteOne(req.body.id, res);
        })
    }

    setCRUD() {
        this.setCreateOneRoute();
        this.setReturnAllRoute();
        this.setUpdateOneRoute();
        this.setDeleteOneRoute();
    }

    setGetOneRoute(url = '/get') {
        this.router.post(url, (req, res) => {
            this.objectCrud.getOne(req.body.field, req.body.value, res);
        });
    }

    getRouter() {
        return this.router
    }
}

module.exports = OriginRoute