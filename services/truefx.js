'use strict';

var request = require('request');

var frequency =  1000;
var url = 'http://webrates.truefx.com/rates/connect.html?f=csv';

const EventEmitter = require('events');

const tickEmitter = new EventEmitter();

setInterval(function() {
  request(url, function(err, response, body) {
    //console.log('authentication webrates api returned:',body)
    tickEmitter.emit('data', body);
  });
}, frequency);

module.exports = tickEmitter;
