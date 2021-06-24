const DisTube = require('distube');

module.exports = {
    name: 'stop',
    aliases: ['dc'],
    category: "music",
    description: 'stops music',
    async execute(client, command, message, args, Discord) {
        if (!message.member.voice.channel) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#2f3136')
                .setTitle('Error!')
                
                .setDescription('> You need to be in a voice channel to execute this command!')
        )
        if (!message.member.roles.cache.some(role => role.name === 'DJ')) return message.channel.send(
            new Discord.MessageEmbed()
            .setColor('#2f3136')
            .setTitle('Error!')
                
            .setDescription('> You need the `DJ` role to skip songs!\n To skip songs make a role named `DJ`!')        
        )

        let queue = await client.distube.getQueue(message);
        if (queue) {
            client.distube.stop(message)

            message.channel.send(
                new Discord.MessageEmbed()
                    .setColor('#2f3136')
                    .setTitle('Stopped!')
                     
                    .setDescription('> Stopped music playback and disconnected from the voice channel!')
            )
        } else if (!queue) {
            return
        };
        message.react('🛑');
    }
}

