module.exports = {
    name: 'drag',
    aliases: ['pull'],
    async execute(client, command, message, args, Discord) {

        if (!message.member.permissions.has("MANAGE_CHANNELS")) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('defafe')
                .setDescription(`You don't have \`MANAGE_CHANNELS\` permission.`))

        const member = message.mentions.members.first();
        if (!member) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('defafe')
                .setDescription('Mention a user to drag.')
        )

        if (!member.voice.channel) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('defafe')
                .setDescription('The member you mentioned is not in a voice channel.')
        )



        if (!message.member.voice.channel) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('defafe')
                .setDescription('You are not in a voice channel.')
        )

        member.voice.setChannel(message.member.voice.channel)
            .then(
                message.channel.send(
                    new Discord.MessageEmbed()
                        .setDescription(`${message.author} dragged ${member} to ${message.member.voice.channel}`)
                        .setColor('#defafe')
                )
            )

    }
}
