const DisTube = require('distube');

module.exports = {
    name: 'loop',
    aliases: ['repeat'],
    description: 'loops song',
    async execute(client, command, message, args, Discord) {

        let mode = client.distube.setRepeatMode(message, parseInt(args[0]));
        mode = mode ? mode == 2 ? "Repeat Queue" : "Repeat Song" : "Off";
        
        if (!message.member.voice.channel) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#2f3136')
                .setDescription('You need to be in a voice channel to execute this command!')
        )
        message.channel.send(
            new Discord.MessageEmbed()
            .setAuthor('Repeat Mode')
            .setColor('#2f3136')
            .setDescription("Set repeat mode to `" + mode + "`")
        ).then(function (message){
        message.react('🔁');})
    }
}

