module.exports = {
    name: 'shuffle',
    aliases: [''],
    async execute(client, command, message, args, Discord){
        if (!message.member.voice.channel) return message.channel.send('> You must be in a voice channel to execute this command!')

        client.distube.shuffle(message);
    message.react('🔀');
    }
}