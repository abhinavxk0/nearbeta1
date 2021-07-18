const DisTube = require('distube');

module.exports = {
    name: 'queue',
    aliases: ['q'],
    category: "music",
    description: 'shows song queue',
    async execute(client, command, message, args, Discord) {

        if (!message.member.voice.channel) return message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#2f3136')
                .setDescription('You need to be in a voice channel to execute this command!')
        )

        let queue = client.distube.getQueue(message);
        message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#2f3136')
                .setTitle('Queue')
                .setDescription('> Current queue:\n' + queue.songs.map((song, id) =>
                    `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``
                ).slice(0, 10).join("\n"))

        );
    }
}   