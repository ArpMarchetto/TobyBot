var TelegramBot = require( 'node-telegram-bot-api' ),
    util = require('util'),
    express = require('express'),
    app     = express(),
    schedule = require('node-schedule');

var TOKEN = process.env.TELEGRAM_API;
var rule = new schedule.RecurrenceRule();
var bot = new TelegramBot( TOKEN, { polling: true } );

app.set('port', (process.env.PORT || 5000));

//For avoidong Heroku $PORT error
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});

bot.on('message', function(msg){
  console.log('msg', msg);
});
