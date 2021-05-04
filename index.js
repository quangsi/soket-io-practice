const express = require("express");
const socket =require('socket.io')
// App setup

var app = express();
var server=app.listen(4000,function(){
    console.log('listening on prt 4000');
})

// Static files.

app.use(express.static('public'))

// Socket setup 

var io = socket(server);


io.on('connection',function(){
    console.log('made socket connecton');
})