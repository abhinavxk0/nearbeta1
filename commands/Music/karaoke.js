module.exports = {
    name: 'karaoke',
    description: 'karaoke',
    async execute(client, command, message, args, Discord){
        const filter = client.distube.setFilter(message, command);
        message.channel.send("> Current queue filter: " + (filter || "Off"));
    }
}

