module.exports = {
    name: 'seek',
    async execute(client, command, message, args, Discord){

        if (!message.member.voice.channel) return message.lineReplyNoMention(
            new Discord.MessageEmbed()
                .setColor('#2f3136')
                .setDescription('You need to be in a voice channel to execute this command!')
        ).then(message => { message.delete({ timeout: 10000 }); })

        client.distube.seek(message, Number(args[0]));
    }
}