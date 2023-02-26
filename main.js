const TelegramBot = require('node-telegram-bot-api');
const token = '6180581287:AAG-FXxzuR2edg-zs-n2gzlqXuYYyOZRT34'; // Reemplaza TU_TOKEN con el token que te proporcionó BotFather
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  let message = msg.text;
  message = message.replace('Alonso', 'Manzana');
  bot.sendMessage(msg.chat.id, message);
});

bot.on('polling_error', (error) => {
  console.log(error);
});

console.log('Bot is running...');
