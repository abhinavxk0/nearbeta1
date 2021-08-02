module.exports = {
    name: 'np',
    category: "music",
    description: 'shows song queue',
    async execute(client, command, message, args, Discord) {

        let dis = client.distube.Song(info, user, youtube);
        let queue = client.distube.Queue(message, song);
        message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#2f3136')
                .setAuthor('Queue')
                .setDescription(`Current Track\n${dis.name} - ${queue.currentTime}`)
        );
    }
}   