var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '$') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'amok':
                bot.sendMessage({
                    to: channelID,
                    message: 'Mekie!'
                });
				break
			case 'ola':
				bot.sendMessage({
					to:channelID,
					message: 'Oio gajo!'
			});
				break
			case 'teresa':
				bot.sendMessage({
					to:channelID,
					message : 'CHUPA TERESA! CHUPA TERESA! Queste gelado gostoso é feito de framboesa'
			});
				break
			case 'migui':
				bot.sendMessage({
					to:channelID,
					message : 'chuuuuuuupa Migui xDDDDDDDD'
				});
				break
			case 'F':
				bot.sendMessage({
					to:channelID,
					message : 'https://i.imgur.com/BPZVDKN.jpg'
				});
				break
			case 'approved':
                bot.sendMessage({
                    to: channelID,
                    message: 'https://i.imgur.com/Nqgn3eB.png'
                });
				break
				
            break;
            // Just add any case commands if you want to..
         }
     }
});