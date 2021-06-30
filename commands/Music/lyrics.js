const lyricsFinder = require('lyrics-finder');

module.exports = {
    name: 'lyrics',
    async execute(client, command, message, args, Discord){

    const lyrics = await lyricsFinder(args.join('')) ||
    "Not Found!\n Usage - `-lyrics (artist), (title)`";
    
    message.channel.send(
        new Discord.MessageEmbed()
        .setColor('#defafe')
        .setDescription(lyrics)
    ).then(function(message){
        message.react('📜')
    })
    }
}   