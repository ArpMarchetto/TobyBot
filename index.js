var TelegramBot = require( 'node-telegram-bot-api' ),
    util = require('util'),
    express = require('express'),
    app     = express(),
    schedule = require('node-schedule');

var TOKEN = process.env.TELEGRAM_API;
var rule = new schedule.RecurrenceRule();
var bot = new TelegramBot( TOKEN, { polling: true } );

//For avoiding Heroku $PORT error
app.set('port', (process.env.PORT || 5000));
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});


bot.on('message', (msg) => {
     //O comando acima diz o que o bot faz quando recebe mensagens
	var Oi = "oi", "ola", "oie", "oier";
	var x = Math.random()*100+1;
	
	if (msg.text.toString().toLowerCase().indexOf(Oi) === 0) {
		if (x <50) {bot.sendMessage(msg.chat.id,"Fala meu leitão véio")}
		if (x >=50) {bot.sendMessage(msg.chat.id, "Coé, chapa")}
		return; } 
});
