module.exports = {
    name: 'volume',
    aliases: ['vol'],
    async execute(client, command, message, args, Discord) {
        if (!message.member.voice.channel) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle('Error!')
                .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/attachments/530277667119824917/834815044381966457/nearbot.jpg')
                .setDescription('> You need to be in a voice channel to execute this command!')
        )
        if (args[0] > 100) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle('OMFG')
                .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/attachments/530277667119824917/834815044381966457/nearbot.jpg')
                .setDescription('> Who the heck are you trying to ear-r*pe?\nUse a value below 100!')
        )

        client.distube.setVolume(message, args[0]);
        message.channel.send(
            new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle('🔊  Volume updated!')
                .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/attachments/530277667119824917/834815044381966457/nearbot.jpg')
                .setDescription(`> The volume has been set to ${args[0]}`)
        )
    }
}