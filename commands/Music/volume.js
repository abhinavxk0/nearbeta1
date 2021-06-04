module.exports = {
    name: 'volume',
    aliases: ['vol'],
    async execute(client, command, message, args, Discord) {
        if (!message.member.voice.channel) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#2f3136')
                .setTitle('Error!')
                .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/avatars/822424076491554827/701a8644d439896e81ab38824b0c395d.webp?size=4096')
                .setDescription('> You need to be in a voice channel to execute this command!')
        )
        if (args[0] > 100) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#2f3136')
                .setTitle('OMFG')
                .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/avatars/822424076491554827/701a8644d439896e81ab38824b0c395d.webp?size=4096')
                .setDescription('> Who the heck are you trying to ear-r*pe?\nUse a value below 100!')
        )

        client.distube.setVolume(message, args[0]);
        message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#2f3136')
                .setTitle('🔊  Volume updated!')
                .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/avatars/822424076491554827/701a8644d439896e81ab38824b0c395d.webp?size=4096')
                .setDescription(`> The volume has been set to ${args[0]}`)
        )
    }
}