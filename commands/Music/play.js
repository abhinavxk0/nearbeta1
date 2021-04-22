const DisTube = require('distube');

module.exports = {
    name: 'play',
    aliases: ['p'],
    category: "music",
    description: 'plays music',
    async execute(client, command, message, args, Discord) {
        if (!message.member.voice.channel) return message.channel.send('> You must be in a voice channel to execute this command!')
        const music = args.join(" ");

        client.distube.play(message, music)
        message.react('🟢');
    }
}

