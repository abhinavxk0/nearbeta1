const { Client, Message, Util } = require('discord.js')

module.exports = {
    name: 'steal',
    aliases: ['add_emoji'],
    async execute(client, command, message, args, Discord) {

        if (!message.member.hasPermission("MANAGE_EMOJIS")) return 

        if (!args.length) return message.channel.send(
            new Discord.MessageEmbed()
                .setDescription('Please specify some emojis!')
                .setColor('#defafe')
        )
        for (const rawEmoji of args) {
            const parsedEmoji = Util.parseEmoji(rawEmoji);

            if (parsedEmoji.id) {
                const extension = parsedEmoji.animated ? ".gif" : ".png"
                const url = `https://cdn.discordapp.com/emojis/${parsedEmoji.id + extension}`
                message.guild.emojis.create(url, parsedEmoji.name)
                    .then((emoji) =>             message.channel.send(
                        new Discord.MessageEmbed()
                            .setAuthor('Successfully added emoji(s)!')
                            .setColor('#defafe')
                            .setImage(emoji.url)
                    ))
            }
        }
    }
}