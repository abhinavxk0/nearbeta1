const DisTube = require('distube');

module.exports = {
    name: 'loop',
    aliases: ['repeat'],
    description: 'loops song',
    async execute(client, command, message, args, Discord) {
        let mode = client.distube.setRepeatMode(message, parseInt(args[0]));
        mode = mode ? mode == 2 ? "Repeat queue" : "Repeat song" : "Off";
        
        if (!message.member.voice.channel) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#2f3136')
                .setTitle('Error!')
                .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/attachments/530277667119824917/834815044381966457/nearbot.jpg')
                .setDescription('> You need to be in a voice channel to execute this command!')
        )
        "Set repeat mode to `" + mode + "`"
        message.channel.send(
            new Discord.MessageEmbed()
            .setTitle('Repeat Mode')
            .setColor('#2f3136')
            .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/attachments/530277667119824917/834815044381966457/nearbot.jpg')
            .setDescription("Set repeat mode to `" + mode + "`")
        );
        message.react('🔁');
    }
}

