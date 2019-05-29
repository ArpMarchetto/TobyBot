const TelegramBot = require('node-telegram-bot-api');
const token = '862725699:AAEi2jR_obihgZByOGYEBQ4VBDfC0bFvpRE';
const bot = new TelegramBot(token, {polling: true});



//For avoidong Heroku $PORT error
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});
app.set('port', (process.env.PORT || 5000));

bot.on('message', (msg) => {
     //O comando acima diz que o bot recebe mensagens
	 var Hi = "hi";
	if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
	bot.sendMessage(msg.chat.id,"Hello dear user");
	}  
	// Criou a variável Hi, que é quando o texto hi chegar ele vai responder Hello
});