module.exports = {
    name: 'np',
    category: "music",
    description: 'shows song queue',
    async execute(client, command, message, args, Discord) {

        let dis = new client.distube.Song(info, user, youtube);
        let queue = new client.distube.Queue(message, song);
        message.channel.send(
            new Discord.MessageEmbed()
                .setDescription(`Current Track\n${dis.name} - ${queue.currentTime}`)
        );
    }
}   