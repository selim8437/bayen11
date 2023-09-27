"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var express = require("express");
var app = express.Router();
exports.routes = app;
app.get('/', function (req, res) { return res.send('Hello world'); });
app.get('/users', function (req, res) { return res.send('[]'); });
app.post('/users', function (req, res) { return res.send({ body: req.body }); });
