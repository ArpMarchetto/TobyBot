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


bot.on('message', (msg) => {     //O comando acima diz o que o bot faz quando recebe mensagens
	console.log('msg','msg');
	
	var tchaus = ["falou", "flw", "falow", "tchau", "adeus"];
	var gots = ["daenerys", " got", "game of thrones", "jon snow"];
    var respostasGot = ['Amo a Daenerys, traçava ela todinha','Eu só gosto de Game of Thrones pq os nórdicos são muito macho. Dá até orgulho de ver uma geração dessa',
			    'Casa Lannister é coisa de viado, vocês sabem, né?','Game of Thrones acabou do jeitinho que tinha que acabar', 
				'Adorei esse final','Eu gosto da série da HBO pq tem tudo que um homem pode gostar: violência e peitos'];         
	var x = Math.random()*100+1;
	var randomGot = Math.floor(Math.random() * respostasGot.length);
	var homofobia = ['Homofobia não é crime, é bom senso', 'odiar gays não é preconceito, é inevitável', 
	'eu não sou homofóbico. Homofobia é crime e cadeia é coisa de viado', 'Eu odeio a palavra homofobia. Não é uma fobia. Porque eu teria medo de viado?', 'Deus fez os gays com o único propósito de queima-los.',
	'E eu lá tenho medo de viado, caraio?','Eu nem sou homofóbico. Inclusive, tenho alguns amigos gays','Não precisa ficar contando para todo mundo que você é gay','Não tenho nada contra, só não curto ver dois marmanjos se beijando'];
    var randomGay = Math.floor(Math.random() * homofobia.length);
	
	if (msg.text.toLowerCase() == 'oi' || msg.text.toLowerCase() == 'olá' || msg.text.toLowerCase() == 'e aí' || msg.text.toLowerCase() == 'ola'){ //MENSAGENS DE OI
		if (x <50) {bot.sendMessage(msg.chat.id,"Fala meu leitão véio")}
		if (x >=50) {bot.sendMessage(msg.chat.id, "Coé, chapa")}
		return;
	}
	if (msg.text.toLowerCase() == 'fui' || msg.text.toLowerCase() == 'adeus' || msg.text.toLowerCase() == 'tchau' || msg.text.toLowerCase() == 'falou'){ //MENSAGENS DE TCHAU
		if (x <50) {bot.sendMessage(msg.chat.id,"Até a próxima, pela saco")}
		if (x >=50) {bot.sendMessage(msg.chat.id, "Vá curtir a praia de Copacabana, manin. Sem Kaô")}
		return;
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
	if (msg.text.toLowerCase().includes('homofobia') || msg.text.toLowerCase().includes('homofóbico') || msg.text.toLowerCase().includes('homofobico')){ //HOMOFOBIA
		bot.sendMessage(msg.chat.id, homofobia[randomGay])
		return;	
	}
});

//rule.second = 25;
	var intMail = schedule.scheduleJob(rule, function(){
    //var answers = ["Carai, eu curto mesmo é uma brotheragem no banheiro", "Cês já fizeram um banheirão na estação? Só é zoado quando um zé ruela entra para atrapalhar"];
    var random1 = Math.floor(Math.random() * answers.length) ;
    var randomThing = answers[random1];
    bot.sendMessage("-1001259017807",randomThing);
});
