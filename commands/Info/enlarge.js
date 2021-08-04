const { Message, Client, MessageEmbed, Util } = require('discord.js');

module.exports = {
    name: 'enlarge',
    aliases: ['large', 'el'],
    description: 'Enlarge an emoji!',
    execute(client, command, message, args, Discord) {
        if (!args.length) return message.reply({ content: `Please supply an emoji` })
        const emoji = args[0]
        const parsedEmoji = Util.parseEmoji(emoji)
        if (parsedEmoji.id) {

            const exe = parsedEmoji.animated ? ".gif" : ".png"
            const url = `https://cdn.discordapp.com/emojis/${parsedEmoji.id + exe}`
            const embed = new MessageEmbed()
                .setAuthor(`${parsedEmoji.name}`)
                .setImage(url)
                .setColor('#defafe')

            message.channel.send(embed)


        }
    }
}