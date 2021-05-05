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
        .setImage(video.thumbnail)
        .setColor('RED')
        .setDescription(`**[${video.link}](${video.link})**`)
        .setAuthor(video.author.name)
        .addField("Views", video.views.toLocaleString(), true)
        .addField("Duration", video.duration, true)

        return message.channel.send(embed)

    }
}