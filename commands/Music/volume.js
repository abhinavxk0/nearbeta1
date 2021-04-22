const { execute } = require("../Utility/help");

module.exports = {
    name: 'volume',
    aliases: ['vol'],
    async execute(client, command, message, args, Discord){
        if (!message.member.voice.channel) return message.channel.send('> You must be in a voice channel to execute this command!')
        if (args[0] > 100) return message.channel.send("> Who the heck are you trying to ear-ra*e?")
        
        client.distube.setVolume(message, args[0]);
        message.channel.send(`> Volume set to ${args[0]}`)
    }
}