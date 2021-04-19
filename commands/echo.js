module.exports = {
    name: 'echo',
    category: "music",
    description: 'echo',
    async execute(client, command, message, args, Discord){
        let filter = client.distube.setFilter(message, command);
        message.channel.send("Current queue filter: " + (filter || "**Off**"));
    }
}

