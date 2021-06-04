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
        .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/avatars/822424076491554827/701a8644d439896e81ab38824b0c395d.webp?size=4096')
        .setDescription(lyrics)
    );
    }
}   