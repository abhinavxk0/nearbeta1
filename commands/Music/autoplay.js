module.exports = {
    name: 'autoplay',
    aliases: ['ap'],
    async execute(client, command, message, args, Discord){

        if (!message.member.voice.channel) return message.channel.lineReplyNoMention(
            new Discord.MessageEmbed()
                .setColor('#2f3136')
                .setDescription('You need to be in a voice channel to execute this command!')
        ).then(message => { message.delete({ timeout: 10000 }); })

        let mode = distube.toggleAutoplay(message);
        message.channel.lineReplyNoMention(
            new Discord.MessageEmbed()
            .setAuthor('Autoplay Mode')
            .setColor('#2f3136')
            .setDescription("Set autoplay mode to `" + (mode ? "On" : "Off") + "`")
        );

    }
}