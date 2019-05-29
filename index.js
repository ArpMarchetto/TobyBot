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
	var Oi = "oi", "olá", "ola", "oie", "oier";
	var Tchau = "falou", "flw", "falow", "tchau", "adeus";
	var x = Math.random()*100+1;
	var GoT = "Daenerys", "GoT", "Game of Thrones";
	
	if (msg.text.toString().toLowerCase().indexOf(Oi) === 0) {
		if (x <=50) {bot.sendMessage(msg.chat.id,"Fala meu leitão véio")}
		if (x >50) {bot.sendMessage(msg.chat.id, "Coé, chapa")}
		return; }
		
	if (msg.text.toString().toLowerCase().indexOf(Tchau) === 0) {
		if (x <=50) {bot.sendMessage(msg.chat.id,"Até a próxima, pela saco")}
		if (x >50) {bot.sendMessage(msg.chat.id, "Vá curtir a praia de Copacabana, manin")}
		return; }
	
	if(msg.text.toString().toLowerCase().indexOf(GoT) === 0) {
	var vetor = ['Amo a Daenerys, traçava ela todinha','Eu só gosto de Game of Thrones pq os nórdicos são muito macho. Dá até orgulho de ver uma geração dessa',
			    'Casa Lannister é coisa de viado, vocês sabem, né?','Game of Thrones acabou do jeitinho que tinha que acabar', 'Adorei esse final','Eu gosto da série da HBO pq tem tudo que um homem pode gostar: violência e peitos']
				{bot.sendMessage(msg.chat.id, vetor[random1])}
		return;	}

	if(msg.text.toString().includes('homofobia'){
		var vetor = ['aaaa odeio gays']
		bot.sendMessage(vetor[random1])
		return; }
	}  
});
