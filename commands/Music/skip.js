const { Guild } = require('discord.js');
const DisTube = require('distube');

module.exports = {
    name: 'skip',
    category: "music",
    description: 'skips music',
    async execute(client, command, message, args, Discord) {
        if (!message.member.voice.channel) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#2f3136')
                .setTitle('Error!')
                .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/avatars/822424076491554827/701a8644d439896e81ab38824b0c395d.webp?size=4096')
                .setDescription('> You need to be in a voice channel to execute this command!')
        )
        
        if (!message.member.roles.cache.some(role => role.name === 'DJ')) return message.channel.send(
            new Discord.MessageEmbed()
            .setColor('#d81b60')
            .setTitle('Error!')
            .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/avatars/822424076491554827/701a8644d439896e81ab38824b0c395d.webp?size=4096')    
            .setDescription('> You need the `DJ` role to skip songs!\n To skip songs make a role named `DJ`!')        
        )
        
        client.distube.skip(message)
        message.react("<:skip:850343858759270471>")
    }
}