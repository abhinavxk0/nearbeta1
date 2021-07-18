module.exports = {
    name: 'volume',
    aliases: ['vol'],
    async execute(client, command, message, args, Discord) {
        if (!message.member.voice.channel) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#2f3136')
                .setTitle('Error!')
                .setDescription('You need to be in a voice channel to execute this command!')
        )
        if (args[0] > 200) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#2f3136')
                .setDescription('Use a value below 200!')
        )

        client.distube.setVolume(message, args[0]);
        message.lineReplyNoMention(`The volume has been set to ${args[0]}`)
    }
}