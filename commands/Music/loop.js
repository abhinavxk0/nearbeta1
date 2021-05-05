const DisTube = require('distube');

module.exports = {
    name: 'loop',
    aliases: ['repeat'],
    description: 'loops song',
    async execute(client, command, message, args, Discord) {
        if (!message.member.voice.channel) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle('Error!')
                .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/attachments/530277667119824917/834815044381966457/nearbot.jpg')
                .setDescription('> You need to be in a voice channel to execute this command!')
        )

        let mode = client.distube.setRepeatMode(message, parseInt(args[0]));
        mode = mode ? mode == 2 ? "Repeat queue" : "Repeat song" : "Off";
        const lEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/attachments/530277667119824917/834815044381966457/nearbot.jpg')
        message.channel.send("Set repeat mode to `" + mode + "`");
        message.react('🔁');
    }
}

