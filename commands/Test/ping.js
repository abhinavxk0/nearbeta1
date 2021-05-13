module.exports = {
    name: 'ping',
    cooldown: 10,
    category: "info",
    description: "sends the ping of the bot",
    execute(client, command, message, args, Discord) {
        message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#d81b60')
                .setAuthor(`🏓  Pong! ${client.ws.ping}ms`));

    }
};