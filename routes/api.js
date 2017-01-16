'use strict'

var express = require('express');
var fs = require('fs');
var router = express.Router();

module.exports = router;

// router.get('/setup/video', function(req, res){
// 	res.render('setup-video');
// });

router.get('/', function(req, res) {
    res.render('login');
});

router.get('/home', function(req, res) {
    res.render('liveview');
});

router.get('/login', function(req, res) {
    res.render('login');
});

router.get('/liveview', function(req, res) {
    res.render('liveview');
});

router.get('/setup/video', function(req, res) {
    res.render('setup-video');
});

// read the values from config file for initing setup video
router.get('/setup-video', function(req, res) {
    fs.readFile('./data/video.json', 'utf8', function(err, data) {
        if (err) {
            res.end();
        } else {
            res.json(JSON.parse(data));
        }
    });
});

// read the values in default.video.json file
router.get('/setup/video/default', function(req, res) {
    fs.readFile('./data/default.video.json', 'utf8', function(err, data) {
        if (err) {
            res.end();
        } else {
            fs.writeFile('./data/video.json', data, function(err) {});
            res.json(JSON.parse(data));
        }
    });
    // lack to send for Viet
});

// update the values to video.json file
router.post('/setup/video/save', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    var data = {
        brightness: parseInt(req.body.brightness),
        contrast: parseInt(req.body.contrast),
        saturation: parseInt(req.body.saturation),
        sharpness: parseInt(req.body.sharpness),
        stream: req.body.stream,
        encode: req.body.encode,
        resolution: req.body.resolution,
        fps: parseInt(req.body.fps),
        bitrate: parseInt(req.body.bitrate)
    };
    fs.writeFile('./data/video.json', JSON.stringify(data), function(err) {});
    res.send(JSON.stringify(data));
});

router.get('/setup/lan', function(req, res) {
    res.render('setup-lan');
});

router.get('/setup/connection', function(req, res) {
    res.render('setup-connection');
});

router.get('/setup/others', function(req, res) {
    res.render('setup-others');
});
