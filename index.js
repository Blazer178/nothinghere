const Commando = require('discord.js-commando');
const bot = new Commando.Client({
    commandPrefix: "bb/"
})
const TOKEN = ''

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

global.servers = {};

bot.on('message', function(message){
    if(message.content == 'Ping')
    {
        message.channel.sendMessage('Pong! [**Test Complete**]');
    }
});

bot.on('ready',function(){
    console.log("Ready!");
})

bot.login(TOKEN);