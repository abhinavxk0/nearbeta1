module.exports = {
    name: 'resume',
    aliases: ['unpause'],
    async execute(client, command, message, args, Discord){
        if (!message.member.voice.channel) return message.channel.send('> You must be in a voice channel to execute this command!')

        client.distube.resume(message);

        message.react('⏯');

    }
}