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
	var tchaus = ["falou", "flw", "falow", "tchau", "adeus"];
	var gots = ["daenerys", " got", "game of thrones", "jon snow"];
    var respostasGot = ['Amo a Daenerys, traçava ela todinha','Eu só gosto de Game of Thrones pq os nórdicos são muito macho. Dá até orgulho de ver uma geração dessa',
			    'Casa Lannister é coisa de viado, vocês sabem, né?','Game of Thrones acabou do jeitinho que tinha que acabar', 
				'Adorei esse final','Eu gosto da série da HBO pq tem tudo que um homem pode gostar: violência e peitos'];         
	var x = Math.random()*100+1;
	var randomGot = Math.floor(Math.random() * respostasGot.length);
	var homofobia = ['homofobia não é crime, é bom senso', 'odiar gays não é preconceito, é inevitável', 'eu não sou homofóbico. Homofobia é crime e cadeia é coisa de viado'];
    var randomGay = Math.floor(Math.random() * homofobia.length);
	
	if (msg.text.toString().toLowerCase().includes(msg == 'oi' || msg == 'olá' || msg == 'e aí' || msg == 'ola')){ //MENSAGENS DE OI
		if (x <50) {bot.sendMessage(msg.chat.id,"Fala meu leitão véio")}
		if (x >=50) {bot.sendMessage(msg.chat.id, "Coé, chapa")}
		return;
	}
	if (msg.text.toString().toLowerCase().includes(msg == 'fui' || msg == 'adeus' || msg == 'tchau' || msg == 'falou')){ //MENSAGENS DE TCHAU
		if (x <50) {bot.sendMessage(msg.chat.id,"Até a próxima, pela saco")}
		if (x >=50) {bot.sendMessage(msg.chat.id, "Vá curtir a praia de Copacabana, manin. Sem Kaô")}
		return;
	    }
    }
	for (var i = 0; i < gots.length; i++){ //MENSAGENS DE GOT
        if (msg.text.toString().toLowerCase().includes(gots[i])){
		bot.sendMessage(msg.chat.id, respostasGot[randomGot])
		return;	
	   }
    }
	if(msg.from.id=='91863978'){ //QUANDO O IGOR RESPONDE
		if(x < 15){bot.sendMessage(msg.chat.id, 'Ih, lá vem a poc...')}
		if(x > 85){bot.sendMessage(msg.chat.id, 'Igor, manda umas foto de peito e churrasco aí pra mim')}
        return;
	}
	if (msg.text.toString().toLowerCase().includes('homofobia' || 'homofóbico' || 'homofobico')){ //HOMOFOBIA
		bot.sendMessage(msg.chat.id, homofobia[randomGay])
		return;	
	}
});
