const ytsr = require('ytsr');
const { MessageEmbed } = require('discord.js');
const yts = require('yt-search');

module.exports = {
    name: 'youtube',
    async execute(client, command, message, args, Discord){
        const query = args.join(" ");
        
        if (!query) return message.channel.send("Please provide a search query!");

        const res = await ytsr(query).catch(e => {
            return message.channel.send("No results were found!")
        })
    const video = res.items.filter(i => i.type === 'video')[0]
        if (!video) return message.channel.send("No results were found!")

    const embed = new MessageEmbed()
        .setTitle(video.title)
        .setURL(video.url)
        .setImage(video.bestThumbnail.url)
        .setColor('#FF0000')
        .setAuthor(video.author.name)
        .setFooter(`👁‍🗨  ${video.views.toLocaleString()},  ⌚  ${video.duration}`)

        return message.channel.send(embed)

    }
}