module.exports = {
    name: 'volume',
    aliases: ['vol'],
    async execute(client, command, message, args, Discord) {
        if (!message.member.voice.channel) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#2f3136')
                .setTitle('Error!')
                
                .setDescription('> You need to be in a voice channel to execute this command!')
        )
        if (args[0] > 100) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#2f3136')
                .setTitle('OMFG')
                .setDescription('> Who the heck are you trying to ear-r*pe?\nUse a value below 100!')
        )

        client.distube.setVolume(message, args[0]);
        message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#2f3136')
                .setAuthor('🔊  Volume updated!')
                .setDescription(`> The volume has been set to ${args[0]}`)
        )
    }
}