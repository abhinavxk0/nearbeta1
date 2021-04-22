const DisTube = require('distube');

module.exports = {
    name: 'stop',
    aliases: ['dc'],
    category: "music",
    description: 'stops music',
    async execute(client, command, message, args, Discord) {
        if (!message.member.voice.channel) return message.channel.send('> You must be in a voice channel to execute this command!')
        let queue = await client.distube.getQueue(message);
        if (queue) {
            client.distube.stop(message)

            message.channel.send('> **Stopped** music playback and **disconnected**!')
        } else if (!queue) {
            return
        };
        message.react('🛑');
    }
}

