const { execute } = require("./resume");

module.exports = {
    name: 'seek',
    async execute(client, command, message, args, Discord){
        if (!message.member.voice.channel) return message.channel.send('> You must be in a voice channel to execute this command!')

        client.distube.seek(message, Number(args[0]))
    }
}
