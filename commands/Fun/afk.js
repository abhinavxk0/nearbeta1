const { Client, Message, MessageEmbed } = require('discord.js');
const { afk } = require('../../Collection')

module.exports = {
    name: 'afk',
    async execute(client, command, message, args, Discord){

        const reason = args.join(" ") || 'No Reason';

        afk.set(message.author.id, [
            Date.now(), reason
        ])
        message.channel.send(
            new Discord.MessageEmbed()
                .setDescription(`You are now AFK : | **${reason}** |`)
                .setColor('#defafe')
        )
          
    }
}