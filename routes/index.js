var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Student = require('../models/Student.js');
var Studentdemo = require('../models/Studentdemo.js');

/* GET ALL StudentS */

router.get('/', function(req, res, next) {
  Student.find({diaplay: "1"}, function(err, products) {
    if (err) return next(err);
    res.json(products);
});
});

router.get('/demo', function(req, res, next) {
  Studentdemo.find({diaplay: "1"}, function(err, products) {
    if (err) return next(err);
    res.json(products);
});
});

router.put('/', function(req, res, next) {
  var myquery = { diaplay: "1" };
  var newvalues = {$set: {diaplay: "0"} };
   Student.updateOne(myquery, newvalues, function(err, res) {
    if (err) return next(err);
    console.log("1 document updated");
   
  });
});


router.put('/demo', function(req, res, next) {
  var myquery = { diaplay: "1" };
  var newvalues = {$set: {diaplay: "0"} };
   Studentdemo.updateOne(myquery, newvalues, function(err, res) {
    if (err) return next(err);
    console.log("1 document updated");
   
  });
});

router.post('/demo', function(req, res, next) {
  console.log(req.body);
  console.log(typeof req.body);
  Studentdemo.create(req.body, function (err, post) {
    if (err){
      console.log(err)
    }
    res.json(post);
  });
});

router.post('/', function(req, res, next) {
	console.log(req.body);
	console.log(typeof req.body);
  Student.create(req.body, function (err, post) {
  	if (err){
  		console.log(err)
  	}
  	res.json(post);
  });
});

module.exports = router;
