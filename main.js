const TelegramBot = require('node-telegram-bot-api');
const token = '5824682629:AAEESg_yUlWXKIhHZ8hb0FGv9kBSr7rsLyI';

const sourceChatId = -1001658917150; 
const targetChatId = -1001819375133; 

const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  if (chatId === sourceChatId) {
    bot.forwardMessage(targetChatId, chatId, msg.message_id);
  }
});
