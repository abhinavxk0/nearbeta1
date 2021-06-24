module.exports = {
    name: 'pause',
    async execute(client, command, message, args, Discord) {
        if (!message.member.voice.channel) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#2f3136')
                .setTitle('Error!')
                
                .setDescription('> You need to be in a voice channel to execute this command!')
        )

        client.distube.pause(message);

        message.react('<:pauseplay:850345851523039252>');

    }
}