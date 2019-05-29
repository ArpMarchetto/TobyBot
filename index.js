const TelegramBot = require('node-telegram-bot-api');
const token = '862725699:AAEi2jR_obihgZByOGYEBQ4VBDfC0bFvpRE';
const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
     //O comando acima diz que o bot recebe mensagens
	 var Hi = "hi";
	if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
	bot.sendMessage(msg.chat.id,"Hello dear user");
	}  
	// Criou a variável Hi, que é quando o texto hi chegar ele vai responder Hello
});