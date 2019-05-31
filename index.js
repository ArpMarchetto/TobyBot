var TelegramBot = require( 'node-telegram-bot-api' ),
    util = require('util'),
    express = require('express'),
    app     = express(),
    schedule = require('node-schedule');

var TOKEN = process.env.TELEGRAM_API; //Fazer TELEGRAM_API como uma VAR no Heroku.
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
	console.log(msg,msg);
	//var answers = 
	//var random = Math.floor(Math.random() * answers.length);			
	var x = Math.random()*100+1;
	
	if (msg.text.toLowerCase() == 'Mafagafo'){ //OPÇÕES - MAFAGAFO
	bot.sendMessage(msg.chat.id, "A Revista Mafagafo é uma publicação digital de contos e noveletas de fantasia e ficção científica. Mais do que isso, a Mafagafo foi criada com foco no processo editorial. O material enviado para submissão é a matéria-prima e a revista publicada é o produto final. Nossa proposta é trabalhar no que fica entre um e outro, o processo editorial sério, o preparo cuidadoso do texto através do trabalho em equipe.")
    let replyMarkup = bot.inlineKeyboard([
        [
            bot.inlineButton('Site e edições', {url: 'https://mafagaforevista.com.br/'}),
            bot.inlineButton('Twitter', {url: "https://twitter.com/mafagaforevista"})
        ], 
		[
            bot.inlineButton('Quero Publicar', {msg: 'Antes de tudo, é bom avisar que a Mafagafo publica contos e noveletas, o que significa que sua história precisa ter de 7,5 a 17,5 mil palavras. É o que tem a sua história? Ótimo! Então o próximo passo é verificar as datas e preparar o envio. Nessa etapa, você vai enviar o começo da sua hitória, separando um trecho entre 2 e 3 mil palavras. Você também vai precisar enviar a estimativa do número de palavras no texto final, o conceito bem resumido da sua história, um resumo do que deve acontecer do começo ao fim e uma apresentação sobre você - o que você faz? O que você busca com a escrita? Já publicou antes? Quais suas redes sociais? Já enviou tudo isso? Oba! Então agora é só esperar e torcer.'})
			bot.inlineButton('Catarse', {url: "https://www.catarse.me/mafagafo"})
        ]
		[
			bot.inlineButton('Retornar', {msg, "/info"})
		]
    ]);

	};
	
});
	

var informacoes = function(msg, match){
     bot.sendMessage(msg.chat.id, "Você quer receber mais informações sobre a Mafagafo? Clique em uma das opções abaixo: ", {
         "reply_markup": {
             "keyboard": [
                 ["Mafagafo", "Pio", "Faísca"],
                 ["Clube de Escrita"], ["Contribua no Catarse"]
             ]
            }
    })
};



var start = function (msg, match){
	bot.sendMessage(msg.chat.id, "Olá, tudo bem? Eu sou o Mafagabot - um tio postiço dos mafagafinhos. Para receber informações, digite '/info'.")
};

bot.onText( /\/start/, start);
bot.onText ( /\/info/, informacoes);
