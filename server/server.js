"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, W-Requested-With ,Content-Type ,Accept');
    res.header('Access-Control-Allow-Methods', 'OPTIONS ,GET,POST,PUT,DELETE');
    if ('OPTIONS' == req.method) {
        res.sendStatus(200);
    }
    else {
        console.log('${req.ip} ${req.method}${req.url}');
        next();
    }
});
app.get('/', function (req, res) {
    res.send([{ message: 'hello world' ,ms:"ssdsf"}]);
});
app.listen(4201, '127.0.0.1', function () {
    console.log("server listening on port 4201 ");
});
