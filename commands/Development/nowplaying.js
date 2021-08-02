module.exports = {
    name: 'np',
    category: "music",
    description: 'shows song queue',
    async execute(client, command, message, args, Discord) {

        let queue = client.distube.getQueue(message);
        message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#2f3136')
                .setAuthor('Queue')
                .setDescription(`Current Track\n${client.song.name} - ${client.distube.queue.currentTime}` + queue.songs.map((song, id) =>
                    `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``
                ).slice(0, 10).join("\n") )
        );
    }
}   