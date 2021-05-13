const lyricsFinder = require('lyrics-finder');

module.exports = {
    name: 'lyrics',
    async execute(client, command, message, args, Discord){

    // const lyrics = await solenolyrics.requestLyricsFor(args.join('')); 
    // const author = await solenolyrics.requestAuthorFor(args.join('')); 
    // const title = await solenolyrics.requestTitleFor(args.join('')); 
    // const pic = await solenolyrics.requestIconFor(args.join('')); 

    const lyrics = await lyricsFinder(args.join('')) || "Not Found!\n Usage - `-lyrics (artist), (title)`";
    
    message.channel.send(
        new Discord.MessageEmbed()
        .setColor('#d81b60')
        .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/attachments/530277667119824917/834815044381966457/nearbot.jpg')
        .setDescription(lyrics)
    );
    }
}   