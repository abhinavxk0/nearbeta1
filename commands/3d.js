module.exports = {
    name: '3d',
    category: "music",
    description: '3d',
    async execute(client, command, message, args, Discord){
        let filter = client.distube.setFilter(message, command);
        message.channel.send("Current queue filter: " + (filter || "**Off**"));
    }
}

