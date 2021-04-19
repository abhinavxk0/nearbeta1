module.exports = {
    name: 'karaoke',
    category: "music",
    description: 'karaoke',
    async execute(client, command, message, args, Discord){
        let filter = client.distube.setFilter(message, command);
        message.channel.send("Current queue filter: " + (filter || "**Off**"));
    }
}

