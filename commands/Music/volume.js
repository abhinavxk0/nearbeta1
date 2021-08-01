module.exports = {
    name: 'volume',
    aliases: ['vol'],
    async execute(client, command, message, args, Discord) {
        if (!message.member.voice.channel) return message.channel.lineReplyNoMention(
            new Discord.MessageEmbed()
                .setColor('#2f3136')
                .setDescription('You need to be in a voice channel to execute this command!')
        ).then(message => { message.delete({ timeout: 10000 }); })

        if (args[0] > 200) return message.channel.lineReplyNoMention(
            new Discord.MessageEmbed()
                .setColor('#2f3136')
                .setDescription('Use a value below 200!')
        ).then(message => {message.delete({timeout:10000})})

        client.distube.setVolume(message, args[0]);
        message.lineReplyNoMention(
            new Discord.MessageEmbed()
            .setColor('#2f3136')
            .setAuthor(`Volume updated!`)
            .setDescription(`The volume has been set to ${args[0]}`)
        )
    }
}