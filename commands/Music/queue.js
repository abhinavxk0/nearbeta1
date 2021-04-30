const DisTube = require('distube');

module.exports = {
    name: 'queue',
    aliases: ['q'],
    category: "music",
    description: 'shows song queue',
    async execute(client, command, message, args, Discord) {
        if (!message.member.voice.channel) return message.channel.send('> You must be in a voice channel to execute this command!')

        let queue = client.distube.getQueue(message);
        message.channel.send(
            new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle('Queue')
                .setAuthor('NearBot Beta', 'https://cdn.discordapp.com/attachments/530277667119824917/834815044381966457/nearbot.jpg')
                .setDescription('> Current queue:\n' + queue.songs.map((song, id) =>
                    `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``
                ).slice(0, 10).join("\n"))

        );
    }
}



// ('> Current queue:\n' + queue.songs.map((song, id) =>
//             `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``
//         ).slice(0, 10).join("\n"))
