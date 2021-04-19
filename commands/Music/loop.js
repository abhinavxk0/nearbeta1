module.exports = {
    name: 'loop',
    description: 'loops song',
    async execute(client, command, message, args, Discord){
        if (!message.member.voice.channel) return message.channel.send('> You must be in a voice channel to execute this command!')
        
        if (["repeat", "loop"].includes(command))
        client.distube.setRepeatMode(message, parseInt(args[0]));
    }
}

