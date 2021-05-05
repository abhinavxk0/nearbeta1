module.exports = {
    name: 'shuffle',
    aliases: [''],
    async execute(client, command, message, args, Discord) {
        if (!message.member.voice.channel) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle('Error!')
                .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/attachments/530277667119824917/834815044381966457/nearbot.jpg')
                .setDescription('> You need to be in a voice channel to execute this command!')
        )

        client.distube.shuffle(message);
        message.react('🔀');
    }
}