var express = require('express'),
    Bourne = require('bourne'),
    bodyParser = require('body-parser'),

    db = new Bourne('data.json'),
    router = express.Router();

router
    

    .use(bodyParser.json())
    .route('/loanee')
       .get(function(req, res) {
        db.find({
            userId: parseInt(req.user.id, 10)
        }, function(err, data) {
            res.json(data);
        });

    })

    .post(function(req, res) {
        var loanee = req.body;
        loanee.userId = req.user.id;

        db.insert(loanee, function(err, data) {
            res.json(data);
        });

    });

router
    .param('id', function(req, res, next) {
        req.dbQuery = {
            id: parseInt(req.params.id, 10)
        };
        next();

    })

.route('/loanee/:id')
    .get(function( req, res) {
        db.findOne(req.dbQuery, function (err, data) {
            res.json(data);
        });
    })

    .put(function (req, res) {
        var loanee = req.body;
        delete loanee.$promise;
        delete loanee.$resolved;
        db.update(req.dbQuery, loanee, function (err, data) {
            res.json(data[0]);
        });
    })

    .delete( function(req, res) {
        db.delete(req.dbQuery, function () {
            res.json(null);
        });
    });

  module.exports = router;
