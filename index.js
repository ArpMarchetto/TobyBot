const TelegramBot = require('node-telegram-bot-api');
const token = '862725699:AAEi2jR_obihgZByOGYEBQ4VBDfC0bFvpRE';
const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
         //significa que, ao receber mensagens, o bot vai fazer coisas
	      
	var Oi = "oi";
	if (msg.text.toString().toLowerCase().indexOf(Oi) === 0) {
	bot.sendMessage(msg.chat.id,"Olá, querido usuário");
	}
	
});

